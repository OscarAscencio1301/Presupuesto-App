import { ChangeEvent, useState } from "react"


export const useForm = <T>(initialState: T) => {

    const [form, setform] = useState(initialState)

    const changeEvent = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setform({
            ...form,
            [name]: value
        })
    }

    const reset = (newValues = initialState) => {
        setform(newValues)
    }

    return {
        ...form,
        form,
        setform,
        changeEvent,
        reset
    }
}
