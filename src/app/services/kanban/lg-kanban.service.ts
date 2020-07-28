import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { map } from 'rxjs/operators';
import { Section } from './classes/Section';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LgKanbanService {
  private getTasksFunction;
  private sectionsBehavior = new BehaviorSubject<Section[]>([]);
  sections$ = this.sectionsBehavior.asObservable();
  private tasksBehavior = new BehaviorSubject<Section[]>([]);
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
              return new Section({
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





  
  // createSection(section:Section): Promise<DocumentReference> {
  //   this.sectionsCollection = this.db.collection<Section>('sections');
  //   return this.sectionsCollection.add(JSON.parse(JSON.stringify(section)));
  // }

  // updateSection(section:Section): Promise<void>{
  //   return this.db.doc(`/sections/${section.id}`).update(section.serialized());
  // }

  // deleteSection(section:Section){
  //   return this.db.doc(`/sections/${section.id}`).delete();
  // }
  //#endregion
}