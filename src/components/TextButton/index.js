// @flow
import React from 'react'

type TextButtonProps = {
  text: string,
  onClick: () => void,
}

const TextButton = (props: TextButtonProps): React$Element<'button'> => {
  return <button onClick={() => props.onClick()}>{props.text}</button>
}

export default TextButton
