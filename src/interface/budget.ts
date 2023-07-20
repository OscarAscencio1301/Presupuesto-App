export interface Slice {
    budget: Budget
}

export interface Budget {
    budget: number,
    isValidBudget: boolean,
    isOpenModal: boolean
}