import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbfYhJSFJuCCkiwQG7cbzI54Q3WyxccrY",
    authDomain: "next-todo-9ab1f.firebaseapp.com",
    projectId: "next-todo-9ab1f",
    storageBucket: "next-todo-9ab1f.appspot.com",
    messagingSenderId: "745816447843",
    appId: "1:745816447843:web:681b75bba04cccd7b11156"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)