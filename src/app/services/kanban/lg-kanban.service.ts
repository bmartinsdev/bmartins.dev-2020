import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { LgSection } from '../kanban/classes/lg-section';
import 'firebase/firestore';
import { Observable, of, BehaviorSubject } from 'rxjs';
interface KeyValuePair {
  key: string;
  value: string;
}
@Injectable({
  providedIn: 'root'
})
export class LgKanbanService {
  private sectionsBehavior = new BehaviorSubject<LgSection[]>([]);
  sections = this.sectionsBehavior.asObservable();

  constructor(public db: AngularFirestore) {}

  //#region SectionsCrud
  getDefaultSections(){
    let defaultSections = this.db.doc('globals/defaultSections').valueChanges();
    
    defaultSections.subscribe({
      next: (sections) => {
        this.sectionsBehavior.next(Object.entries(sections).map(
          ([key, value]) => {
            return new LgSection({
                id: key,
                content: value
              });
          })
        )
      }
    });

    return this.sections;
  }

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