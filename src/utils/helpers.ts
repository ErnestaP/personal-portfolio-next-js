import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/firebaseConfig';
import { Data, DataForSorting, TimeStampProps } from './interfaces';

export const formatDate = (timestamp: TimeStampProps) => {
  const date = new Date(timestamp.seconds * 1000);
  return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
};

export const sortData = (data: DataForSorting[]): any[] =>
  data.sort((a, b) => {
    const dateA = a.dateFrom?.seconds || 0;
    const dateB = b.dateFrom?.seconds || 0;
    return dateB - dateA;
  });

export const normalizedData = (
  sortedData: Data[]
): (Data & { date: string })[] =>
  sortedData.map((element) => {
    const date = `${formatDate(element.dateFrom)} - ${formatDate(
      element.dateTo
    )}`;
    return {
      ...element,
      date,
    };
  });

export const fetchData = async (documentName: string): Promise<Data[]> => {
  const querySnapshot = await getDocs(collection(db, documentName));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Data[];
};
