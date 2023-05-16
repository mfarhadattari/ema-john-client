import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ------ create user  using email and password---------- */
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* ---------- login user using email and password */
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* ------------ google sign in -------------- */
  const loginUserWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  /* ------------ log out user ---------------- */
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  /* ------------- set user name------------ */
  const setUserDisplayName = (displayName) => {
    return updateProfile(auth.currentUser, { displayName: displayName });
  };

  /* ------------- set user photo url------------ */
  const setUserPhotoURL = (photoURL) => {
    return updateProfile(auth.currentUser, { photoURL: photoURL });
  };

  /* ------------- get user ------------------- */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  /* ------------- auth information of AuthContext ------------ */
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    loginUserWithGoogle,
    logOutUser,
    setUserDisplayName,
    setUserPhotoURL,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
