import firebaseClient from "firebase/app";
import "firebase/auth";

/*

Copy/paste your *client-side* Firebase credentials below. 

To get these, go to the Firebase Console > open your project > Gear Icon >
Project Settings > General > Your apps. If you haven't created a web app
already, click the "</>" icon, name your app, and copy/paste the snippet.
Otherwise, go to Firebase SDK Snippet > click the "Config" radio button >
copy/paste.

*/
const CLIENT_CONFIG = {
  apiKey: "AIzaSyAT_SvjLsot2zr19aeS8Mo-EC5PAWTSdhQ",
  authDomain: "mediasite-19827.firebaseapp.com",
  databaseURL: "https://mediasite-19827.firebaseio.com",
  projectId: "mediasite-19827",
  storageBucket: "mediasite-19827.appspot.com",
  messagingSenderId: "958361970687",
  appId: "1:958361970687:web:512b55eaac0cc92e23e9ca",
  measurementId: "G-848B7SKXPJ"
};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  (window as any).firebase = firebaseClient;
}

export { firebaseClient };
