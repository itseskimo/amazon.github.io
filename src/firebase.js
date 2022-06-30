import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCXnU7phqZhdbJeKH1Mjorno5eHrbtR8u0",
    authDomain: "fir-8f32b.firebaseapp.com",
    projectId: "fir-8f32b",
    storageBucket: "fir-8f32b.appspot.com",
    messagingSenderId: "426668208965",
    appId: "1:426668208965:web:ca677cf4db5b00c7dec42c",
    measurementId: "G-Z4H8J68XG7"
  };

  const app= initializeApp(firebaseConfig)
  export const auth= getAuth(app)
