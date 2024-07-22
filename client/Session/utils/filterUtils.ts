import { SessionData } from '../types/types';

export const sessionSearch = (session: SessionData, searchTerm: string) => {
  return (
    session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    session.body.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
