import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDdxjZJxsB4WyGEd9z3A_aupGnj0RjgKw4",
    authDomain: "task-managment-45a75.firebaseapp.com",
    projectId: "task-managment-45a75",
    storageBucket: "task-managment-45a75.appspot.com",
    messagingSenderId: "1012910436437",
    appId: "1:1012910436437:web:532f3465eca3c7c8b764dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;