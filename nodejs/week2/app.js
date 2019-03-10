const http = require('http');
const studentBook = require('./studentBook');
let server = http.createServer(function functionName(req, res) {
  // console.log('req', req)
  const url = req.url
  const students = new studentBook('Genevieve Sandoval', 607633788199, );
  if (url === '/getList') {
    res.end(JSON.stringify(students.getList()))
  }
  else if (url === '/getListByClass') {
    res.end(JSON.stringify(students.getListByClass(6574)))
  }
  else if (url === '/getStudentDetailByName') {
    res.end(JSON.stringify(students.getStudentDetailByName('Genevieve Sandoval')))
  }
  else if (url === '/addNewStudent') {
    res.end(JSON.stringify(students.addNewStudent('Rieko', 08, 'rieko@gmail.com')))
  }
  else if (url === '/editStudentInfo') {
    res.end(JSON.stringify(students.editStudentInfo('Rieko')))
  }
  else {
    res.end('not found')
  }
});

server.listen(5000, function () {
  console.log('hello world')
});
