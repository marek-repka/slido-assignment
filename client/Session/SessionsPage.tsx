import { useEffect, useState } from 'react';
import { SessionData, SessionFilterData } from './types/types';
import { createSession, deleteSession, editSession, fetchSessions } from './api/api';
import SessionListPage from './SessionList/SessionListPage';
import SessionDetailPage from './SessionDetail/SessionDetailPage';
import { DEFAULT_FILTER, DEFAULT_SESSION } from './const/const';
import SessionFormPage from './SessionForm/SessionFormPage';

const SessionsPage = () => {
  const [sessions, setSessions] = useState<SessionData[]>([]);
  const [selectedSession, setSelectedSession] = useState<SessionData | undefined>(undefined);
  const [filter, setFilter] = useState<SessionFilterData>(DEFAULT_FILTER);
  const [sessionForm, setSessionForm] = useState<SessionData | undefined>();

  const getSessions = async () => {
    const data = await fetchSessions();
    setSessions(data);
  };

  const removeSession = async (id: number) => {
    await deleteSession(id);
    setSessions(sessions.filter((session) => session.id !== id));
    setSelectedSession(undefined);
  };

  const createEditSession = async (data: SessionData) => {
    if (data.id > 0) {
      const editedSession = await editSession(data);
      setSessions(sessions.map((s) => (s.id === editedSession.id ? editedSession : s)));
      setSelectedSession(data);
    } else {
      const newSession = await createSession(data);
      setSessions([newSession, ...sessions]);
    }
    setSessionForm(undefined);
  };

  useEffect(() => {
    getSessions();
  }, []);

  if (sessionForm) {
    return <SessionFormPage data={sessionForm} onCancel={() => setSessionForm(undefined)} onSave={createEditSession} />;
  }
  if (selectedSession)
    return (
      <SessionDetailPage
        session={selectedSession}
        onBackClick={() => setSelectedSession(undefined)}
        onEditClick={() => setSessionForm(selectedSession)}
        onDeleteClick={removeSession}
      />
    );
  return (
    <SessionListPage
      sessions={sessions}
      filter={filter}
      setFilter={setFilter}
      onCreateClick={() => setSessionForm(DEFAULT_SESSION)}
      onSessionSelected={setSelectedSession}
    />
  );
};

export default SessionsPage;
