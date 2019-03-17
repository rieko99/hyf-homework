



class studentBook {


constructor (students){
    this.students = students
}

  getList(){
    let studentList = this.students.map(student => {
      const newObject = {
        name:student.name,
        email: student.email
      }
      return newObject
    });
    return studentList;
  }


  getListByClass(classNumber){
    return this.students.filter(student => student['class Id'] === classNumber)
  }

  getStudentDetailByName(name){
    return this.students.filter(student => student.name === name)[0]
  }

  addNewStudent(newStudent){
      this.students.push(newStudent)
  }
  isAlreadyInClass(studentEmail) {
    let sudentInList;
    this.students.forEach(student => {
      (student.email === studentEmail) ?
      sudentInList = true :
      sudentInList = false;
    })
    return sudentInList;
  }

  deleteStudentByEmail(email){
    let nameIndex = this.students.findIndex(student => student.email === email);
    this.students.splice(nameIndex, 1)
  }

  editStudentInfo(studentEmail, keyToEdit, newInfo){
    let nameIndex = this.students.findIndex(student => student.email === studentEmail);
    this.students[nameIndex][keyToEdit] = newInfo;
  }
}
module.exports = studentBook;
