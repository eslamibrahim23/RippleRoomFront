/* eslint-disable @typescript-eslint/no-unused-vars */

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFMyi1DZ0ENqSMOid6xDYNBDiDpSJsncg",
  authDomain: "rippleroom-8d776.firebaseapp.com",
  projectId: "rippleroom-8d776",
  storageBucket: "rippleroom-8d776.appspot.com",
  messagingSenderId: "1088183835718",
  appId: "1:1088183835718:web:f7b2aef93e72dd04227e47",
  measurementId: "G-NYJ4BWT6ZS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export{auth,provider};
