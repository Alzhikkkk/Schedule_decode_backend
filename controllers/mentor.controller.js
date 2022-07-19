const { Mentor, Sequelize, Lesson_in_week, Busy_in_week } = require('../models');
const Op = Sequelize.Op

const getMentors = async (req, res) => {
    const mentors = await Mentor.findAll();
    return res.status(200).send(mentors)
}

const getMentorsByName = async (query) => {
    return new Promise(async resolve => {
        const mentors = await Mentor.findAll({
            where: {
                full_name: {
                    [Op.like]: `%${query}%`
                }
            }
        });
        resolve(mentors)
    })
}

const createMentor = async ({ full_name }) => {
    return new Promise(async resolve => {
        const mentor = await Mentor.create({
            full_name
        });
        resolve(mentor)
    })
}
const updateMentor = async ({ id, full_name }) => {
    return new Promise(async resolve => {
        const mentor = await Mentor.update({ full_name }, { where: { id } });
        resolve(mentor)
    })
}

const deleteMentor = async id => {
    return new Promise(async resolve => {
        await Lesson_in_week.destroy({ where: { mentor_id: id } });
        await Busy_in_week.destroy({ where: { mentor_id: id } });
        await Mentor.destroy({ where: { id } });
        resolve(true)
    })
}


module.exports = {
    getMentors,
    getMentorsByName,
    createMentor,
    updateMentor,
    deleteMentor
}