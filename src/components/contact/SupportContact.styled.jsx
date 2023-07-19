import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

export const Form = styled.form`
  margin-top: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: #00bcd4;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  margin-top: 20px;
`;
