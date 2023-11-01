import Cookies from "js-cookie";
import { signOut } from "firebase/auth";
import {auth} from "../configs/firebase";
import Swal from "sweetalert2";


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
      await Swal.fire({
        icon: "success",
        title: "Log out Berhasil",
        text: "Anda berhasil keluar dari akun Anda!",
      });
      window.location.href = "/loginPage";
    } catch (err) {
      await Swal.fire({
        icon: "error",
        title: "Log out Gagal",
        text: "Anda gagal keluar dari akun Anda!",
      });
    }
  }
}
