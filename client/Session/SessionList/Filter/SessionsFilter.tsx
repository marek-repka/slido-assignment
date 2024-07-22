import { SessionFilterData, SessionType } from '../../types/types';

interface Props {
  filter: SessionFilterData;
  onChange: (filter: SessionFilterData) => void;
}

const SessionsFilter = ({ filter, onChange }: Props) => {
  const onInputChange = (newVal: string, key: keyof SessionFilterData) => {
    onChange({ ...filter, [key]: newVal });
  };

  const onSessionTypeChange = (newVal: SessionType) => {
    onChange({ ...filter, type: newVal });
  };

  return (
    <article>
      <h2>Search sessions</h2>
      <div>
        <input
          type="text"
          placeholder="Search sessions..."
          value={filter.term}
          onChange={(e) => onInputChange(e.target.value, 'term')}
        />
      </div>
      <div>
        <label htmlFor="session-type-select">Filter by session type:</label>
        <select
          name="session-types"
          id="session-type-select"
          value={filter.type}
          onChange={(e) => onSessionTypeChange(e.target.value as SessionType)}
        >
          <option value="">No filter</option>
          <option value="meeting">Meeting</option>
          <option value="event">Event</option>
        </select>
      </div>
      <div>
        <label>From:</label>
        <input
          type="datetime-local"
          value={filter.dateFrom}
          onChange={(e) => onInputChange(e.target.value, 'dateFrom')}
        />
      </div>
      <div>
        <label>To:</label>
        <input type="datetime-local" value={filter.dateTo} onChange={(e) => onInputChange(e.target.value, 'dateTo')} />
      </div>
    </article>
  );
};

export default SessionsFilter;
