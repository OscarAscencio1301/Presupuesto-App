export interface Slice {
    budget: Budget
}

export interface Budget {
    budget: number,
    available: number,
    spent: number,
    isValidBudget: boolean,
    isOpenModal: boolean,
    expenses: Expense[],
    expenseActive: Expense | null
}


export interface Expense {
    id?:number,
    expense: string,
    cost: number,
    category: string
}