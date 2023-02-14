import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import firebaseConfig from './private/config'

const app = initializeApp(firebaseConfig);

// ****** Start Firebase Authentication ****** //
const auth = getAuth(app)

export const signIn = (email, password) => {
    console.log("SignIn")
  signInWithEmailAndPassword(auth, email, password)
  .then(auth => {
      if (auth) {
          console.log(auth)
      }
  }).catch(
      error => alert(error)
  )
}

export const register = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((auth) => {
      console.log(auth)
      if (auth){
          return true
      }
  }).catch(
      err => alert(err)
  )
}
// ****** End Firebase Authentication ****** //

// ****** Start Firebase Firestore ****** //
const db = getFirestore(app)
// ****** End Firebase Firestore ****** //

export {db, auth}