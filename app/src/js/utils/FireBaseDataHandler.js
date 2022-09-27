/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, child, update, remove } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1RqrjQVI16xfNNTwzhQ-YKQkWf3S00mE",
    authDomain: "pastina-4ea63.firebaseapp.com",
    projectId: "pastina-4ea63",
    storageBucket: "pastina-4ea63.appspot.com",
    messagingSenderId: "300140864700",
    appId: "1:300140864700:web:70c30d84405e2c6dfbdcb9",
    measurementId: "G-9RCL1B7LBC",
},

    // Initialize Firebase
    app = initializeApp(firebaseConfig),
    analytics = getAnalytics(app),
    db = getDatabase();

// function SetData(data) {
//     set(ref(db, ""))
// }

// function SendRequest(request) {

// }

function sendTest() {
    set(ref(db, "Test/Value"), {
        TestValue1: "001",
        TestValue2: "002",
    })
        .then(() => {
            console.log("data test stored successfully");
        })
        .catch(() => {
            console.log("error storing data");
        });
}

export default sendTest;