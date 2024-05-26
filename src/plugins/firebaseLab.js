import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCItpFglD5fetPXyTKMbe_kTj5Kbd5x270',
  authDomain: 'lab-app-4e3d1.firebaseapp.com',
  projectId: 'lab-app-4e3d1',
  storageBucket: 'lab-app-4e3d1.appspot.com',
  messagingSenderId: '269302912901',
  appId: '1:269302912901:web:59fe7d56ad1fd2b90c56ec'
}

const app = initializeApp(firebaseConfig)

export const firebaseDbLab = getFirestore(app)
