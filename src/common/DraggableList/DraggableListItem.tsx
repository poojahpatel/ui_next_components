// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import * as React from 'react';

/* ICONS */
import { MdDragIndicator } from 'react-icons/md';

// COMPONENTS
import Box from '@mui/material/Box';
import { Draggable } from 'react-beautiful-dnd';

// TS
import { DraggableItemProps } from './DraggableList.types';

const DraggableListItem: React.FC<DraggableItemProps<any>> = (props) => {
  const { id, index, children, disableDrag, containerProps } = props;

  return (
    <Draggable key={id} draggableId={id} index={index} isDragDisabled={disableDrag}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Box display="flex" width="100%" alignItems="center" bgcolor="background.default" {...containerProps}>
            <Box component="span" display="flex" color="grey.700">
              <MdDragIndicator size={25} />
            </Box>
            <Box display="flex" flexDirection="column" flex={1}>
              {children}
            </Box>
          </Box>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableListItem;
