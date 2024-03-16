import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyA6_at99U0o93Z78KoBJlzvoO8vTsxnj6U",
  authDomain: "sell-your-phone-6fc13.firebaseapp.com",
  databaseURL: "https://sell-your-phone-6fc13-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sell-your-phone-6fc13",
  storageBucket: "sell-your-phone-6fc13.appspot.com",
  messagingSenderId: "674521515778",
  appId: "1:674521515778:web:c4dd5f680cb214168ae41b",
  measurementId: "G-0E84L4LPMH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }