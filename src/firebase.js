import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBXDSYhx-m4dtIPMllUEaWNR-cIIuwbAkc",
    authDomain: "clone-8b1b2.firebaseapp.com",
    databaseURL: "https://clone-8b1b2.firebaseio.com",
    projectId: "clone-8b1b2",
    storageBucket: "clone-8b1b2.appspot.com",
    messagingSenderId: "773468396177",
    appId: "1:773468396177:web:e87fb88c284192326bbd30",
    measurementId: "G-9XJVF7XLEL"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}