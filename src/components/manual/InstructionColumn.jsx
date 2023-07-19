import React from 'react';
import { ColumnContainer, InstructionList, InstructionItem } from './InstructionColumn.styled';

const InstructionColumn = ({ instructions }) => {
  return (
    <ColumnContainer>
      <InstructionList>
        {instructions.map((instruction, index) => (
          <InstructionItem key={index}>{instruction}</InstructionItem>
        ))}
      </InstructionList>
    </ColumnContainer>
  );
};

export default InstructionColumn;
