import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../configs/firebase";

export const APIProduct = {
  getProducts: async () => {
    try {
      const result = await getDocs(collection(db, "product"));
      const product = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return product;
    } catch (error) {
      alert("login failed. your email or password is wrong!");
    }
  },

  addProduct: async (product) => {
    try {
      const docRef = await addDoc(collection(db, "product"), product);
      return docRef;
    } catch (e) {
      throw new Error(e);
    }
  },


  updateProduct: async (id, updatedProduct) => {
    try {
      const productRef = doc(db, "product", id);
      await setDoc(productRef, updatedProduct, { merge: true });
      return "Product updated successfully";
    } catch (e) {
      throw new Error(e);
    }
  },


  deleteProduct: async (id) => {
    try {
      console.log(id);
      const productRef = doc(db, "product", id);
      await deleteDoc(productRef);
      return;
    } catch (e) {
      console.error("Error deleting document: ", e);
      throw new Error(e);
    }
  },
};
