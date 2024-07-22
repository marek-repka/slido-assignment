import { SessionData } from '../types/types';

export const fetchSessions = async () => {
  const response = await fetch('http://localhost:3000/sessions');
  const sessionData = await response.json();
  return sessionData;
};

export const deleteSession = async (id: number) => {
  await fetch(`http://localhost:3000/sessions/${id}`, {
    method: 'DELETE',
  });
};

export const createSession = async (data: SessionData) => {
  const { id, ...rest } = data;
  const response = await fetch('http://localhost:3000/sessions', {
    method: 'POST',
    body: JSON.stringify(rest),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const newSession = await response.json();
  return newSession;
};

export const editSession = async (data: SessionData) => {
  const { id, ...rest } = data;
  const response = await fetch(`http://localhost:3000/sessions/${id}`, {
    method: 'PUT',
    body: JSON.stringify(rest),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const editedSession = await response.json();
  return editedSession;
};
