import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import {
  firebaseConfig,
  emulatorConfig,
} from '../firebase/config/firebaseConfig';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (process.env.NODE_ENV === 'development') {
  connectFirestoreEmulator(
    db,
    emulatorConfig.firestore.host,
    emulatorConfig.firestore.port
  );
}

export { db };
