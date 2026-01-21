import { Injectable } from '@angular/core';
import {
    collection,
    collectionData,
    deleteDoc,
    doc,
    docData,
    Firestore,
    setDoc,
    updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FirestoreService {
    constructor(private firestore: Firestore) {}

    collection$<T>(path: string): Observable<T[]> {
        const ref = collection(this.firestore, path);
        return collectionData(ref, { idField: 'id' }) as Observable<T[]>;
    }

    doc$<T>(path: string): Observable<T> {
        const ref = doc(this.firestore, path);
        return docData(ref, { idField: 'id' }) as Observable<T>;
    }

    set(path: string, data: unknown) {
        const ref = doc(this.firestore, path);
        return setDoc(ref, data);
    }

    update(path: string, data: Partial<unknown>) {
        const ref = doc(this.firestore, path);
        return updateDoc(ref, data);
    }

    delete(path: string) {
        const ref = doc(this.firestore, path);
        return deleteDoc(ref);
    }
}
