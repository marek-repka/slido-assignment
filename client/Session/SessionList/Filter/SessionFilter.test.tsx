import { fireEvent, render, screen } from '@testing-library/react';
import { DEFAULT_FILTER } from '../../const/const';
import { SessionType } from '../../types/types';
import SessionsFilter from './SessionsFilter';

describe('SessionFilter component', () => {
  let changeFn: any;

  const setupTest = () => {
    changeFn = jest.fn();
    render(<SessionsFilter filter={DEFAULT_FILTER} onChange={changeFn} />);
  };

  beforeEach(() => {
    setupTest();
  });

  test('renders correctly', () => {
    const inputs = screen.getAllByRole('input');
    expect(inputs).toHaveLength(4);
  });

  test('calls CHANGE handler on SEARCH input change', () => {
    const inputs = screen.getAllByRole('input');
    fireEvent.change(inputs[0], { target: { value: 'search string' } });
    expect(changeFn).toHaveBeenLastCalledWith({ ...DEFAULT_FILTER, term: 'search string' });
  });

  test('calls CHANGE handler on TYPE select change', () => {
    const inputs = screen.getAllByRole('input');
    fireEvent.change(inputs[1], { target: { value: 'event' } });
    expect(changeFn).toHaveBeenLastCalledWith({ ...DEFAULT_FILTER, type: 'event' as SessionType });
  });

  test('calls CHANGE handler on DATE FROM input change', () => {
    const inputs = screen.getAllByRole('input');
    fireEvent.change(inputs[2], { target: { value: '2024-07-07T10:15' } });
    expect(changeFn).toHaveBeenLastCalledWith({ ...DEFAULT_FILTER, dateFrom: '2024-07-07T10:15' as SessionType });
  });

  test('calls CHANGE handler on DATE TO input change', () => {
    const inputs = screen.getAllByRole('input');
    fireEvent.change(inputs[3], { target: { value: '2024-07-07T10:15' } });
    expect(changeFn).toHaveBeenLastCalledWith({ ...DEFAULT_FILTER, dateTo: '2024-07-07T10:15' as SessionType });
  });
});
