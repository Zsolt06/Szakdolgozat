import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionGroup,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserWineService {
  private firestore = inject(Firestore);

  async getFavoriteIds(userId: string): Promise<string[]> {
    const favoritesRef = collection(this.firestore, `users/${userId}/favorites`);
    const snapshot = await getDocs(favoritesRef);

    return snapshot.docs.map(document => document.id);
  }

  async getRatingsMap(userId: string): Promise<Record<string, number>> {
    const ratingsRef = collection(this.firestore, `users/${userId}/ratings`);
    const snapshot = await getDocs(ratingsRef);

    const ratings: Record<string, number> = {};

    snapshot.docs.forEach(document => {
      const data = document.data() as { rating: number };
      ratings[document.id] = data.rating;
    });

    return ratings;
  }

  async toggleFavorite(userId: string, wineId: string): Promise<void> {
    const favoriteRef = doc(this.firestore, `users/${userId}/favorites/${wineId}`);
    const favoriteSnap = await getDoc(favoriteRef);

    if (favoriteSnap.exists()) {
      await deleteDoc(favoriteRef);
      return;
    }

    await setDoc(favoriteRef, {
      wineId,
      createdAt: serverTimestamp()
    });
  }

  removeFavorite(userId: string, wineId: string): Promise<void> {
    const favoriteRef = doc(this.firestore, `users/${userId}/favorites/${wineId}`);
    return deleteDoc(favoriteRef);
  }

  removeRating(userId: string, wineId: string): Promise<void> {
    const ratingRef = doc(this.firestore, `users/${userId}/ratings/${wineId}`);
    return deleteDoc(ratingRef);
  }

  setRating(userId: string, wineId: string, rating: number): Promise<void> {
    const ratingRef = doc(this.firestore, `users/${userId}/ratings/${wineId}`);

    return setDoc(
      ratingRef,
      {
        wineId,
        rating,
        updatedAt: serverTimestamp()
      },
      { merge: true }
    );
  }

  async getAverageRatings(): Promise<Record<string, { average: number; count: number }>> {
    const ratingsRef = collectionGroup(this.firestore, 'ratings');
    const snapshot = await getDocs(ratingsRef);

    const ratingStats: Record<string, { sum: number; count: number }> = {};

    snapshot.docs.forEach(document => {
      const data = document.data() as { wineId: string; rating: number };

      if (!ratingStats[data.wineId]) {
        ratingStats[data.wineId] = {
          sum: 0,
          count: 0
        };
      }

      ratingStats[data.wineId].sum += data.rating;
      ratingStats[data.wineId].count += 1;
    });

    const averages: Record<string, { average: number; count: number }> = {};

    Object.keys(ratingStats).forEach(wineId => {
      averages[wineId] = {
        average: ratingStats[wineId].sum / ratingStats[wineId].count,
        count: ratingStats[wineId].count
      };
    });

    return averages;
  }
}