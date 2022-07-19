const weekDays = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
] 
const isWeekDay = (str) => weekDays.includes(str)
module.exports = {
    isWeekDay
}
