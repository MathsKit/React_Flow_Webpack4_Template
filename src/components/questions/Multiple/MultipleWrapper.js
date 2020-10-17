import styled  from "styled-components";

export const MultipleWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  border-radius: 10px;
  border: 2px solid #0085a3;
  background: #ebfeff;
  padding: 20px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({correct, userClicked}) =>
      correct
        ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #ff5656, #c16868)'
        : 'linear-gradient(90deg, #56ccff, #6eafb4)'
      };
    border: 3px solid #fff;
    box-shadow: 1px 2px 0 rgba(0,0,0,0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0 1px 0 rgab(0,0,0,0,25);
    }
`;