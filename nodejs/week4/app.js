const studentList = require('./studentList');
const express = require('express');
const bodyParser = require('body-parser');
const routerJs = require('./router.js');

const app = express();
const port = 8081;

let logger = (req, res, next) => {
  console.info(`GOT REQUEST! ${req.method} ${req.originalUrl}`);
  next();
};
app.use(logger);
app.use('/api', routerJs);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('HYF students list API'));
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
