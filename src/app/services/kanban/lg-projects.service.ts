import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Project } from 'functions/src/projects/classes';

@Injectable({
  providedIn: 'root'
})
export class LgProjectsService {
  private projectsBehavior = new BehaviorSubject<Project[]>([]);
  projects$ = this.projectsBehavior.asObservable();

  constructor(public db: AngularFirestore) { }

  //#region projects
  getProjects(){
    let defaultSections = this.db.doc('projects/defaultSections').valueChanges();
    
    defaultSections.subscribe({
      next: (projects) => {
        if(projects){
          this.projectsBehavior.next(Object.entries(projects).map(
            ([key, value]) => {
              return new Project({
                  id: key,
                  content: value
                });
            })
          )
        }
      }
    });

    return this.projects$;
  }

  //#endregion projects
}
