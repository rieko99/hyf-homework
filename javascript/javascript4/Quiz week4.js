let difficultyLevels = [{content:'Very Hard'}, {content:'Hard'}, {content:'Easy'}, {content:'Very Easy'}]
let button = document.querySelector('button');
let ul = document.querySelector('ul');
let p = document.querySelector('p');
let selectLists = document.querySelectorAll('select');
let classP = document.querySelector('.p')
let div = document.createElement('div')
let veryHardCounter = 0;
let hardCounter = 0;
let veryEasyCounter = 0;
let easyCounter = 0;
let optionIdsCounter = 0;
let selectListIdsCounter = 0;

class Quiz {
  constructor(name) {
    this.name = name;
  }


  fetchQuestions() {
    return fetch('https://gist.githubusercontent.com/benna100/13f5850bf78f59d9baea915cbbe9f258/raw/ef8f2b137b07b05e8f593cef0281b4f1f0aba79a/JS-3%2520questions')
    .then(questionsRsponse => questionsRsponse.json())
  }

  renderQuestions() {
    this.fetchQuestions()
    .then(questions => {
    questions.forEach((question) => {
      let lis = document.createElement('li');
      lis.innerHTML = question.title + ' ' + question.content;
      ul.appendChild(lis);
      selectOptions(question.options, ul)
    })
    });
  }

  showScore() {
    let counter = 0;
    let timer = setInterval(() => counter++,1000);
    button.innerHTML = 'Get score';
    button.addEventListener('click', () => {
      clearInterval(timer)
      selectListIdsCounter++
      classP.innerHTML = 'It took you ' + counter + ' second'
      p.innerHTML = 'You have answered ' + document.querySelectorAll('option:checked[is-answer=true]').length + '/' + document.querySelectorAll('li').length
      getDifficultyLevel()
  })}
}

function executeQuiz(quizName) {
  let a = new Quiz (quizName);
  a.renderQuestions()
  a.showScore()
}
let once = {
  once : true
}
button.innerHTML = 'Start quiz';
button.addEventListener('click', () => {
  executeQuiz('someThing')
}, once)


function selectOptions(answers, elementAppending, value) {
  let selectList = document.createElement('select');
  selectList.id = 'selectList' + selectListIdsCounter;
  elementAppending.appendChild(selectList);
  answers.forEach((answer) => {
    value++
    let options = document.createElement('option');
    options.text = answer.content;
    options.setAttribute('is-answer', answer.correct)
    options.setAttribute('value', value)
    selectList.appendChild(options);
  })
}


function getDifficultyLevel(){
document.body.appendChild(div)
let submitDifficultyLevel = document.createElement('button')
div.appendChild(submitDifficultyLevel)
submitDifficultyLevel.innerHTML = 'SUBMIT';
selectOptions(difficultyLevels, div, optionIdsCounter)
submitDifficultyLevel.addEventListener('click', () => {
  sumSelectedValue()
  renderDiffuclty()
})}

function sumSelectedValue() {
  let select = document.getElementById('selectList1');
    (select.value === '1') ? veryHardCounter++ :
    (select.value === '2') ? hardCounter++ :
    (select.value === '3') ? easyCounter++ :
    (select.value === '4') ? veryEasyCounter++ : ''
}

let pDiffculty = document.createElement('p');
function renderDiffuclty() {
  ul.appendChild(pDiffculty);
  (veryHardCounter > hardCounter && veryHardCounter > easyCounter && veryHardCounter > veryEasyCounter) ? pDiffculty.innerHTML = 'Very hard' :
  (veryHardCounter < hardCounter && hardCounter > easyCounter && hardCounter > veryEasyCounter) ? pDiffculty.innerHTML = 'Hard' :
  (easyCounter > hardCounter && veryHardCounter < easyCounter && easyCounter > veryEasyCounter) ? pDiffculty.innerHTML = 'Easy' :
  (veryEasyCounter > hardCounter && veryEasyCounter > easyCounter && veryHardCounter < veryEasyCounter) ? pDiffculty.innerHTML = 'Very easy' : ''
}
