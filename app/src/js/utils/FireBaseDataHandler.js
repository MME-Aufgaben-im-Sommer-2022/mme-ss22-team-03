/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, update, remove, get } from "firebase/database";

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
    db = getDatabase(),
    dbRef = ref(db);

function sendEventRequestData(requestDataEvent) {
    set(ref(db, "data/requests/membership/" + requestDataEvent.id), {
        Prename: requestDataEvent.prename,
        Surname: requestDataEvent.surname,
        Email: requestDataEvent.email,
        MobileNumber: requestDataEvent.mobile,
        Message: requestDataEvent.message,
    })
        .then(() => {
            console.log("data test stored successfully");
        })
        .catch(() => {
            console.log("error storing data");
        });
}

function sendMembershipData(requestDataMembership) {
    set(ref(db, "data/requests/membership/" + requestDataMembership.id), {
        Prename: requestDataMembership.prename,
        Surname: requestDataMembership.surname,
        Email: requestDataMembership.email,
        MobileNumber: requestDataMembership.mobile,
        Street: requestDataMembership.street,
        PLZ: requestDataMembership.plz,
        City: requestDataMembership.city,
        Birthday: requestDataMembership.birthday,
    })
        .then(() => {
            console.log("data test stored successfully");
        })
        .catch(() => {
            console.log("error storing data");
        });
}

function getData(path) {

    get(child(dbRef, path)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

export default sendTest;