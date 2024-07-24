import { SessionData } from '../types/types';

export const sessionSearch = (session: SessionData, searchTerm: string): boolean => {
  return (
    session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    session.body.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
