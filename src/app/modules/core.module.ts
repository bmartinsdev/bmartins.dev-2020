import { NgModule } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { AuthService } from '../services/core/auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'lughwebsite'),
    AngularFirestoreModule
  ],
  providers: [
    AuthService,
    GlobalService
  ]
})
export class CoreModule { }