import styled from 'styled-components';
import { Form, Field } from 'formik';

export const LoginFormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

export const LoginLabel = styled.label`
  position: absolute;
  left: 5px;
  display: block;
  padding: 3px;

  color: #fff;
`;

export const LoginInput = styled(Field)`
  display: block;
  width: 100%;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-right: 7px;
  padding-left: 80px;
  border: solid 1px #fff;
  border-radius: 10px;

  background-color: rgba(200, 200, 200, 0.4);
  color: #fff;
`;

export const LoginButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: none;
  border-radius: 30px;

  color: white;
  background-color: #f92457;
  cursor: pointer;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  font-size: 16px;
  line-height: 1.16;
  font-weight: 500;
  text-align: center;

  :hover,
  :focus {
    background-color: #333;
  }
`;
