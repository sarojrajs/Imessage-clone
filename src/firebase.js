import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDNdeFrx5TsqxKTnQFF9d6nOLpN7mZ9aJs",
    authDomain: "imessage-4140b.firebaseapp.com",
    projectId: "imessage-4140b",
    storageBucket: "imessage-4140b.appspot.com",
    messagingSenderId: "236521459172",
    appId: "1:236521459172:web:384e865fcacf40c5218bf1",
    measurementId: "G-5XKK8HNJRF"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;