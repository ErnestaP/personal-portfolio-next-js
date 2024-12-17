import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator, collection, getDocs, deleteDoc, doc, setDoc } from 'firebase/firestore';

// Firebase configuration for the test emulator
const firebaseConfig = {
  projectId: 'demo-project-test', // Test project ID
};

// Ensure the app is not initialized multiple times
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Connect Firestore to the emulator
if (process.env.NODE_ENV === 'test') {
  connectFirestoreEmulator(db, 'localhost', 8081);
}

// Clear all documents in a Firestore collection
export const clearFirestoreCollection = async (collectionName: string) => {
  const collRef = collection(db, collectionName);
  const snapshot = await getDocs(collRef);

  const deletePromises = snapshot.docs.map((doc) => deleteDoc(doc.ref));
  await Promise.all(deletePromises);
};

// Seed data into a Firestore collection
export const seedFirestoreCollection = async (collectionName: string, data: any[]) => {
  const batchPromises = data.map((docData, index) => {
    const docRef = doc(collection(db, collectionName), `${docData.id || index}`);
    return setDoc(docRef, docData);
  });
  await Promise.all(batchPromises);
};

export { db };
