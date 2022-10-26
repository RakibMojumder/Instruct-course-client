// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlKxd5KMBeDZI049XEWnkE_vpilXg7xzQ",
    authDomain: "instruct-course.firebaseapp.com",
    projectId: "instruct-course",
    storageBucket: "instruct-course.appspot.com",
    messagingSenderId: "532810784699",
    appId: "1:532810784699:web:21a75d2a3f53a474b96e9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;