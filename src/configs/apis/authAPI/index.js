// authActions.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { authService } from "../../auth/auth.js";

export const APIAuth = {
  signInWithCredentials: async ({ email, password }) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const { idToken, refreshToken } = result._tokenResponse;
      authService.storeCredentialsToCookie({ idToken, refreshToken });
    } catch (err) {
      throw new Error(err);
    }
  },
};
