import Cookies from "js-cookie";
import { signOut } from "firebase/auth";
import {auth} from "../configs/firebase";


export class AuthService {
    
  isAuthorized() {
    if (this.getToken() || this.getRefreshToken()) return true;
    return false;
  }

  getToken() {
    const token = Cookies.get("idToken");
    return token;
  }

  getRefreshToken() {
    return Cookies.get("refreshToken");
  }

  storeCredentialsToCookie({ idToken, refreshToken }) {
    const expires = new Date();
    expires.setSeconds(expires.getSeconds() + 10);
    if (idToken) Cookies.set("idToken", idToken, { expires });
    Cookies.set("refreshToken", refreshToken);
  }

  clearCredentialsFromCookie() {
    Cookies.remove("idToken");
    Cookies.remove("refreshToken");
  }
  
  async logOut() {
    try {
      await signOut(auth);
      this.clearCredentialsFromCookie();
      window.location.href = "/";
    } catch (err) {
      console.error(err);
    }
  }
}
