import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

process.env.FIRESTORE_EMULATOR_HOST = '127.0.0.1:8080';

admin.initializeApp({
  projectId: 'demo-project',
});

const db = admin.firestore();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const educationDataPath = resolve(__dirname, 'json/education.json');
const experienceDataPath = resolve(__dirname, 'json/experience.json');
const projectDataPath = resolve(__dirname, 'json/project.json');
const hobbiesDataPath = resolve(__dirname, 'json/hobbies.json');

const readSeedData = (): Record<string, any[]> => {
  try {
    const educationRawData = readFileSync(educationDataPath, 'utf8');
    const experienceRawData = readFileSync(experienceDataPath, 'utf8');
    const projectRawData = readFileSync(projectDataPath, 'utf8');
    const hobbiesRawData = readFileSync(hobbiesDataPath, 'utf8');

    return {
      education: JSON.parse(educationRawData),
      experience: JSON.parse(experienceRawData),
      'personal-projects': JSON.parse(projectRawData),
      'professional-projects': JSON.parse(projectRawData),
      hobbies: JSON.parse(hobbiesRawData),
    };
  } catch (error) {
    console.error('Error reading JSON files:', error);
    return {};
  }
};

// Seed Firestore Emulator
const seedFirestore = async () => {
  const data = readSeedData();

  if (!data || Object.keys(data).length === 0) {
    console.error('No data found to seed Firestore.');
    return;
  }

  console.log(
    `Seeding Firestore Emulator with collections: ${Object.keys(data).join(', ')}`
  );

  for (const collectionName in data) {
    const documents = data[collectionName];
    if (!Array.isArray(documents)) {
      console.error(
        `Invalid data structure for collection "${collectionName}". Skipping.`
      );
      continue;
    }

    for (let index = 0; index < documents.length; index++) {
      const entry = documents[index];
      try {
        await db.collection(collectionName).add(entry);
        console.log(
          `Document ${index + 1} added successfully to collection "${collectionName}".`
        );
      } catch (error) {
        console.error(
          `Error adding document ${index + 1} to collection "${collectionName}":`,
          error
        );
      }
    }
    console.log(`Seeding completed for collection "${collectionName}".`);
  }
};

seedFirestore().catch((error) => {
  console.error('Error seeding Firestore Emulator:', error);
});
