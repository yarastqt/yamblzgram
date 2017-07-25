const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'майя',
    'июня',
    'июля',
    'августа',
    'cентября',
    'октября',
    'ноября',
    'декабря'
]

export function getCurrentDate() {
    const date = new Date()
    const year = date.getFullYear()
    const month = months[date.getMonth()]
    const day = date.getDate()
    const fullDate = `${day} ${month} ${year} г.`

    return fullDate
}
