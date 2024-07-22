import { SessionData } from '../../types/types';
import SessionListItem from './ListItem/SessionListItem';

interface Props {
  sessions: SessionData[];
  onSessionSelected: (session: SessionData) => void;
}

const SessionList = ({ sessions, onSessionSelected }: Props) => {
  return (
    <section>
      <h1>Sessions ({sessions.length})</h1>
      {sessions.length > 0 ? (
        sessions.map((s) => <SessionListItem session={s} key={s.id} onClick={onSessionSelected} />)
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default SessionList;
