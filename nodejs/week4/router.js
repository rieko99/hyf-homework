const studentList = require('./studentList');
const express = require('express');

const router = express.Router();

const hyf_students = new studentList();

router.route('/students/:uniqueId')
  .get((req, res) => {
      const studentName = hyf_students.getStudentDetailByName(req.params.uniqueId);
      if (studentName.length > 0) {
        res.status(201);
        res.send(studentName);
      } else {
        res.status(404);
        res.send('Student does not exist');
      }
    })
  .post((req, res) => {
      const valdeater = hyf_students.isAlreadyInClass(req.params.uniqueId);
      if (valdeater) {
        res.status(404);
        res.send('Student already exist');
      } else {
        res.status(201);
        res.send(hyf_students.addNewStudent(req.params.uniqueId));
        res.send('Student added successfully');
      }
  })


    router.route('/students')
      .get((req, res) => {
        if(req.query.name) {
          const studentName = hyf_students.getStudentDetailByName(req.query.name);
          if (studentName.length > 0) {
            res.status(201);
            res.send(studentName);
          } else {
            res.status(404);
            res.send('Student does not exist');
          }
        }
    else if (req.query.classid) {
      let classList = hyf_students.getListByClass(req.query.classid);
      if (classList.length > 0) {
        res.status(201);
        res.send(classList);
      } else {
        res.status(404);
        res.send('Invaled class ID');
      }
    }
    else {
      res.send(hyf_students.getList())
    }
  })
  .post((req, res) => {
    if (req.query.newStudent) {
      const valdeater = hyf_students.isAlreadyInClass(req.query.newStudent.email);
      if (valdeater) {
        res.status(404);
        res.send('Student already exist');
      } else {
        res.status(201);
        res.send(hyf_students.addNewStudent(req.query.newStudent));
        res.send('Student added successfully');
      }
    }
    else {
      res.send('the new student email is required!!')
    }
  })
  .put((req, res) => {
    let studentEmail = req.query.studentEmail;
    let keyToEdit = req.query.keyToEdit;
    let newInfo = req.query.newInfo;
    if (studentEmail && keyToEdit && newInfo) {
      const valdeater = hyf_students.isAlreadyInClass(req.query.studentEmail);
      if (valdeater) {
        res.status(201);
        hyf_students.editStudentInfo(studentEmail, keyToEdit, newInfo);
        res.send('Student edited successfully')
      }
    } else {
      res.status(404);
      res.send('Student email, what exactly to change and the new information REQUIRED')
    }
    })
  .delete((req, res) => {
    if (req.query.email) {
      const valdeater = hyf_students.isAlreadyInClass(req.query.email);
      if (valdeater) {
        res.status(201);
        hyf_students.deleteStudentByEmail(req.query.email);
        res.send(`student with email ${req.query.email} deleted successfully`)
      } else {
        res.status(404);
        res.send('email not found');
      }
    }
    else {
      res.send('the student email is required!!')
    }
    });


    module.exports = router;
