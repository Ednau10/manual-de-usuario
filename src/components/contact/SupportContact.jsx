import React, { useState } from 'react';
import { Container, Form, Label, Input, TextArea, Button, SuccessMessage } from './SupportContact.styled';

const SupportContact = () => {
  const [formData, setFormData] = useState({
    username: '',
    profile: '',
    email: '',
    phone: '',
    location: '',
    comment: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Container>
      <h2>Contact Support</h2>
      {isSubmitted ? (
        <SuccessMessage>
          Your comments have been submitted. We will get in touch with you shortly.
        </SuccessMessage>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Label>
            Username:
            <Input type="text" name="username" value={formData.username} onChange={handleChange} />
          </Label>
          <Label>
            Profile:
            <Input type="text" name="profile" value={formData.profile} onChange={handleChange} />
          </Label>
          <Label>
            Email:
            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          </Label>
          <Label>
            Phone:
            <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </Label>
          <Label>
            Location:
            <Input type="text" name="location" value={formData.location} onChange={handleChange} />
          </Label>
          <Label>
            Comment:
            <TextArea name="comment" value={formData.comment} onChange={handleChange} />
          </Label>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Container>
  );
};

export default SupportContact;
