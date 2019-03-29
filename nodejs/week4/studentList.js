
const jsonfile = require('jsonfile')
const file = 'studentList.json';
let studentJson = jsonfile.readFileSync(file);



class studentList {


constructor (students){
    this.students = studentJson;
}

  getList(){
    let studentList = this.students.map(student => {
      const newObject = {
        name:student.name,
        email: student.email
      };
      return newObject;
    });
    return studentList;
  }


  getListByClass(classNumber){
    return this.students.filter(student => student['class Id'].toString() === classNumber.toString());
  }

  getStudentDetailByName(name){
    return this.students.filter(student => student.name.toLowerCase() === name.toLowerCase());
  }

  addNewStudent(newStudent){
    this.students.push(newStudent);
    this.writeToStudentJson();
  }
  isAlreadyInClass(studentEmail) {
    let isEmailMatch =false;
    this.students.forEach(student => {
      if(student.email === studentEmail) {
        isEmailMatch = true;
      }
    });
    return isEmailMatch;
  }

  deleteStudentByEmail(email){
    let nameIndex = this.students.findIndex(student => student.email.toLowerCase === email.toLowerCase);
    this.students.splice(nameIndex, 1);
    this.writeToStudentJson();
  }

  editStudentInfo(studentEmail, keyToEdit, newInfo){
    let nameIndex = this.students.findIndex(student => student.email === studentEmail);
    this.students[nameIndex][keyToEdit] = newInfo;
    this.writeToStudentJson();
  }
  writeToStudentJson() {
        jsonfile.writeFile(file, this.students, function (err) {
            if (err) console.error(err)
        })
    }
}
module.exports = studentList;
