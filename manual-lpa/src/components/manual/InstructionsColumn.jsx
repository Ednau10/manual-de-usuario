// /scr/components/manual/InstructionsColumn.jsx
import React from 'react';
import { Column, Instructions } from './InstructionsColumn.styled';

const InstructionsColumn = ({ topics, selectedTopic }) => {
  const selectedInstructions =
    topics.find((topic) => topic.numberTopic === selectedTopic?.numberTopic)?.instructions ||
    'Selecciona un tema para ver las instrucciones.';

  return (
    <Column>
      <h4>Indicaciones</h4>
      <Instructions>{selectedInstructions}</Instructions>
    </Column>
  );
};

export default InstructionsColumn;
