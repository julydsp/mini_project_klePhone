import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
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

  sumProducts: async () => {
    try {
      const q = query(collection(db, "product"));
      const querySnapshot = await getDocs(q);

      let totalSum = 0;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.price && typeof data.price === "number") {
          totalSum += data.price;
        }
      });

      return totalSum;
    } catch (error) {
      throw new Error(error);
    }
  },
};
