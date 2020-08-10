import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { BehaviorSubject } from "rxjs";
import { Project } from "./classes/Project";

@Injectable({
  providedIn: "root",
})
export class LgProjectsService {
  private projectsBehavior = new BehaviorSubject<Project[]>([]);
  private lastProject: any;
  projects$ = this.projectsBehavior.asObservable();

  constructor(public db: AngularFirestore) {}

  getProjects() {
    this.db
      .collection("portfolio", (ref) => ref.orderBy("date", "desc").limit(1))
      .get()
      .subscribe((response) => {
        this.lastProject = response.docs[response.docs.length - 1];

        for (let data of response.docs) {
          this.addToProjects(data);
        }
      });

    return this.projects$;
  }

  loadMoreProjects() {
    if (!this.lastProject) return;
    this.db
      .collection("portfolio", (ref) =>
        ref.orderBy("date", "desc").startAfter(this.lastProject).limit(1)
      )
      .get()
      .subscribe((response) => {
        this.lastProject = response.docs[response.docs.length - 1];

        for (let data of response.docs) {
          this.addToProjects(data);
        }
      });
  }

  addToProjects(project: any) {
    for (let current of this.projectsBehavior.getValue()) {
      if (current.id === project.id) return;
    }

    if (this.projectsBehavior.getValue().indexOf(project.id) !== -1) return;
    this.projectsBehavior.next([
      ...this.projectsBehavior.getValue(),
      new Project(project.id, project.data()),
    ]);
  }
}
