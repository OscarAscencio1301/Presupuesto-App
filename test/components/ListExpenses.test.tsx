import { render, screen } from "@testing-library/react";
import { ListExpenses } from "../../src/components/ListExpenses";
import { useBudget } from "../../src/hooks/useBudget";
jest.mock('../../src/hooks/useBudget');


describe('Testing List Expense', () => {
    test('Initial Values ', () => {

        (useBudget as jest.Mock).mockReturnValue({
            isOpenModal: true,
            changeModalAct: jest.fn(),
            addExpenseAct: jest.fn(),
            expenseActive: null,
            updateExpenseAct: jest.fn(),
            cleanExpenseAct: jest.fn(),
            expenses: []
        });

        render(<ListExpenses />)
        expect(screen.getByText('No hay Gastos')).toBeTruthy()
    });

    test('Initial Values Expenses', () => {

        (useBudget as jest.Mock).mockReturnValue({
            isOpenModal: true,
            changeModalAct: jest.fn(),
            addExpenseAct: jest.fn(),
            expenseActive: null,
            updateExpenseAct: jest.fn(),
            cleanExpenseAct: jest.fn(),
            expenses: [
                {
                    id: 12,
                    expense: 'Gasto Test',
                    category: 'hogar',
                    cost: 500
                },
                {
                    id: 34,
                    expense: 'Gasto Test 2',
                    category: 'ocio',
                    cost: 200
                }
            ]
        });

        render(<ListExpenses />)
        expect(screen.getByText('Gastos')).toBeTruthy()
    });
});