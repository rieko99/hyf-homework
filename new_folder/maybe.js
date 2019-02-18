let ul = document.querySelector('ul');

class Quiz {
  constructor(name) {
    this.name = name;
  }

  fetchQuestions() {
    return fetch('https://gist.githubusercontent.com/benna100/c9c38faebea1526fb4e6b6b896a1dc94/raw/9468c385bfb422620676b3669509b0a59b326c42/quiz-questions.json')
    .then(questionsRsponse => questionsRsponse.json())
  }

  renderQuestions() {
    this.fetchQuestions()
    .then(questions => {
    questions.forEach((question) => {
      let lis = document.createElement('li');
      lis.innerHTML = question.title + ' ' + question.content;
      ul.appendChild(lis);
      selectOptions(question.options)
    })
    });
  }

  showScore() {
    let p = document.querySelector('p');
    let button = document.querySelector('button');
    button.addEventListener('click', () =>
    p.innerHTML = document.querySelectorAll('option:checked[is-answer=true]').length
  )}
}

let a = new Quiz ('something');
a.renderQuestions()
a.showScore()

function selectOptions(answers) {
  let selectList = document.createElement('select');
  selectList.id = 'selectList';
  ul.appendChild(selectList);
  answers.forEach((answer) => {
    let options = document.createElement('option');
    options.value = answer;
    options.text = answer.content;
    options.setAttribute('is-answer', answer.correct)
    selectList.appendChild(options);
  })
}
