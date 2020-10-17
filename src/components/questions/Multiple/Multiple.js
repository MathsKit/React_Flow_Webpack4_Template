import React, {Component} from 'react';
import TextButton from '../../TextButton'
import {replaceWithPlaceholder} from '../../../../utils';
import {MultipleWrapper, ButtonWrapper} from './MultipleWrapper';


const multiple = (props) => {
    const question = replaceWithPlaceholder(props.question, props.placeholders);

    return (
      <MultipleWrapper>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
          {props.allAnswers.map((answer) => {
            return (
              <ButtonWrapper key={answer}
                             correct={props.userAnswer?.correctAnswer === answer}
                             userClicked={props.userAnswer?.answer === answer}>
                  <TextButton value={answer}
                              text={replaceWithPlaceholder(answer, props.placeholders)}
                              isDisabled={!!props.userAnswer?.answer}
                              onClick={props.callback}/>
              </ButtonWrapper>
            );
          })}
        </div>
      </MultipleWrapper>
    );
}

export default multiple;