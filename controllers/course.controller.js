const {Course , Sequelize} = require('../models');


const getCourses = async () => {
    return new Promise(async resolve => {
        const coueses = await Course.findAll();
        resolve(coueses)
    })
}


module.exports = {
    getCourses
}