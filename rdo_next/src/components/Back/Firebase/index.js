/* eslint-disable react-hooks/rules-of-hooks */
import { initFirebase } from '@/components/Back/Firebase/initFirebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updatePassword,
  sendPasswordResetEmail,
  deleteUser,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";

function Firebase(auth) {
  async function isLoged(){
    const user = await new Promise((resolve, reject) => {
      auth.onAuthStateChanged((data, err) => {
        if (err) {
          reject(null);
        }
        resolve(data);
      });
    });
    return user
  }
  async function login(email, password) {
    console.log(email, password);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.error(error);
      throw new Error("Unable to log in");
    }
  }

  async function logout() {
    try {
      const isloged = await auth.signOut();
      console.log('isloged: ',isloged)
      return true
    } catch (error) {
      console.error(error);
      throw new Error("Unable to log out");
    }
  }

  async function signUp(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
    } catch (error) {
      console.error(error);
      throw new Error("Unable to sign up");
    }
  }
  return { login, logout, signUp, isLoged };
}

export default Firebase;
