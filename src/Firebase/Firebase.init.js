// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCvU1msTG-Xq9Tga9eWHd0Mb0mjLR36cVE',
  authDomain: 'financial-service-c1c6c.firebaseapp.com',
  projectId: 'financial-service-c1c6c',
  storageBucket: 'financial-service-c1c6c.appspot.com',
  messagingSenderId: '501166961996',
  appId: '1:501166961996:web:7dc34479b4681c9431cbe9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
