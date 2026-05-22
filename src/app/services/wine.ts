import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc
} from '@angular/fire/firestore';
import {
  Storage,
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes
} from '@angular/fire/storage';
import { Wine } from '../models/wine';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private firestore = inject(Firestore);
  private storage = inject(Storage);

  async getWines(): Promise<Wine[]> {
    const winesRef = collection(this.firestore, 'wines');
    const snapshot = await getDocs(winesRef);

    return snapshot.docs.map(document => {
      return {
        id: document.id,
        ...document.data()
      } as Wine;
    });
  }

  addOrUpdateWine(wine: Wine): Promise<void> {
    const wineRef = doc(this.firestore, `wines/${wine.id}`);
    return setDoc(wineRef, wine);
  }

  deleteWine(wineId: string): Promise<void> {
    const wineRef = doc(this.firestore, `wines/${wineId}`);
    return deleteDoc(wineRef);
  }

  async uploadWineImage(file: File, wineId: string): Promise<string> {
    const imageRef = ref(this.storage, `wine-images/${wineId}/${file.name}`);

    await uploadBytes(imageRef, file, {
      contentType: file.type
    });

    return getDownloadURL(imageRef);
  }

  async deleteWineImage(imageUrl: string): Promise<void> {
    if (!imageUrl) {
      return;
    }

    const imageRef = ref(this.storage, imageUrl);
    await deleteObject(imageRef);
  }
}