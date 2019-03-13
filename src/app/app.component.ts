import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyARChPTXCzOFjRpOFvYHRn5L0BLoeY2h1o",
      authDomain: "angularpokedex-927e4.firebaseapp.com",
      databaseURL: "https://angularpokedex-927e4.firebaseio.com",
      projectId: "angularpokedex-927e4",
      storageBucket: "angularpokedex-927e4.appspot.com",
      messagingSenderId: "876537076915"
    };
    firebase.initializeApp(config);
  }
}
