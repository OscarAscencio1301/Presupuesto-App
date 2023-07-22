import { useBudget } from '../../src/hooks/useBudget'
import { act, renderHook } from '@testing-library/react'
import { Budget, Expense } from '../../src/interface/budget';
import { configureStore } from '@reduxjs/toolkit';
import { budgetSlice } from '../../src/store/budget/budgetSlice';
import { Provider } from 'react-redux';

const getStore = (initialState: Budget) => {
    return configureStore({
        reducer: {
            budget: budgetSlice.reducer
        },
        preloadedState: {
            budget: { ...initialState }
        }
    })
}

describe('Testing useBudget', () => {
    const initialValues = {
        expenses: [],
        expensesFilter: [],
        expenseActive: null,
        search: '',
        porcent: 0,
        available: 0,
        spent: 0,
        budget: 0,
        isOpenModal: false,
        isValidBudget: false,
    }

    const newExpense: Expense = {
        id: 123,
        expense: 'Nuevo gasto Test',
        category: 'hogar',
        cost: 500
    }
    const updateExpense:Expense = {
        id: 123,
        expense: 'Update gasto Test',
        category: 'hogar',
        cost: 200
    } 

    beforeEach(() => jest.clearAllMocks())

    test('Initial Values ', () => {

        const store = getStore(initialValues)
        const { result } = renderHook(() => useBudget(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        })
        expect(result.current.expenses.length).toBe(0)
        expect(result.current.expensesFilter.length).toBe(0)
        expect(result.current.expenseActive).toBeNull()
    });
    test('Function Add', () => {

        const store = getStore(initialValues)
        const { result } = renderHook(() => useBudget(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        })

        act(() => {
            result.current.addExpenseAct(newExpense)
        })

        expect(result.current.expenses.length).toBe(1)
        expect(result.current.expenseActive).toBeNull()
    });
    test('Function Active', () => {

        const store = getStore(initialValues)
        const { result } = renderHook(() => useBudget(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        })

        act(() => {
            result.current.activeExpenseAct(newExpense)
        })

        expect(result.current.expenses.length).toBe(0)
        expect(result.current.expenseActive).toEqual(newExpense)
    });
    test('Function Update', () => {

        const store = getStore(initialValues)
        const { result } = renderHook(() => useBudget(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        })

        act(() => {
            result.current.addExpenseAct(newExpense)
            result.current.updateExpenseAct(updateExpense)
        })

        expect(result.current.expenses.length).toBe(1)
        expect(result.current.expenses).toContain(updateExpense)
        expect(result.current.expenseActive).toBeNull()
    });
    test('Function Delete', () => {

        const store = getStore(initialValues)
        const { result } = renderHook(() => useBudget(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        })

        act(() => {
            result.current.deleteExpenseAct(123)
        })

        expect(result.current.expenses.length).toBe(0)
        expect(result.current.expenseActive).toBeNull()
    });
    test('Function Clear', () => {

        const store = getStore(initialValues)
        const { result } = renderHook(() => useBudget(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        })

        act(() => {
            result.current.activeExpenseAct(newExpense)
            result.current.cleanExpenseAct()
        })

        expect(result.current.expenses.length).toBe(0)
        expect(result.current.expenseActive).toBeNull()
    });

    test('Function Calculate', () => {

        const store = getStore(initialValues)
        const { result } = renderHook(() => useBudget(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        })

        act(() => {
            result.current.addExpenseAct(newExpense)
            result.current.calculateAct()
        })

        expect(result.current.available).toBe(500)
        expect(result.current.spent).toBe(-500)
        
    });

    test('Function Filter', () => {

        const store = getStore(initialValues)
        const { result } = renderHook(() => useBudget(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        })

        act(() => {
            result.current.addExpenseAct(newExpense)
        })

        expect(result.current.filterExpensesAct.length).toBe(1)
        expect(result.current.expenseActive).toBeNull()
    });

    test('Function Reset Values', () => {

        const store = getStore(initialValues)
        const { result } = renderHook(() => useBudget(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        })

        act(() => {
            result.current.addExpenseAct(newExpense)
            result.current.activeExpenseAct(newExpense)
            result.current.resetAct()
        })

        expect(result.current.expenses.length).toBe(0)
        expect(result.current.expensesFilter.length).toBe(0)
        expect(result.current.expenseActive).toBeNull()
    });
});