import styled from 'styled-components';

export const Button = styled.button`
  padding: 15px 10px;
  border: 1px solid hsl(0, 0%, 10%);

  background-color: hsl(0, 0%, 14%);
  color: #afafaf;
  outline: none;

  font-size: 16px;
  line-height: 1.5;

  cursor: pointer;
  transition: background-color 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25),
    transform 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);

  :not(:disabled):hover,
  :not(:disabled):focus {
    background-color: hsl(0, 7%, 20%);
    transform: scale(1.02);
  }

  :disabled {
    border: 1px solid hsl(0, 0%, 15%);
    color: #4f4f4f;
    cursor: auto;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  border: 1px solid hsl(0, 0%, 10%);

  background-color: hsl(0, 0%, 14%);
  color: #afafaf;
  outline: none;

  font-size: 18px;
  line-height: 1.5;

  transition: background-color 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25),
    transform 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);

  :focus {
    background-color: hsl(0, 7%, 20%);
    transform: scale(1.02);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 15px 10px;
  border: 1px solid hsl(0, 0%, 10%);

  background-color: hsl(0, 0%, 14%);
  color: #afafaf;
  outline: none;

  font-size: 18px;
  line-height: 1.5;

  transition: background-color 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);

  :focus {
    background-color: hsl(0, 7%, 20%);
  }
`;
