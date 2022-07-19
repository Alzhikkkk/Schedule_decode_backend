const createGroupValidtor = ({name , start , end}) => {
    const errors = {};
    if(!name || typeof(name) !== 'string' || name.trim().length == 0) {
        errors.name = 'Название группы не может быть пустым';
    }
    if(!start || !Date.parse(start)) {
        errors.name = 'Старт группы не может быть пустым';
    }
    if(!end || !Date.parse(end)) {
        errors.name = 'Дата окончания группы не может быть пустой';
    }
    
    return errors
}

module.exports = {
    createGroupValidtor
}