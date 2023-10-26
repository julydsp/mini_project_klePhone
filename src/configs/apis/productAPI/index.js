import {
  addDoc,
  collection,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../configs/firebase";

export const APIProduct = {

  addProduct: async (product) => {
    try {
      const docRef = await addDoc(collection(db, "product"), product);
      return docRef;
    } catch (e) {
      throw new Error(e);
    }
  },
};
