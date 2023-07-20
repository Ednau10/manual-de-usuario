// /scr/components/manual/NavigationButtons.jsx
import React from 'react';
import { Button } from './NavigationButtons.styled';

const NavigationButtons = ({ onNextClick, onPreviousClick }) => {
  return (
    <div>
      <Button onClick={onPreviousClick}>Tema Anterior</Button>
      <Button onClick={onNextClick}>Siguiente Tema</Button>
    </div>
  );
};

export default NavigationButtons;