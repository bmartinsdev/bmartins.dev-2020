import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { map } from 'rxjs/operators';
import { LgSection } from '../kanban/classes/lg-section';
import { Observable, of, BehaviorSubject } from 'rxjs';

interface KeyValuePair {
  key: string;
  value: string;
}
@Injectable({
  providedIn: 'root'
})
export class LgKanbanService {
  private getTasksFunction;
  private sectionsBehavior = new BehaviorSubject<LgSection[]>([]);
  sections$ = this.sectionsBehavior.asObservable();
  private tasksBehavior = new BehaviorSubject<LgSection[]>([]);
  tasks$ = this.tasksBehavior.asObservable();

  constructor(public db: AngularFirestore, private fns: AngularFireFunctions) {
    this.getTasksFunction = fns.httpsCallable('helloWorld');
  }

  //#region defaults
  getDefaultSections(){
    let defaultSections = this.db.doc('projects/defaultSections').valueChanges();
    
    defaultSections.subscribe({
      next: (sections) => {
        if(sections){
          this.sectionsBehavior.next(Object.entries(sections).map(
            ([key, value]) => {
              return new LgSection({
                  id: key,
                  content: value
                });
            })
          )
        }
      }
    });

    return this.sections$;
  }

  //#endregion defaults

  //#region tasks

  getAllTasks(){
    this.getTasksFunction().subscribe({
      next: (tasks) => {
        if(tasks) console.log(tasks);
      }
    });
  }
  //#endregion tasks





  
  // createSection(section:LgSection): Promise<DocumentReference> {
  //   this.sectionsCollection = this.db.collection<LgSection>('sections');
  //   return this.sectionsCollection.add(JSON.parse(JSON.stringify(section)));
  // }

  // updateSection(section:LgSection): Promise<void>{
  //   return this.db.doc(`/sections/${section.id}`).update(section.serialized());
  // }

  // deleteSection(section:LgSection){
  //   return this.db.doc(`/sections/${section.id}`).delete();
  // }
  //#endregion
}