import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LgTask } from '../classes/lg-task';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class LgTasksService {
  tasksCollection: AngularFirestoreCollection<LgTask>;
  tasks: Observable<LgTask[]>;

  constructor(public afs: AngularFirestore) {
    this.tasks = this.afs.collection('tasks').valueChanges();
  }

  getTasks(){
    return this.tasks;
  }
  
}