import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebaseApp';
import { Data, HasDateFromDateTo, TimeStampProps } from './interfaces';

export const formatDate = (timestamp: TimeStampProps | string) => {
  try {
    if (typeof timestamp === 'string' && timestamp.toLowerCase() === 'present') {
      return 'Present';
    }

    if (!timestamp || typeof timestamp !== 'object' || typeof timestamp.seconds !== 'number') {
      throw new Error('Invalid timestamp object');
    }

    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  } catch (e) {
    console.error(`Error was raised while formatting date! ${e}`);
    return 'Invalid Date';
  }
};

export const sortData = <T extends HasDateFromDateTo>(data: T[]): T[] => {
  if (!Array.isArray(data)) {
    throw new Error('Input to sortData must be an array.');
  }
  return data.sort((a, b) => {
    const dateA = a.dateFrom?.seconds ?? 0;
    const dateB = b.dateFrom?.seconds ?? 0;
    return dateB - dateA;
  });
};

export const normalizedData = <T extends HasDateFromDateTo>(
  sortedData: T[]
): (T & { date: string })[] =>
  sortedData.map((element) => {
    const date = `${formatDate(element.dateFrom)} - ${formatDate(
      element.dateTo
    )}`;
    return {
      ...element,
      date,
    };
  });

export const fetchData = async <T extends Data>(
  documentName: string
): Promise<T[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, documentName));

    if (querySnapshot.empty) {
      console.warn(`No data found for collection: ${documentName}`);
      return [];
    }

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as T[];
  } catch (error) {
    console.error(
      `Failed to fetch data from collection: ${documentName}`,
      error
    );
    throw new Error(
      `Could not fetch data from ${documentName}. Please check your connection or permissions.`
    );
  }
};
