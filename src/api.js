const base_url = `https://api.rawg.io/api/`


const getCurrentMounth = () => {
    const mounth = new Date().getMonth() + 1
    if (mounth < 10) {
        return `0${mounth}`
    } else {
        return mounth
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate() + 1
    if (day < 10) {
        return `0${day}`
    } else {
        return day
    }
}

const currentYear = new Date().getFullYear()
const currentMounth = new Date().getMonth()
const currentDay = new Date().getDay()
const currentDate = `${currentYear} -${currentMounth} -${currentDay}`
const lastYear = `${currentYear - 1} -${currentMounth} -${currentDay}`
const nextYear = `${currentYear + 1} -${currentMounth} -${currentDay}`

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page+size=10`

export const popularGameUrl = () => `${base_url}${popular_games}`