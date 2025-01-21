import { emulatorConfig as devEmulator } from './firebaseConfig.dev';

export interface EmulatorConfig {
  firestore: {
    host: string;
    port: number;
  };
  [key: string]: {
    host: string;
    port: number;
  };
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const env = process.env.NODE_ENV;

let emulatorConfig: EmulatorConfig;

if (env === 'development') {
  emulatorConfig = devEmulator;
}

export { firebaseConfig, emulatorConfig };
