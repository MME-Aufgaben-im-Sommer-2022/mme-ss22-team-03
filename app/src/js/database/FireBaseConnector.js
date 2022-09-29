/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need

import FireBaseConfig from "./FireBaseConfig.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getDatabase, ref, set, child, update, remove, get } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";

class FireBaseConnector {

    constructor() {
        this.app = initializeApp(FireBaseConfig);
        this.db = getDatabase();
        this.dbRef = ref(this.db);
    }

    sendEventRequestData(requestDataEvent) {
        set(ref(this.db, "data/requests/membership/" + requestDataEvent.id), {
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

    sendMembershipData(requestDataMembership) {
        set(ref(this.db, "data/requests/membership/" + requestDataMembership.id), {
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

    getData(path) {

        get(child(this.dbRef, path)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    async sendTest() {
        // TODO Implement dummy request to test firebase connection
    }
    
}

export default new FireBaseConnector();