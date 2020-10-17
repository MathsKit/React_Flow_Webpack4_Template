// @flow
import React from 'react'

type TextButtonProps = {
  text: string,
  onClick: () => void,
}

const TextButton = (props: TextButtonProps): React$Element<'button'> => {
  return (
    <button value={props.value}
            onClick={(e) => props.onClick(e)}
            disabled={props.isDisabled}
    >
      <span dangerouslySetInnerHTML={{__html: props.text}}></span>
    </button>
  )
}

export default TextButton
