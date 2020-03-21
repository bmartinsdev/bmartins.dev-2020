import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { LgSection } from '../classes/lg-section';
import { LgTask } from '../classes/lg-task';
import { LgComment } from '../classes/lg-comment';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class LgKanbanService {
  private sectionsCollection: AngularFirestoreCollection<LgSection>;
  private tasksCollection: AngularFirestoreCollection<LgTask>;
  private commentsCollection: AngularFirestoreCollection<LgComment>;

  constructor(public db: AngularFirestore) {}

  //#region SectionsCrud
  getSections(){
    this.sectionsCollection = this.db.collection<LgSection>('sections', ref => ref.orderBy('position'));
    return this.sectionsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return new LgSection({ id, ...data });
      }))
    );
  }

  createSection(section:LgSection): Promise<DocumentReference> {
    this.sectionsCollection = this.db.collection<LgSection>('sections');
    return this.sectionsCollection.add(JSON.parse(JSON.stringify(section)));
  }

  updateSection(section:LgSection): Promise<void>{
    return this.db.doc(`/sections/${section.id}`).update(section.serialized());
  }

  deleteSection(section:LgSection){
    return this.db.doc(`/sections/${section.id}`).delete();
  }
  //#endregion

  //#region TasksCrud 
  getTasks(sectionId){
    this.tasksCollection = this.db.collection<LgTask>('tasks', ref => ref.where('section', '==', sectionId).orderBy('position'));
    return this.tasksCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return new LgTask({ id, ...data });
      }))
    );
  }

  createTask(task:LgTask): Promise<DocumentReference> {
    this.tasksCollection = this.db.collection<LgTask>('tasks');
    return this.tasksCollection.add(JSON.parse(JSON.stringify(task)));
  }

  updateTask(task:LgTask): Promise<void>{
    return this.db.doc(`/tasks/${task.id}`).update(task.serialized());
  }

  deleteTask(task:LgTask){
    return this.db.doc(`/tasks/${task.id}`).delete();
  }
  //#endregion

  //#region CommentsCrud 
  getComments(taskId){
    this.commentsCollection = this.db.collection<LgComment>('comments', ref => ref.where('task', '==', taskId).orderBy('date', 'asc'));
    return this.commentsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return new LgComment({ id, ...data });
      }))
    );
  }

  createComment(comment:LgComment): Promise<DocumentReference> {
    this.commentsCollection = this.db.collection<LgComment>('comments');
    return this.commentsCollection.add(JSON.parse(JSON.stringify(comment)));
  }

  updateComment(comment:LgComment): Promise<void>{
    return this.db.doc(`/comments/${comment.id}`).update(comment.serialized());
  }

  deleteComment(comment:LgComment){
    return this.db.doc(`/comments/${comment.id}`).delete();
  }
  //#endregion
}