const {Room , Sequelize} = require('../models');
const Op = Sequelize.Op
const getRoomsByName = async (query) => {
    return new Promise(async resolve => {
        const rooms = await Room.findAll({
            where: {
                number: {
                    [Op.like] : `%${query}%`
                }
            }
        });
        resolve(rooms)
    })
}

const getRooms = async () => {
    return new Promise(async resolve => {
        const rooms = await Room.findAll();
        resolve(rooms)
    })
}


module.exports = {
    getRoomsByName,
    getRooms
}