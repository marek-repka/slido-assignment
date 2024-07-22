import { SessionData } from '../../../types/types';

interface Props {
  session: SessionData;
  onClick: (session: SessionData) => void;
}

const SessionListItem = ({ session, onClick }: Props) => {
  return (
    <article key={session.id}>
      <h2>{session.title}</h2>
      <button onClick={() => onClick(session)}>View Details</button>
    </article>
  );
};

export default SessionListItem;
