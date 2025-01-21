import admin from 'firebase-admin';

admin.initializeApp({
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'demo-project-test',
  credential: admin.credential.applicationDefault(),
});

const db = admin.firestore();

export const clearFirestoreCollection = async (
  collectionName: string
): Promise<void> => {
  const collectionRef = db.collection(collectionName);

  try {
    const snapshot = await collectionRef.get();

    if (snapshot.empty) {
      console.log(`No documents found in collection: ${collectionName}`);
      return;
    }

    const deletePromises = snapshot.docs.map((doc) => doc.ref.delete());
    await Promise.all(deletePromises);

    console.log(`Cleared collection: ${collectionName}`);
  } catch (error) {
    console.error(`Error clearing collection "${collectionName}":`, error);
    throw error;
  }
};

export const seedFirestoreCollection = async (
  collectionName: string,
  data: any[]
) => {
  const batch = db.batch();

  data.forEach((docData, index) => {
    const docRef = db.collection(collectionName).doc(docData.id || `${index}`);
    batch.set(docRef, docData);
  });

  await batch.commit();
  console.log(
    `Seeded collection: ${collectionName} with ${data.length} documents.`
  );
};

export const deleteApp = async () => {
  try {
    await admin.app().delete(); // Terminate the Firebase Admin SDK app
    console.log('Firebase Admin SDK app terminated.');
  } catch (error) {
    console.error('Error terminating Firebase Admin SDK app:', error);
  }
};

export { db };
