import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../../firebase/firebase";

export const loginWithEmailService = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
    displayName: userCredential.user.displayName,
    photoURL: userCredential.user.photoURL,
  };
};

export const loginWithGoogleService = async () => {
  const userCredential = await signInWithPopup(auth, googleProvider);
  return {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
    displayName: userCredential.user.displayName,
    photoURL: userCredential.user.photoURL,
  };
};

export const loginWithGithubService = async () => {
  const userCredential = await signInWithPopup(auth, githubProvider);
  return {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
    displayName: userCredential.user.displayName,
    photoURL: userCredential.user.photoURL,
  };
};

export const logoutService = async () => {
  await signOut(auth);
};