import { fireEvent, render, screen } from '@testing-library/react';
import SessionDetailPage from './SessionDetailPage';
import { SessionData } from '../types/types';
import { unixToDateHuman } from '../utils/dateUtils';

describe('SessionDetailPage', () => {
  const session: SessionData = {
    id: 2,
    title: 'Company offsite',
    body: "Please don't forget to take umbrellas.",
    type: 'event',
    startDateTime: '1720425600',
    endDateTime: '1720800000',
  };

  const backFn = jest.fn();
  const editFn = jest.fn();
  const deleteFn = jest.fn();

  const setupTest = () => {
    render(<SessionDetailPage session={session} onBackClick={backFn} onEditClick={editFn} onDeleteClick={deleteFn} />);
  };

  beforeEach(() => {
    setupTest();
  });

  test('renders correctly', () => {
    const buttons = screen.getAllByRole('button');
    const paragraphs = screen.getAllByRole('paragraph');

    expect(screen.getByRole('heading', { name: session.title })).toBeDefined();
    expect(buttons).toHaveLength(3);
    expect(paragraphs).toHaveLength(3);
    expect(paragraphs[0].textContent).toBe(session.body);
    expect(paragraphs[1].textContent).toBe(session.type);
    expect(paragraphs[2].textContent).toBe(
      `${unixToDateHuman(session.startDateTime)} - ${unixToDateHuman(session.endDateTime)}`
    );
  });

  test('calls BACK handler after button click', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Back to List' }));
    expect(backFn).toHaveBeenCalled();
  });

  test('calls EDIT handler after button click', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Edit' }));
    expect(editFn).toHaveBeenCalled();
  });

  test('calls DELETE handler after button click', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Delete' }));
    expect(deleteFn).toHaveBeenCalledWith(2);
  });
});
