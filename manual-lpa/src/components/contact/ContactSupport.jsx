// SupportContact.jsx
import React, { useState } from 'react';
import {
  ContactButton,
  ContactModal,
  ModalContent,
  CloseButton,
  Form,
  FormRow,
  FormRowLabel,
  FormRowInput,
  FormRowTextArea,
  FormButton,
} from './ContactSupport.styled';

const ContactSupport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, si es necesario.
    // Por ahora, simplemente cerraremos el modal al enviar el formulario.
    setIsModalOpen(false);
  };

  return (
    <>
      <ContactButton onClick={handleContactButtonClick}>Contactar a Soporte</ContactButton>
      {isModalOpen && (
        <ContactModal>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            <h2>Contactar a Soporte</h2>
            <Form onSubmit={handleSubmit}>
              <FormRow>
                <FormRowLabel>Nombre completo:</FormRowLabel>
                <FormRowInput type="text" placeholder="Ingrese su nombre completo" />
              </FormRow>
              <FormRow>
                <FormRowLabel>Perfil de usuario:</FormRowLabel>
                <FormRowInput type="text" placeholder="Ingrese su perfil de usuario" />
              </FormRow>
              <FormRow>
                <FormRowLabel>Área o Ubicación:</FormRowLabel>
                <FormRowInput type="text" placeholder="Ingrese su área o ubicación" />
              </FormRow>
              <FormRow>
                <FormRowLabel>Teléfono:</FormRowLabel>
                <FormRowInput type="tel" placeholder="Ingrese su teléfono" />
              </FormRow>
              <FormRow>
                <FormRowLabel>Correo:</FormRowLabel>
                <FormRowInput type="email" placeholder="Ingrese su correo" />
              </FormRow>
              <FormRow>
                <FormRowLabel>Descripción del problema:</FormRowLabel>
                <FormRowTextArea rows={5} placeholder="Ingrese una descripción del problema" />
              </FormRow>
              <FormButton type="submit">Enviar</FormButton>
            </Form>
          </ModalContent>
        </ContactModal>
      )}
    </>
  );
};

export default ContactSupport;
