import PageContainer from '../../common/PageContainer/PageContainer';
import { SessionData } from '../types/types';
import SessionForm from './Form/SessionForm';

interface Props {
  data: SessionData;
  onCancel: () => void;
  onSave: (data: SessionData) => void;
}

const SessionFormPage = ({ data, onCancel, onSave }: Props) => {
  return (
    <PageContainer>
      <SessionForm data={data} onCancel={onCancel} onSave={onSave} />
    </PageContainer>
  );
};

export default SessionFormPage;
