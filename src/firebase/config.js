import Firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAOTkl0PJ9fQKALMGjl7jnpHOSqFR99SL8",
    authDomain: "olx-clone-7c3b0.firebaseapp.com",
    projectId: "olx-clone-7c3b0",
    storageBucket: "olx-clone-7c3b0.appspot.com",
    messagingSenderId: "591197385663",
    appId: "1:591197385663:web:aa2cfb47867c7d7402670a",
    measurementId: "G-Q1PPZ8HHX2"
  };

  export default  Firebase.initializeApp(firebaseConfig); 

 