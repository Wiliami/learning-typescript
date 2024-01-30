import admin from "firebase-admin";

admin.initializeApp({
    credential: admin.credential.cert("serviceAccountKey.json")
});

const db = admin.firestore();

export {
    admin,
    db
};