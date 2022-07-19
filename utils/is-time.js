const time_regex = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/;
const isTime = (time) => time_regex.test(time)
module.exports = {
    isTime
}
