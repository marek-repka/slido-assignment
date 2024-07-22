export type SessionType = 'meeting' | 'event';

type SessionRemoteData = {
  id: number;
  body: string;
  title: string;
};

export type SessionData = SessionRemoteData & {
  type: SessionType;
  startDateTime: string;
  endDateTime: string;
};

export type SessionFilterData = {
  term: string;
  type: SessionType | '';
  dateFrom: string;
  dateTo: string;
};
