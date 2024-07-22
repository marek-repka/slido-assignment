import { FormEvent, useState } from 'react';
import { SessionData, SessionType } from '../../types/types';
import { dateToUnix, unixToStringDate } from '../../utils/dateUtils';

interface Props {
  data: SessionData;
  onCancel: () => void;
  onSave: (data: SessionData) => void;
}

const SessionForm = ({ data, onCancel, onSave }: Props) => {
  const [title, setTitle] = useState<string>(data.title);
  const [body, setBody] = useState<string>(data.body);
  const [type, setType] = useState<SessionType>(data.type);
  const [startDateTime, setStartDateTime] = useState<string>(data.startDateTime);
  const [endDateTime, setEndDateTime] = useState<string>(data.endDateTime);

  const validateSessionDuration = (): void => {
    // Meeting can last up to 1 day
    // Event can be set up for more days
    const endDateInput = document.getElementById('end-date') as HTMLObjectElement;
    const startTime = Number(startDateTime);
    const endTime = Number(endDateTime);
    const duration = endTime - startTime;
    const oneDayInSec = 24 * 60 * 60;

    if (type === 'meeting' && duration > oneDayInSec) {
      endDateInput.setCustomValidity('Meeting cannot be longer than 24 hours.');
    } else {
      endDateInput.setCustomValidity('');
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave({
      id: data.id,
      title,
      body,
      type,
      startDateTime,
      endDateTime,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <dl>
        <dt>
          <label htmlFor="title">Title:</label>
        </dt>
        <dd>
          <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </dd>

        <div>
          <fieldset>
            <legend>Session type</legend>
            <div>
              <input
                type="radio"
                name="meeting"
                id="meeting"
                value="meeting"
                checked={type === 'meeting'}
                onChange={() => setType('meeting')}
              />
              <label htmlFor="meeting">Meeting</label>
            </div>
            <div>
              <input type="radio" value="event" checked={type === 'event'} onChange={() => setType('event')} />
              <label htmlFor="event">Event</label>
            </div>
          </fieldset>
        </div>

        <dt>
          <label htmlFor="body">Body:</label>
        </dt>
        <dd>
          <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} required />
        </dd>

        <dt>
          <label htmlFor="start-date">Start Date:</label>
        </dt>
        <dd>
          <input
            id="start-date"
            type="datetime-local"
            required
            value={data.id > 0 ? unixToStringDate(startDateTime) : undefined}
            onChange={(e) => setStartDateTime(dateToUnix(e.target.value))}
          />
        </dd>

        <dt>
          <label htmlFor="end-date">End Date:</label>
        </dt>
        <dd>
          <input
            id="end-date"
            type="datetime-local"
            required
            value={data.id > 0 ? unixToStringDate(endDateTime) : undefined}
            onChange={(e) => setEndDateTime(dateToUnix(e.target.value))}
          />
        </dd>
      </dl>

      <button type="submit" onClick={() => validateSessionDuration()}>
        {data.id > 0 ? 'Save changes' : 'Create Session'}
      </button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default SessionForm;
