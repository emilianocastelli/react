import * as firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCAFZxQe2kIQzdgetVIopKPXfWn5atH4Lw",
    authDomain: "maquetas-automovilismo.firebaseapp.com",
    projectId: "maquetas-automovilismo",
    storageBucket: "maquetas-automovilismo.appspot.com",
    messagingSenderId: "1083789898918",
    appId: "1:1083789898918:web:f0833e83993ddd8782f067",
    measurementId: "G-C0DK8WS56R"
})

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}