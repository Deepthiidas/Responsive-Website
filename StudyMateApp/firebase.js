import firebase from 'firebase/app';
import 'firebase/auth';

// Your actual Firebase configuration (replace with the values you copied from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyD5ZcS25UmE28eDEkjKhyk8XV1xkuF7GfE",
  authDomain: "studymate-4e22d.firebaseapp.com",
  projectId: "studymate-4e22d",                        
  storageBucket: "studymate-4e22d.firebasestorage.app",        
  messagingSenderId: "476701117078",                  
  appId: "1:476701117078:web:f58335869f7bf14b6b90b7"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized
}

export { firebase };
