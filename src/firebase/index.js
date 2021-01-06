import firebase from 'firebase'
import '@firebase/firestore' // 👈 If you're using firestore
import ReduxSagaFirebase from 'redux-saga-firebase'

const FirebaseCore = firebase.initializeApp({
      apiKey: "AIzaSyC7tGBWOMD-BjNeQcG2CjKoeuHmXD0kkro",
      authDomain: "todolist-a3f39.firebaseapp.com",
      projectId: "todolist-a3f39",
      storageBucket: "todolist-a3f39.appspot.com",
      messagingSenderId: "609768108108",
      appId: "1:609768108108:web:d8218dcb955fd65a0444e9"
})

const todoRef = new ReduxSagaFirebase(FirebaseCore);

export default todoRef;