const { isTime } = require('../utils/is-time');
const {isWeekDay} = require('../utils/is-weekday');
const createLessonInWeekValidtor = async ({course_id , group_id , room_id , mentor_id , lessonInputs}) => {
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
    
    mentor_id *= 1;
    if(!mentor_id || typeof(mentor_id) !== 'number') {
        errors.mentor_id = 'Выберите ментора';
    }
    course_id *= 1;
    if(!course_id || typeof(course_id) !== 'number') {
        errors.course_id = 'Выберите курс';
    }
    group_id *= 1;
    if(!group_id || typeof(group_id) !== 'number') {
        errors.group_id = 'Выберите группу';
    }
    room_id *= 1;
    if(!room_id || typeof(room_id) !== 'number') {
        errors.room_id = 'Выберите кабинет';
    }
    console.log(errors)
    return errors
}
module.exports = {
    createLessonInWeekValidtor
}