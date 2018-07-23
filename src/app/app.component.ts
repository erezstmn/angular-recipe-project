import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBBMm9So1XEOaFQ0WUnFkEQ1BKQ4Rmjn6w",
      authDomain: "angular-http-25b0e.firebaseapp.com"
    })
  }
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

}
