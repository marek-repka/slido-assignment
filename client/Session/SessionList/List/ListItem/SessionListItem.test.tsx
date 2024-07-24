import { fireEvent, render, screen } from '@testing-library/react';
import SessionListItem from './SessionListItem';
import { SessionData } from '../../../types/types';

describe('SessionListItem component', () => {
  const session: SessionData = {
    id: 3,
    title: 'Slido All-Hands',
    body: "Come to discuss next month's priorities.",
    type: 'meeting',
    startDateTime: '1720105200',
    endDateTime: '1720110600',
  };

  const clickFn = jest.fn();

  const setupTest = () => {
    render(<SessionListItem session={session} onClick={clickFn} />);
  };

  beforeEach(() => {
    setupTest();
  });

  test('renders correctly', () => {
    expect(screen.getByRole('heading', { name: session.title })).toBeDefined();
    expect(screen.getByRole('button', { name: 'View Details' })).toBeDefined();
  });

  test('calls onClick handler after button click', () => {
    const button = screen.getByRole('button', { name: 'View Details' });
    fireEvent.click(button);
    expect(clickFn).toHaveBeenCalled();
  });
});
