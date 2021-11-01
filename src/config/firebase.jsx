import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBf8aomufaFg1V1DbZvgTrjbGCdkQl0IRo',
  authDomain: 'chase-crypto.firebaseapp.com',
  projectId: 'chase-crypto',
  storageBucket: 'chase-crypto.appspot.com',
  messagingSenderId: '936857606374',
  appId: '1:936857606374:web:92c25e1075cbc271c98327',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
