import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA19et_c8Hp0Ze01cV5-ssa-dlplRPETKs",
  authDomain: "ai-labs-auth.firebaseapp.com",
  projectId: "ai-labs-auth",
  storageBucket: "ai-labs-auth.firebasestorage.app",
  messagingSenderId: "729872010207",
  appId: "1:729872010207:web:fd372ec402750f2f98126a"
};

// Next.js hot-reload ke waqt multiple instances se bachne ke liye check
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();