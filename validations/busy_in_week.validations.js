const { isTime } = require('../utils/is-time');
const {isWeekDay} = require('../utils/is-weekday');
const createBusyInWeekValidtor = async ({text ,mentor_id, lessonInputs}) => {
    const errors = {};
    errors.lessonInputs = [];
    await lessonInputs.map((item, index) => {
        if(!item.weekday || !isWeekDay(item.weekday)) {
            errors.lessonInputs[index] = {}
            errors.lessonInputs[index].weekday = 'Некорректный день недели';
        }
        if(!item.time || !isTime(item.time)) {
            console.log("tut")
            !errors.lessonInputs[index] ? errors.lessonInputs[index] = {} : '';
            errors.lessonInputs[index].time = 'Некорретное время';
            console.log(errors)
        }
    })

    console.log(errors)

    if(errors.lessonInputs.length === 0) {
        delete errors.lessonInputs
    }


    if(!text || typeof(text) !== 'string' || text.trim().length == 0) {
        errors.text = 'Причина не может быть пустой';
    }
    mentor_id *= 1;
    if(!mentor_id || typeof(mentor_id) !== 'number') {
        errors.mentor_id = 'Выберите ментора';
    }
    return errors
}
module.exports = {
    createBusyInWeekValidtor
}