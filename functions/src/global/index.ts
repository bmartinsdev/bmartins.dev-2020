import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { SnakeScore, Score } from "./classes";

admin.initializeApp();

// Updates Snake Score
// * data:
// ** score: string
// ** max: string
// ** user: string
// return updated score
export const updateSnakeScore = functions.https.onCall((data, context) => {
  const db = admin.firestore();
  db.collection("users")
    .doc("snakeTop10")
    .get()
    .then((snakeTop10: any) => {
      let storedScore: any = {};
      if (snakeTop10.data.length) {
        storedScore = snakeTop10.data as SnakeScore;
      }
      if (Number(data.score) > storedScore[storedScore.length - 1].score) {
        storedScore.checkHighestScores(data as Score);
      }

      db.collection("users")
        .doc("snakeTop10")
        .update(storedScore)
        .then((snapshot: any) => {
          return snapshot;
        })
        .catch((err: any) => {
          throw new functions.https.HttpsError("unknown", err.message, err);
        });
    })
    .catch((err: any) => {
      throw new functions.https.HttpsError("unknown", err.message, err);
    });
});

// Returns highest scores
// return Score[];
export const getSnakeScore = functions.https.onCall((data, context) => {
  const db = admin.firestore();
  db.collection("users")
    .doc("snakeTop10")
    .get()
    .then((snapshot: any) => {
      return snapshot.data;
    })
    .catch((err: any) => {
      throw new functions.https.HttpsError("unknown", err.message, err);
    });
});
