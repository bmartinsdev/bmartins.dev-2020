import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { Observable, of, BehaviorSubject } from "rxjs";
import { Project } from "./classes/Project";

@Injectable({
  providedIn: "root",
})
export class LgProjectsService {
  private projectsBehavior = new BehaviorSubject<Project[]>([]);
  projects$ = this.projectsBehavior.asObservable();

  constructor(public db: AngularFirestore) {}

  //#region projects
  getProjects() {
    // let projectList = this.db.doc('projects/projectList').valueChanges();

    // projectList.subscribe({
    //   next: (projects) => {
    //     if(projects){
    //       this.projectsBehavior.next(Object.entries(projects).map(
    //         ([key, value]) => {
    //           return new Project({
    //               id: key,
    //               content: value
    //             });
    //         })
    //       )
    //     }
    //   }
    // });
    this.projectsBehavior.next([
      new Project("NDpiVjyuawV4HkV6SIOr", {
        title: "Orbiting Particles",
        date: new Date("09/01/2019"),
        description:
          "Tried to replicate an animation seen on season 3 of Westworld in p5.js. Failed miserably but ended up with a cool effect.",
        gallery: [
          "https://firebasestorage.googleapis.com/v0/b/applughwebsite.appspot.com/o/p5-orbit-particle-effect-final.gif?alt=media&token=60333725-8f6d-4d72-ae99-30c371197d5f",
          "https://firebasestorage.googleapis.com/v0/b/applughwebsite.appspot.com/o/p5-orbit-particle-effect-inspiration.jpg?alt=media&token=a9712068-5b96-4833-bc3d-0cbc82867df5",
          "https://firebasestorage.googleapis.com/v0/b/applughwebsite.appspot.com/o/p5-orbit-particle-effect-final.gif?alt=media&token=60333725-8f6d-4d72-ae99-30c371197d5f",
          "https://firebasestorage.googleapis.com/v0/b/applughwebsite.appspot.com/o/p5-orbit-particle-effect-inspiration.jpg?alt=media&token=a9712068-5b96-4833-bc3d-0cbc82867df5",
        ],
        tags: ["javascript", "p5.js"],
        previewUrl: "https://lughapp.github.io/p5-orbit-particle-effect",
        repoUrl: "https://github.com/lughapp/p5-orbit-particle-effect",
        hex: "#333333",
      }),
      new Project("YsX8pVRZGMCqeoN7Z76R", {
        title: "Snake Game AI",
        date: new Date("02/08/2020"),
        description:
          "Tried to replicate an animation seen on season 3 of Westworld in p5.js. Failed miserably but ended up with a cool effect.",
        gallery: [
          "https://firebasestorage.googleapis.com/v0/b/applughwebsite.appspot.com/o/p5-orbit-particle-effect-inspiration.jpg?alt=media&token=a9712068-5b96-4833-bc3d-0cbc82867df5",
        ],
        tags: ["javascript", "p5.js"],
        previewUrl: "https://lughapp.github.io/p5-snake-game/",
        repoUrl: "https://github.com/lughapp/p5-snake-game",
        hex: "#666666",
      }),
    ]);
    return this.projects$;
  }

  //#endregion projects
}
