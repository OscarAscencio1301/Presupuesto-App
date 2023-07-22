import { fireEvent, render, screen } from "@testing-library/react";
import { SingleExpense } from "../../src/components/Expense";
import { Expense } from "../../src/interface/budget";
import { useBudget } from "../../src/hooks/useBudget";
jest.mock('../../src/hooks/useBudget');

describe('Testing Expense', () => {
    const expense: Expense = {
        id: 123,
        expense: 'Nuevo gasto Test',
        category: 'hogar',
        cost: 500
    }

    const functionactiveMock = jest.fn()
    const functiondeleteMock = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('Initial Values ', () => {

       
        (useBudget as jest.Mock).mockReturnValue({
            expenseActive: null,
            activeExpenseAct: functionactiveMock,
            deleteExpenseAct: functiondeleteMock,

        });

        render(<SingleExpense {...expense} />)
        expect(screen.getByText(expense.expense)).toBeTruthy()
        expect(screen.getByText(expense.category)).toBeTruthy()
    });

    test('Function Active', () => {

        (useBudget as jest.Mock).mockReturnValue({
            expenseActive: null,
            activeExpenseAct: functionactiveMock,
            deleteExpenseAct: functiondeleteMock,

        });
        render(<SingleExpense {...expense} />)

        const buttonUpdate = screen.getByTestId('leading-actions')
        fireEvent.touchStart(buttonUpdate)

        expect(functionactiveMock).toBeCalled()
        expect(functionactiveMock).toBeCalledWith(expense)


    });

    test('Function Delete', () => {

        
        (useBudget as jest.Mock).mockReturnValue({
            expenseActive: null,
            activeExpenseAct: functionactiveMock,
            deleteExpenseAct: functiondeleteMock,

        });
        render(<SingleExpense {...expense} />)

        const buttonDelete = screen.getByTestId('trailing-actions')

        fireEvent.touchStart(buttonDelete)

        expect(functionactiveMock).toBeCalled()
        expect(functionactiveMock).toBeCalledWith(expense.id)

        // screen.debug()
    });
})