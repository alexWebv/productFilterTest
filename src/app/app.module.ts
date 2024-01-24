import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCp-3XTfkHubns63eCR7wkgCtGoxcq0cLU",
  authDomain: "filterproduct-825a9.firebaseapp.com",
  projectId: "filterproduct-825a9",
  storageBucket: "filterproduct-825a9.appspot.com",
  messagingSenderId: "1085834860799",
  appId: "1:1085834860799:web:8900d4b5d422f7e4b754ca",
  measurementId: "G-J6T8F2SPHW"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // for firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
