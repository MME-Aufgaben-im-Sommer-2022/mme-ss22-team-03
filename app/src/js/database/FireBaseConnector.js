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

    sendRequestData(requestData, type) {

        var request = {
            id: "unknown",
            data: requestData,
        };

        request.id = requestData.surname + "_" + requestData.prename + "_" + requestData.birthday;

        set(ref(this.db, "data/requests/" + type + "/" + request.id), request.data)
            .then(() => {
                console.log("data test stored successfully");
            })
            .catch(() => {
                console.log("error storing data");
            });
    }
}

export default new FireBaseConnector();