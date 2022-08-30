const {Lesson_in_week, Group, Sequelize} = require('../models');
const Op = Sequelize.Op

console.log(Lesson_in_week)
const createLessonInWeek = ({course_id , group_id , room_id , mentor_id , weekday , time}) => {
    return new Promise(async resolve => {
        const lessonInWeek = await Lesson_in_week.create({
            course_id,
            group_id,
            room_id,
            weekday,
            time,
            mentor_id
        }); 
        resolve(lessonInWeek);
    })
}
const getLessons = (key , value, start, end) => {
    return new Promise(async resolve => {
        if(!start) {
            const lessonsInWeek = await Lesson_in_week.findAll({
                include: ['mentor' , 'course' , 'room' , 'group'],
                where: {[key] : value}
            });
            // print(lesson_in_week+"YES")
            resolve(lessonsInWeek)
        } else {
            const lessonsInWeek = await Lesson_in_week.findAll({
                include: ['mentor' , 'course' , 'room' , 'group'],
                where: {
                    [Op.and]: [
                        {[key] : value},
                        {
                            '$group.start$': {
                                [Op.lte]: new Date(end)
                            }
                        },
                        {
                            '$group.end$': {
                                [Op.gte]: new Date(start)
                            }
                        }
                    ]
                    
                }
            });
            resolve(lessonsInWeek)
        } 
    })
}

const updateLessonInWeek = async ({id , weekday , time , course_id, group_id, room_id , mentor_id}) => {
    return new Promise(async resolve => {
        let lesson_in_week = await Lesson_in_week.update({time , weekday , course_id, group_id, room_id , mentor_id} ,{where:{id}});
        const lessons = await Lesson_in_week.findOne({
            include: ['mentor' , 'course' , 'room' , 'group'],
            where: {id}
        });
        resolve(lessons)
    })
}

const deleteLessonInWeek = async id => {
    return new Promise(async resolve => {
        await Lesson_in_week.destroy({where : {id}});
        resolve(true)
    })
}


module.exports = {
    createLessonInWeek,
    getLessons,
    deleteLessonInWeek,
    updateLessonInWeek
}