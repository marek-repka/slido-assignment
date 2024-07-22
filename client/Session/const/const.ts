import { SessionData, SessionFilterData } from '../types/types';

export const DEFAULT_FILTER: SessionFilterData = { term: '', type: '', dateFrom: '', dateTo: '' };
export const DEFAULT_SESSION: SessionData = {
  id: 0,
  title: '',
  body: '',
  type: 'meeting',
  startDateTime: '',
  endDateTime: '',
};
