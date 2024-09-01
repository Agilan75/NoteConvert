import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f7;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 20px;
`;

const Form = styled.form`
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
  display: inline-block;
  font-size: 1rem;
  color: #353535;
  padding: 10px 20px;
  background-color: #f1f1f1;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const FileName = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #6e6e73;
  font-style: italic;
`;

const ConvertButton = styled.button`
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  background-color: #0071e3;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

const Convert = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleConvert = (e) => {
    e.preventDefault();
    console.log('Converting file:', file);
  };

  return (
    <Container>
      <Title>Convert Your Media</Title>
      <Form onSubmit={handleConvert}>
        <FileInputLabel htmlFor="fileInput">Choose File</FileInputLabel>
        <FileInput id="fileInput" type="file" onChange={handleFileChange} />
        {file && <FileName>Selected file: {file.name}</FileName>}
        <ConvertButton type="submit">Convert</ConvertButton>
      </Form>
    </Container>
  );
};

export default Convert;
