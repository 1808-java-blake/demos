console.log('started');

function addEntry(question, answer) {
  let tbody = document.getElementById('table-body');
  tbody.innerHTML += `
  <tr>
    <td>${question}</td>
    <td>${answer}</td>
  </tr>
  `;
  console.log('added question');
}

function addEntrySafe(question, answer) {
  // create the new elements for the new row
  let newQuestionRow = document.createElement('tr');
  let newQuestionQuestion = document.createElement('td');
  newQuestionQuestion.innerText = question;
  newQuestionRow.appendChild(newQuestionQuestion);
  let newQuestionAnswer = document.createElement('td');
  newQuestionAnswer.innerText = answer;
  newQuestionRow.appendChild(newQuestionAnswer);

  // get the tbody to add the new row to
  let tbody = document.getElementById('table-body');

  // append the whole row now
  tbody.appendChild(newQuestionRow);

}

function addNewQuestion() {
  let question = document.getElementById('new-question').value;
  let answer = document.getElementById('new-answer').value;
  addEntrySafe(question, answer);
}

addEntry('what is your favore number', 3);
let questions = [
  {
    question: 'how are you?',
    answer: 'tired'
  },
  {
    question: 'what is event bubbling',
    answer: 'when an event occurs on an element it will propagate and invoke any event listers by any of its parents'
  },
  {
    question: 'how do you select all elements with the class c',
    answer: `document.getElementsByClassName('c')`
  }
]
questions.forEach(each => {
  addEntrySafe(each.question, each.answer);
});

// document.getElementById('question-submit-button')
//   .addEventListener('click', addNewQuestion);