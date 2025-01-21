import 'core-js/stable/structured-clone';

import { fetchData } from '@/utils/helpers';
import { formatDate, normalizedData, sortData } from '@/utils/helpers';
import { TimeStampProps } from '@/utils/interfaces';
import { readFakeData } from '../__mocks__/fakeData';

describe('test formatDate function', () => {
  it('returns the correct formed date', () => {
    const date = formatDate({ seconds: 1441065600, nanoseconds: 0 });
    expect(date).toBe('September 2015');
  });

  it('returns the correct formed date when nanosec is not 0', () => {
    const date = formatDate({ seconds: 1630454400, nanoseconds: 47264628 });
    expect(date).toBe('September 2021');
  });

  it('returns "Invalid Date" if the passed data object is empty', () => {
    const date = formatDate({} as TimeStampProps);
    expect(date).toBe('Invalid Date');
  });

  it('returns the "Invalid Date" if the passed invalid data object', () => {
    const date = formatDate({ name: 'Name', surname: 'Surname' } as any);
    expect(date).toBe('Invalid Date');
  });
});

describe('test normalizedData function', () => {
  it('adds a formatted date prop and retains all other properties', async () => {
    const { fakeEducation } = await readFakeData();
    const originalEducation = [...fakeEducation];

    const data = normalizedData([...fakeEducation]);
    const firstEducation = data[0];

    expect(fakeEducation).toEqual(originalEducation);
    expect(firstEducation).toHaveProperty('date');
    expect(firstEducation).toHaveProperty('date', 'September 2015 - June 2019');
    const { date, ...rest } = firstEducation;
    expect(rest).toEqual(fakeEducation[0]);
  });

  it('does not crash if dateFrom is invalid', async () => {
    const { fakeEducation } = await readFakeData();
    const recordWithInvalidTimeStamp = {
      ...fakeEducation[0],
      dateFrom: { nanoseconds: null, seconds: null } as any,
    };

    const data = normalizedData([...[recordWithInvalidTimeStamp]]);
    const firstEducation = data[0];
    expect(firstEducation).toHaveProperty('date');
    expect(firstEducation).toHaveProperty('date', 'Invalid Date - June 2019');
  });

  it('does not crash if dateTo is invalid', async () => {
    const { fakeEducation } = await readFakeData();
    const recordWithInvalidTimeStamp = {
      ...fakeEducation[0],
      dateTo: { nanoseconds: null, seconds: null } as any,
    };

    const data = normalizedData([recordWithInvalidTimeStamp]);
    const firstEducation = data[0];
    expect(firstEducation).toHaveProperty('date');
    expect(firstEducation).toHaveProperty(
      'date',
      'September 2015 - Invalid Date'
    );
  });

  it('handles invalid timestamps gracefully and returns "Invalid Date - Invalid Date"', async () => {
    const { fakeEducation } = await readFakeData();
    const recordWithInvalidTimeStamp = {
      ...fakeEducation[0],
      dateFrom: { nanoseconds: null, seconds: null } as any,
      dateTo: { nanoseconds: null, seconds: null } as any,
    };

    const data = normalizedData([recordWithInvalidTimeStamp]);
    const firstEducation = data[0];

    expect(firstEducation).toHaveProperty('date');
    expect(firstEducation).toHaveProperty(
      'date',
      'Invalid Date - Invalid Date'
    );
  });
});

describe('test sortData function', () => {
  it('sortData sorts data correctly: descending order', async () => {
    const { fakeEducation } = await readFakeData();
    const originalEducation = [...fakeEducation];
    const sortedData = sortData([...fakeEducation]);
    expect(sortedData).toEqual(expect.arrayContaining(originalEducation));
    expect(sortedData[0].dateFrom.seconds).toBeGreaterThan(
      sortedData[1].dateFrom.seconds
    );
    expect(sortedData[1].dateFrom.seconds).toBeGreaterThan(
      sortedData[2].dateFrom.seconds
    );
  });
  it('sortData does not sort the data if time stamps are equal', async () => {
    const { fakeEducationSameDateFrom } = await readFakeData();
    const originalEducation = [...fakeEducationSameDateFrom];
    const sortedData = sortData([...fakeEducationSameDateFrom]);
    expect(sortedData).toEqual(originalEducation);
  });
  it('sortData does not crash if the data is invalid', () => {
    const invalidData = { dateFrom: { seconds: null, nanoseconds: null } };
    const sortedData = sortData([invalidData] as any);
    expect(sortedData).toEqual([invalidData]);
  });
  it('sortData does not crash if the data is empty array', () => {
    const sortedData = sortData([] as any);
    expect(sortedData).toEqual([]);
  });
  it('throws an error if data is not an array', () => {
    expect(() => sortData({} as any)).toThrow(
      'Input to sortData must be an array.'
    );
  });
});

describe('test fetchData function', () => {
  it('sortData sorts data correctly: descending order', async () => {
    const { fakeEducation } = await readFakeData();
    const originalEducation = [...fakeEducation];
    const sortedData = sortData([...fakeEducation]);
    expect(sortedData).toEqual(expect.arrayContaining(originalEducation));
    expect(sortedData[0].dateFrom.seconds).toBeGreaterThan(
      sortedData[1].dateFrom.seconds
    );
    expect(sortedData[1].dateFrom.seconds).toBeGreaterThan(
      sortedData[2].dateFrom.seconds
    );
  });
});

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
  connectFirestoreEmulator: jest.fn(),
  collection: jest.fn(),
  getDocs: jest.fn(),
}));

describe('fetchData', () => {
  let mockGetDocs: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockGetDocs = jest.requireMock('firebase/firestore').getDocs;
  });

  it('fetches data without errors', async () => {
    const mockData = [
      { id: '1', data: () => ({ name: 'Doc 1' }) },
      { id: '2', data: () => ({ name: 'Doc 2' }) },
    ];
    mockGetDocs.mockResolvedValueOnce({ empty: false, docs: mockData });

    const result = await fetchData('testCollection');
    expect(result).toEqual([
      { id: '1', name: 'Doc 1' },
      { id: '2', name: 'Doc 2' },
    ]);
  });

  it('returns an empty array when no documents exist', async () => {
    mockGetDocs.mockResolvedValueOnce({ empty: true, docs: [] });

    const result = await fetchData('emptyCollection');
    expect(result).toEqual([]);
  });

  it('handles Firestore errors gracefully', async () => {
    mockGetDocs.mockRejectedValueOnce(new Error('Firestore error'));

    await expect(fetchData('testCollection')).rejects.toThrow(
      'Could not fetch data from testCollection'
    );

    expect(mockGetDocs).toHaveBeenCalled();
  });

  it('handles null or undefined fields in Firestore documents', async () => {
    const mockData = [
      { id: '1', data: () => ({ name: null }) },
      { id: '2', data: () => ({ name: undefined }) },
    ];
    mockGetDocs.mockResolvedValueOnce({ empty: false, docs: mockData });

    const result = await fetchData('testCollection');
    expect(result).toEqual([
      { id: '1', name: null },
      { id: '2', name: undefined },
    ]);
  });

  it('fetches data with nested fields', async () => {
    const mockData = [
      {
        id: '1',
        data: () => ({
          name: 'Doc 1',
          details: { title: 'title1', description: 'description1' },
        }),
      },
      {
        id: '2',
        data: () => ({
          name: 'Doc 2',
          details: { title: 'title2', description: 'description2' },
        }),
      },
    ];
    mockGetDocs.mockResolvedValueOnce({ empty: false, docs: mockData });

    const result = await fetchData('testCollection');
    expect(result).toEqual([
      {
        id: '1',
        name: 'Doc 1',
        details: { title: 'title1', description: 'description1' },
      },
      {
        id: '2',
        name: 'Doc 2',
        details: { title: 'title2', description: 'description2' },
      },
    ]);
  });

  it('logs a warning when no documents exist', async () => {
    console.warn = jest.fn();
    mockGetDocs.mockResolvedValueOnce({ empty: true, docs: [] });

    const result = await fetchData('emptyCollection');
    expect(console.warn).toHaveBeenCalledWith(
      'No data found for collection: emptyCollection'
    );
    expect(result).toEqual([]);
  });
});
