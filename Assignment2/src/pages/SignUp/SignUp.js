import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const email = useRef();
  const pass1 = useRef();
  const pass2 = useRef();
  const navigate = useNavigate();


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1GefQAnfdggA4mdsk44c7L8mCMa-EjPE",
  authDomain: "weblabw25.firebaseapp.com",
  projectId: "weblabw25",
  storageBucket: "weblabw25.firebasestorage.app",
  messagingSenderId: "272023251119",
  appId: "1:272023251119:web:88ebff6e918c0e563f8c5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

  // Function to handle login
    const handleRegister = () => {

        let userEmail = email.current.value;
        let pass = pass1.current.value
        let repass = pass2.current.value

        if(userEmail === '' || pass === '' || repass === ''){
            alert("Please Enter all Values!!" );
        }
        else if(Object.is(pass, repass)){ 

            alert(pass);
            createUserWithEmailAndPassword(auth, userEmail, pass)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                navigate('/login');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode);
                // ..
            });
        }
        else{
            alert("Passwords are not Matching!!");
        }
};
    
  return (
    <div>
      <h2>Register</h2>
      <form>    
            <label>Email</label>
            <input name="myInput" ref={email} type ="value"/>
            <label>Password</label>
            <input name="myInput" ref={pass1} type ="password"/>
            <label>Re-Enter Password</label>
            <input name="myInput" ref={pass2} type ="value"/>
            <button onClick={handleRegister}>Register</button>
      </form>
    </div>
    
  );
};
 
export default SignUp;