import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense', () => {
  const action = removeExpense({ id:'123abc' });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: '123abc'
  });
});

test('should setup edit expense', () => {
  const action = editExpense('123abc', { note:'New note value' });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add expense with provided values', () => {
  const expenseDate = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last month rent'
  };
  const action = addExpense(expenseDate);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseDate,
      id: expect.any(String)
    }
  });
});

test('should setup add expense wih default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      note: '',
      description: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});