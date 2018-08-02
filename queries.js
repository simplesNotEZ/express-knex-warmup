const database = require("./database-connection.js");

module.exports = {
    getAll() {
        return database('student');
    },
    getStudentById(id) {
        return database('student').where('id', id);
    },
    addStudent(cohortMate) {
        return database('student').insert(cohortMate).returning('*')
            .then((returnedArray) => returnedArray[0])
    }
}
