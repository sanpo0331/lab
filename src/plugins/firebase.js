import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAFlateJ8Qyljm6uQSRZWwdFdKUupSpGfw',
  authDomain: 'pizza-ya-db0f6.firebaseapp.com',
  projectId: 'pizza-ya-db0f6',
  storageBucket: 'pizza-ya-db0f6.appspot.com',
  messagingSenderId: '1056386969530',
  appId: '1:1056386969530:web:4c4131b0c014ec91c1f783'
}

const app = initializeApp(firebaseConfig)

export const firebaseDb = getFirestore(app)
