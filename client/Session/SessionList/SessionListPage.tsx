import { useMemo } from 'react';
import PageContainer from '../../common/PageContainer/PageContainer';
import { SessionData, SessionFilterData } from '../types/types';
import SessionsFilter from './Filter/SessionsFilter';
import SessionList from './List/SessionList';
import { sessionSearch } from '../utils/filterUtils';

interface Props {
  sessions: SessionData[];
  filter: SessionFilterData;
  setFilter: (filter: SessionFilterData) => void;
  onCreateClick: () => void;
  onSessionSelected: (session: SessionData) => void;
}

const SessionListPage = ({ sessions, filter, setFilter, onCreateClick, onSessionSelected }: Props) => {
  const filteredSessions = useMemo(
    () =>
      sessions.filter((session) => {
        if (filter.type === '' && !filter.dateFrom && !filter.dateTo) {
          return sessionSearch(session, filter.term);
        }

        const sessionStart = Number(session.startDateTime);
        const sessionEnd = Number(session.endDateTime);
        const fromTime = filter.dateFrom ? new Date(filter.dateFrom).getTime() / 1000 : null;
        const toTime = filter.dateTo ? new Date(filter.dateTo).getTime() / 1000 : null;

        return (
          (filter.type !== '' ? session.type === filter.type : true) &&
          (fromTime ? sessionStart >= fromTime : true) &&
          (toTime ? sessionEnd <= toTime : true) &&
          sessionSearch(session, filter.term)
        );
      }),
    [sessions, filter.term, filter.type, filter.dateFrom, filter.dateTo]
  );

  return (
    <PageContainer>
      <button onClick={onCreateClick}>Create New Session</button>
      <SessionsFilter filter={filter} onChange={setFilter} />
      <SessionList sessions={filteredSessions} onSessionSelected={onSessionSelected} />
    </PageContainer>
  );
};

export default SessionListPage;
