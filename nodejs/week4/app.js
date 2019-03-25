const jsonfile = require('jsonfile');
const file = 'studentList.json';
let studentJson = jsonfile.readFileSync(file);


const express = require('express');
const bodyParser = require('body-parser');
const studentList = require('./studentList');

const port = 8081;
const hyf_students = new studentList(studentJson);


const app = express();
const router = express.Router();

let logger = (req, res, next) => {
  console.info(`GOT REQUEST! ${req.method} ${req.originalUrl}`);
  next();
}

app.use('/api', router);
app.use(logger);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('HYF students list API'))

router.route('/students/:studentName')
  .get((req, res) => {
      const studentName = hyf_students.getStudentDetailByName(req.params.studentName);
      if (studentName.length > 0) {
        res.status(201);
        res.send(studentName);
      } else {
        res.status(404);
        res.send('Student does not exist');
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
    if (req.query.studentEmail && req.query.keyToEdit && req.query.newInfo) {

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

app.listen(port, () =>
  console.log(`HYF API running on port: ${port}`)
);

// const port = 8001;
//
// app.route(z)
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// const http = require('http');
// const studentBook = require('./studentBook');
// let server = http.createServer(function functionName(req, res) {
//   // console.log('req', req)
//   const url = req.url;
//   const students = new studentBook(studentsInfo);
//   if (url === '/getList' && req.method === 'GET') {
//     res.statusCode = 201;
//     res.end(JSON.stringify(students.getList()));
//   }
//   else if (url === '/getListByClass' && req.method === 'GET') {
//     res.statusCode = 201;
//     res.end(JSON.stringify(students.getListByClass(6574)));
//   }
//   else if (url === '/getStudentDetailByName' && req.method === 'GET') {
//     res.statusCode = 201;
//     res.end(JSON.stringify(students.getStudentDetailByName('Genevieve Sandoval')));
//   }
//   else if (url === '/addNewStudent' && req.method === 'POST') {
//     if (students.isAlreadyInClass('dfv@dafv.com')) {
//       res.statusCode = 400;
//       res.end('student already exist');
//     } else {
//       students.addNewStudent({name:'wisam', email:'dfv@dafv.com'});
//       res.statusCode = 201;
//       res.end('student added successfully');
//     }
//   }
//   else if (url === '/editStudentInfo' && req.method === 'PUT') {
//     if (students.isAlreadyInClass('dfv@dafv.com')) {
//       students.editStudentInfo('dfv@dafv.com', 'name', 'Rieko');
//       res.statusCode = 201;
//       res.end('Student edited successfully');
//     } else {
//       res.statusCode = 400;
//       res.end('Student does not exist');
//     }
//   }
//   else if (url === '/deleteStudentByEmail' && req.method === 'DELETE') {
//     if (students.isAlreadyInClass('dfv@dafv.com')) {
//       students.deleteStudentByEmail('dfv@dafv.com');
//       res.statusCode = 201;
//       res.end('Student deleted successfully');
//     } else {
//       res.statusCode = 400;
//       res.end('Student does not exist');
//     }
//   }
//   else {
//     res.statusCode = 400;
//     res.end('not found');
//   }
// });
//
// server.listen(8050, function () {
//   console.log('hello world');
// });
