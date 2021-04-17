import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBqb6BdXYCBI_hICYB792U25pkERBvSOLI",
      authDomain: "books-managment-410dc.firebaseapp.com",
      projectId: "books-managment-410dc",
      storageBucket: "books-managment-410dc.appspot.com",
      messagingSenderId: "922250520372",
      appId: "1:922250520372:web:b3b3b7bbeba91ba7186761"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
