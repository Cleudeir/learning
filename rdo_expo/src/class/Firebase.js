
import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updatePassword,
  sendPasswordResetEmail,
  deleteUser,
  sendEmailVerification,
} from 'firebase/auth';

import {
  getReactNativePersistence,
} from 'firebase/auth/react-native';
import {Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {firebaseConfig} from '../../env';
firebaseConfig;

class Firebase {
  constructor() {
    this.auth = null;
    this.user = null;
  }

  async _start() {
    const defaultApp = await new Promise(
        (resolve, reject) => {
          try {
            resolve(initializeApp(firebaseConfig));
          } catch (error) {
            console.log(error);
          }
        });
    /*
      const auth = ;*/
    const auth = await new Promise(
        (resolve, reject) => {
          try {
            resolve(getAuth(defaultApp));
          } catch (error) {
            console.log(error);
          }
        });

    const user = await new Promise(
        (resolve, reject) => {
          auth.onAuthStateChanged((user, err) => {
            if (err) {
              reject(err);
            }
            if (user) {
              resolve(user);
            } else {
              resolve(null);
            }
          });
        },
    );
    this.auth = auth;
    this.user = user;
    if (this.user) {
      console.log(user.uid);
    }
    return this.user;
  }

  async signInUserEmail(email, password) {
    console.log({auth: this.auth});
    try {
      const sign = await signInWithEmailAndPassword(this.auth, email, password);
      const {user} = sign;
      if (user) {
        return user;
      } else {
        return sign;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async createUserEmail(email, password) {
    try {
      const create = await createUserWithEmailAndPassword(this.auth, email, password);
      const {user} = create;
      console.log(user);
      if (user) {
        await sendEmailVerification(user);
        return user;
      } else {
        return create;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async updateUserPassword(password) {
    try {
      const create = await updatePassword(this.user, password);
      const {user} = create;
      if (user) {
        return user;
      } else {
        return create;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async resetPassword(email) {
    try {
      const send = await sendPasswordResetEmail(this.auth, email);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteUser(user) {
    try {
      const remove = await deleteUser(user);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async deslogar() {
    try {
      const out = await this.auth.signOut();
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
export default new Firebase();


