const {Busy_in_week} = require('../models');

const createBusyInWeek = ({text , weekday , time , mentor_id}) => {
    return new Promise(async resolve => {
        const busyInWeek = await Busy_in_week.create({
            text,
            weekday,
            time,
            mentor_id
        }); 
        resolve(busyInWeek);
    })
}

const getBusyInWeek = (mentor_id) => {
    return new Promise(async resolve => {
        const busyInWeek = await Busy_in_week.findAll({
            include: ['mentor'],
            where: {mentor_id}
        });
        resolve(busyInWeek)
    })
}

const updateBusyInWeek = async ({id , weekday , time, text, mentor_id}) => {
    return new Promise(async resolve => {
        const busy_in_week = await Busy_in_week.update({time , weekday , text, mentor_id} ,{where:{id}});
        const busyInWeek = await Busy_in_week.findOne({
            include: ['mentor'],
            where: {id}
        });
        resolve(busyInWeek)
    })
}

const deleteBusyInWeek = async id => {
    return new Promise(async resolve => {
        await Busy_in_week.destroy({where : {id}});
        resolve(true)
    })
}


module.exports = {
    createBusyInWeek,
    getBusyInWeek,
    updateBusyInWeek,
    deleteBusyInWeek
}