import 'core-js/stable/structured-clone';

import { formatDate, normalizedData } from '@/utils/helpers';
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

 // TODO: Tests for sortData
 // TODO: Tests for fetchData
