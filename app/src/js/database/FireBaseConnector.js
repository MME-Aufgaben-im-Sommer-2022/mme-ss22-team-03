/* eslint-disable no-undef */
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

    async getData(path) {
        let snapshot;

        try {
            snapshot = await get(child(this.dbRef, path));
            if (snapshot.exists()) {
                return snapshot.val();
            }
        } catch (error) {
            console.error(error);
            throw new Error("Could not retrieve snapshot from FireBase");
        }
        return undefined;
    }

    sendTestData() {

        set(ref(this.db, "data/test2/"), {
            Prename: "TestPrename",
            Surname: "TestSurname2",
        })
            .then(() => {
                console.log("data test stored successfully");
            })
            .catch(() => {
                console.log("error storing data");
            });
    }

    sendRequestDataTest(request) {

        set(ref(this.db, "data/requests/" + request.type + "/" + request.id), request.data)
            .then(() => {
                console.log("data test stored successfully");
            })
            .catch(() => {
                console.log("error storing data");
            });
    }

    sendRequestData(requestData) {

        var data = {
            // Prename: requestDataEvent.prename,
            // Surname: requestDataEvent.surname,
            // Email: requestDataEvent.email,
            // MobileNumber: requestDataEvent.mobile,
            // Message: requestDataEvent.message,
        };

        set(ref(this.db, "data/requests/" + requestData.type + requestData.id), data)
            .then(() => {
                console.log("data test stored successfully");
            })
            .catch(() => {
                console.log("error storing data");
            });
    }

}

export default new FireBaseConnector();