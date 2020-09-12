import { NgModule } from "@angular/core";
import { GlobalService } from "../services/global.service";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireFunctionsModule } from "@angular/fire/functions";
import { environment } from "src/environments/environment";

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase, "lughwebsite"),
    AngularFirestoreModule,
    AngularFireFunctionsModule,
  ],
  providers: [GlobalService],
})
export class CoreModule {}
