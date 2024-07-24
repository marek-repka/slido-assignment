import { fireEvent, render, screen } from '@testing-library/react';
import { SessionData } from '../../types/types';
import SessionList from './SessionList';

describe('SessionList component', () => {
  describe('with sessions', () => {
    const sessions: SessionData[] = [
      {
        id: 3,
        title: 'Slido All-Hands',
        body: "Come to discuss next month's priorities.",
        type: 'meeting',
        startDateTime: '1720105200',
        endDateTime: '1720110600',
      },
      {
        id: 4,
        title: 'Standup',
        body: "What's your battle plan for today?",
        type: 'meeting',
        startDateTime: '1719907200',
        endDateTime: '1719909000',
      },
    ];

    const sessionSelectedFn = jest.fn();

    const setupTest = () => {
      render(<SessionList sessions={sessions} onSessionSelected={sessionSelectedFn} />);
    };

    beforeEach(() => {
      setupTest();
    });

    test('renders correctly', () => {
      const buttons = screen.getAllByRole('button');
      const headings = screen.getAllByRole('heading');

      expect(headings).toHaveLength(3);
      expect(headings[0].textContent).toBe('Sessions (2)');
      expect(headings[1].textContent).toBe(sessions[0].title);
      expect(headings[2].textContent).toBe(sessions[1].title);
      expect(buttons).toHaveLength(2);
    });

    test('calls selection handler after button click', () => {
      const buttons = screen.getAllByRole('button');
      fireEvent.click(buttons[0]);
      expect(sessionSelectedFn).toHaveBeenCalledWith(sessions[0]);
    });
  });

  describe('without sessions', () => {
    test('renders correctly', () => {
      const sessionSelectedFn = jest.fn();
      render(<SessionList sessions={[]} onSessionSelected={sessionSelectedFn} />);

      const headings = screen.getAllByRole('heading');
      const paragraphs = screen.getAllByRole('paragraph');

      expect(headings).toHaveLength(1);
      expect(headings[0].textContent).toBe('Sessions (0)');
      expect(paragraphs[0].textContent).toBe('Loading...');
    });
  });
});
