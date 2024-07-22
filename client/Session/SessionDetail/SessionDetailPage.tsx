import PageContainer from '../../common/PageContainer/PageContainer';
import { unixToDateHuman } from '../utils/dateUtils';
import { SessionData } from '../types/types';

interface Props {
  session: SessionData;
  onBackClick: () => void;
  onEditClick: () => void;
  onDeleteClick: (id: number) => void;
}

const SessionDetailPage = ({ session, onBackClick, onEditClick, onDeleteClick }: Props) => {
  return (
    <PageContainer>
      <article>
        <h2>{session.title}</h2>
        <p>{session.body}</p>
        <p>{session.type}</p>
        <p>
          {unixToDateHuman(session.startDateTime)} - {unixToDateHuman(session.endDateTime)}
        </p>
        <button onClick={() => onDeleteClick(session.id)}>Delete</button>
        <button onClick={onEditClick}>Edit</button>
        <button onClick={onBackClick}>Back to List</button>
      </article>
    </PageContainer>
  );
};

export default SessionDetailPage;
