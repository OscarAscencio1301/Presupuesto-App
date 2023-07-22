export interface Slice {
    budget: Budget
}

export interface Budget {
    budget: number,
    available: number,
    spent: number,
    porcent: number,
    isValidBudget: boolean,
    isOpenModal: boolean,
    search: string,
    expenses: Expense[],
    expensesFilter: Expense[]
    expenseActive: Expense | null
}


export interface Expense {
    id?:number,
    expense: string,
    cost: number,
    category: string
}