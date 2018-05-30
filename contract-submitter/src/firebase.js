import firebase from "firebase";
// Initialize Firebase
const config = {
  apiKey: "AIzaSyB1zeQsPUmatnV861ugn4avuoxHrGwd2sQ",
  authDomain: "contract-submitter.firebaseapp.com",
  databaseURL: "https://contract-submitter.firebaseio.com",
  projectId: "contract-submitter",
  storageBucket: "",
  messagingSenderId: "224356704458"
};
firebase.initializeApp(config);
export default firebase;
