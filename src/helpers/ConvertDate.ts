export const convertDate = (date: number) => {
    const dateNew = new Date(date)

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return dateNew.toLocaleString('es-ES', options)
}
