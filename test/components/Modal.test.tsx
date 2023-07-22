import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "../../src/components/Modal";
import { useBudget } from "../../src/hooks/useBudget";
import { useForm } from "../../src/hooks/useForm";
jest.mock('../../src/hooks/useBudget');
jest.mock('../../src/hooks/useForm');

describe('Testing Component Modal', () => {

    const addElementMock = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('Snapshot ', () => {

        (useBudget as jest.Mock).mockReturnValue({
            isOpenModal: true,
            changeModalAct: jest.fn(),
            addExpenseAct: jest.fn(),
            expenseActive: jest.fn(),
            updateExpenseAct: jest.fn(),
            cleanExpenseAct: jest.fn(),
        });

        (useForm as jest.Mock).mockReturnValue({
            setform: jest.fn(),
        });

        const { container } = render(<Modal />)

        expect(container).toMatchSnapshot()
    });

    test('Initial Values', () => {

        (useBudget as jest.Mock).mockReturnValue({
            isOpenModal: true,
            changeModalAct: jest.fn(),
            addExpenseAct: jest.fn(),
            expenseActive: jest.fn(),
            updateExpenseAct: jest.fn(),
            cleanExpenseAct: jest.fn(),
        });

        (useForm as jest.Mock).mockReturnValue({
            setform: jest.fn(),
        });

        render(<Modal />)
        expect(screen.getByText('Nuevo Gasto')).toBeTruthy()


    });

    test('Change Values Form', () => {

        (useBudget as jest.Mock).mockReturnValue({
            isOpenModal: true,
            changeModalAct: jest.fn(),
            addExpenseAct: addElementMock,
            expenseActive: null,
            updateExpenseAct: jest.fn(),
            cleanExpenseAct: jest.fn(),
        });

        (useForm as jest.Mock).mockReturnValue({
            setform: jest.fn(),
        });

        render(<Modal />)
        const nameExpense = screen.getByLabelText<HTMLInputElement>('expense');
        const cost = screen.getByLabelText<HTMLInputElement>('cost');
        const category = screen.getByLabelText<HTMLSelectElement>('category')

        fireEvent.input(nameExpense, { target: { value: 'Nuevo Gasto' } })
        fireEvent.input(cost, { target: { value: '2000' } })
        fireEvent.select(category, { target: { value: 'salud' } });

        expect(nameExpense.value).toBe('Nuevo Gasto')
        expect(cost.value).toBe('2000')
        expect(category.value).toEqual('salud')


    });

    test('Submit Form', () => {

        (useBudget as jest.Mock).mockReturnValue({
            isOpenModal: true,
            changeModalAct: jest.fn(),
            addExpenseAct: addElementMock,
            expenseActive: null,
            updateExpenseAct: jest.fn(),
            cleanExpenseAct: jest.fn(),
        });

        (useForm as jest.Mock).mockReturnValue({
            setform: jest.fn(),
            reset: jest.fn()
        });

        render(<Modal />)
        const nameExpense = screen.getByLabelText<HTMLInputElement>('expense');
        const cost = screen.getByLabelText<HTMLInputElement>('cost');
        const category = screen.getByLabelText<HTMLSelectElement>('category')
        const form = screen.getByLabelText('form')

        fireEvent.input(nameExpense, { target: { value: 'Nuevo Gasto' } })
        fireEvent.input(cost, { target: { value: '2000' } })
        fireEvent.select(category, { target: { value: 'salud' } });
        fireEvent.submit(form);

        expect(addElementMock).toBeCalled()



    });
})