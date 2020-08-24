import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { SnakeScore, Score } from "./classes";

// Updates Snake Score
// * data:
// ** score: string
// ** max: string
// ** user: string
// return updated score
export const updateSnakeScore = functions.https.onCall(
  async (data, context) => {
    try {
      const snapshot = await admin
        .firestore()
        .collection("users")
        .doc("snakeTop10")
        .get();
      const top10: any = snapshot.data();

      let storedScore: any = {};
      if (top10.rank.length) {
        storedScore = new SnakeScore(top10.rank);
      }

      if (
        Number(data.score) > top10.rank[top10.rank.length - 1].score ||
        top10.rank.length < 10
      ) {
        storedScore.calculateRanking(data as Score);
      }
      await admin
        .firestore()
        .collection("users")
        .doc("snakeTop10")
        .update({ rank: storedScore.getRank() });
      return storedScore.getRank();
    } catch (error) {
      throw new functions.https.HttpsError("unknown", error.message, error);
    }
  }
);
