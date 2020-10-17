// @flow
import React from 'react'

import TextButton from './components/TextButton'
import Multiple from './components/questions/Multiple/Multiple';

import './App.css';

const sampleQuestion = {
    category: "Year 0",
    type: "multiple",
    question: "Choose {{star}} in the answer.",
    correct_answer: "{{star}}",
    all_answers: [
        "{{square}}",
        "{{tringle}}",
        "{{star}}",
        "{{circle}}"
    ],
    placeholders: {
        star: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>',
        square: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 0h-24v24h24v-24z"/></svg>',
        tringle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>',
        circle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>'
    }
};

const App = (): React.DOM<> => {
  const [nums, setNums] = React.useState({numA: 0, numB: 0});
  const [result, setResult] = React.useState(0);

  const [question, setQuestion] = React.useState(sampleQuestion);
  const [userAnswer, setUserAnswer] = React.useState({});

  const hanldeAddTwoNumber = (e, field: string) => {
    let updateNum = nums[field]

    if (!isNaN(Number(e.target.value))) {
      updateNum = {
        ...nums,
        [field]: Number(e.target.value),
      }

      if (typeof updateNum[field] === 'number') {
        return setNums(updateNum)
      }
    }
  }

  const handleClickCalculate = () => {
    setResult(nums['numA'] + nums['numB'])
  }

  // Use "yarn flow" => one mistake will happen
  const wrongCase = (parameter_a: number, parameter_b: number) => parameter_a + parameter_b

  const checkAnswer = (e) => {
    if(e.currentTarget.value){
      const answerObj = {
        answer: e.currentTarget.value,
        correctAnswer: question.correct_answer
      };
      setUserAnswer(answerObj);
    }
  }

  return (
    <div className="App">
      Hello world!
      <br />
      <br />
      <input value={nums['numA']} onChange={e => hanldeAddTwoNumber(e, 'numA')} /> {` + `}
      <input value={nums['numB']} onChange={e => hanldeAddTwoNumber(e, 'numB')} /> {` = `}
      {result}
      <br />
      <br />
      <TextButton text="Cauculate" onClick={handleClickCalculate} />
      <br />
      <br />
      {wrongCase('1', 2)}
      <br />
      <br />

      <h3>Answer the sample question</h3>
      <Multiple question={question.question}
                allAnswers={question.all_answers}
                userAnswer={userAnswer}
                placeholders={question.placeholders}
                callback={checkAnswer}
      />
    </div>
  )
}

const getNum = (numA: number, numB: number) => {
  return numA + numB
}

export default App
