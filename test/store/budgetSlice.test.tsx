import { Budget, Expense } from "../../src/interface/budget";
import { active, add, budgetSlice, calculate, changeModal, clean, defineBudget, deleteB, filterExpense, resetValues, update } from "../../src/store/budget/budgetSlice";

describe('Testing budgetSlice', () => {
    const initialValues: Budget = {
        budget: 0,
        available: 0,
        spent: 0,
        porcent: 0,
        isValidBudget: false,
        isOpenModal: false,
        expenses: [
            {
                id: 1234,
                expense: 'Gasto Test',
                category: 'hogar',
                cost: 500
            } 
        ],
        expensesFilter: [],
        search: '',
        expenseActive: null
    }

    const newExpense:Expense = {
        id: 123,
        expense: 'Nuevo gasto Test',
        category: 'hogar',
        cost: 500
    } 
    const updateExpense:Expense = {
        id: 1234,
        expense: 'Update gasto Test',
        category: 'hogar',
        cost: 200
    } 

    test('Initial Values', () => {
        const state = budgetSlice.getInitialState()
        expect(state).toEqual({...initialValues, expenses: []})
    });

    test('Action Define Budget', () => {
        const state = budgetSlice.reducer(initialValues, defineBudget(500))
        expect(state.budget).toEqual(500)
    });
    test('Action Change Modal', () => {
        const state = budgetSlice.reducer(initialValues, changeModal())
        expect(state.isOpenModal).toEqual(true)
    });
    test('Action Add', () => {
        const state = budgetSlice.reducer(initialValues, add(newExpense))
        expect(state.expenses).toContain(newExpense)
    });
    test('Action Active', () => {
        const state = budgetSlice.reducer(initialValues, active(newExpense))
        expect(state.expenseActive).toEqual(newExpense)
    });
    test('Action Update', () => {
        const state = budgetSlice.reducer(initialValues, update(updateExpense))
        expect(state.expenses).toContain(updateExpense)
    });
    test('Action Delete', () => {
        const state = budgetSlice.reducer(initialValues, deleteB(1234))
        expect(state.expenses.length).toBe(0)
    });
    test('Action Clean', () => {
        const state = budgetSlice.reducer(initialValues, clean())
        expect(state.expenseActive).toBeNull()
    });
    test('Action Calculate', () => {
        const state = budgetSlice.reducer(initialValues, calculate())
        expect(state.available).toEqual(initialValues.expenses[0].cost)

    });
    test('Action Filter Expense', () => {
        const state = budgetSlice.reducer(initialValues, filterExpense('hogar'))
        expect(state.expensesFilter.length).toBe(1)

    });
    test('Action Reset Values', () => {
        const state = budgetSlice.reducer(initialValues, resetValues())
        expect(state).toEqual({...initialValues, expenses: []})
    });
});