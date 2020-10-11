// @flow
import React from 'react'

import TextButton from './components/TextButton'

const App = (): React.DOM<> => {
  const [nums, setNums] = React.useState({numA: 0, numB: 0})
  const [result, setResult] = React.useState(0)

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

  const handleClickCauculate = () => {
    setResult(nums['numA'] + nums['numB'])
  }

  // Use "yarn flow" => one mistake will happen
  const wrongCase = (parameter_a: number, parameter_b: number) => parameter_a + parameter_b

  return (
    <div>
      Hello world!
      <br />
      <br />
      <input value={nums['numA']} onChange={e => hanldeAddTwoNumber(e, 'numA')} /> {` + `}
      <input value={nums['numB']} onChange={e => hanldeAddTwoNumber(e, 'numB')} /> {` = `}
      {result}
      <br />
      <br />
      <TextButton text="Cauculate" onClick={handleClickCauculate} />
      <br />
      <br />
      {wrongCase('1', 2)}
    </div>
  )
}

const getNum = (numA: number, numB: number) => {
  return numA + numB
}

export default App
