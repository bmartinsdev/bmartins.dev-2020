// Snake game top 10
export class SnakeScore {
  rank: Array<Score>;

  constructor(scores: Array<Score>) {
    this.rank = scores;
  }

  calculateRanking(score: Score) {
    const snakeIndex = this.rank.findIndex(
      (rank) => rank.name.toLowerCase() === score.name.toLowerCase()
    );
    if (this.rank[snakeIndex]) {
      if (this.rank[snakeIndex].score < score.score) {
        this.rank[snakeIndex].score = score.score;
      }
    } else {
      this.rank.push(score);
    }
    this.rank.sort((a, b) => {
      return a.score > b.score ? -1 : 1;
    });
    this.rank = this.rank.slice(0, 10);
  }

  getRank() {
    return this.rank;
  }
}

export interface Score {
  name: string;
  score: number;
}
