import '@testing-library/jest-dom';

// Mock `window.matchMedia`
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated method
    removeListener: jest.fn(), // Deprecated method
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.mock('next/font/google', () => ({
  __esModule: true,
  MuseoModerno: jest.fn().mockReturnValue({
    style: { fontFamily: 'Mocked MuseoModerno Font' },
  }),
  Poppins: jest.fn().mockReturnValue({
    style: { fontFamily: 'Mocked Poppins Font' },
  }),
  Khula: jest.fn().mockReturnValue({
    style: { fontFamily: 'Mocked Khula Font' },
  }),
}));
