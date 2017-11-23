import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should calculate with no elements', () => {
  const total = selectExpensesTotal([]);
  expect(total).toBe(0);
});

test('should calculate with one elements', () => {
  const total = selectExpensesTotal([expenses[0]]);
  expect(total).toBe(expenses[0].amount);
});

test('should calculate with multiple elements', () => {
  const total = selectExpensesTotal(expenses);
  expect(total).toBe(114195);
});
