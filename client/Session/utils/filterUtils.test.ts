import { SessionData } from '../types/types';
import { sessionSearch } from './filterUtils';

describe('Filter utils - sessionSearch fn', () => {
  const session: SessionData = {
    id: 2,
    title: 'Company offsite',
    body: "Please don't forget to take umbrellas.",
    type: 'event',
    startDateTime: '1720425600',
    endDateTime: '1720800000',
  };

  test('searching in the title', () => {
    expect(sessionSearch(session, 'oFfsi')).toBe(true);
  });

  test('searching in the body', () => {
    expect(sessionSearch(session, 'Forget')).toBe(true);
  });

  test('searching with no result', () => {
    expect(sessionSearch(session, 'other')).toBe(false);
  });
});
