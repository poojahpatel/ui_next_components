// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import React from 'react';

// components
import Box from '@mui/material/Box';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

/* local */
import DraggableListItem from './DraggableListItem';
// ----------------------------------------------------------------------------

// TS

import { DraggableListProps } from './DraggableList.types';

// ----------------------------------------------------------------------------

const DraggableList = (props: DraggableListProps<any>) => {
  const { id, custom_drag, items, onDragEnd, getId, renderListItem, ListItem, ...rest } = props;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={id || 'droppableId'}>
        {(provided) => (
          <Box sx={{ width: '100%' }} ref={provided.innerRef} {...provided.droppableProps} {...rest}>
            {items.map((item, index) => (
              // @ts-ignore
              <DraggableListItem
                key={index}
                id={(item as any).id}
                index={index}
                disableDrag={item?.disableDrag}
              >
                {(item as any).content ? (
                  (item as any).content
                ) : renderListItem ? (
                  renderListItem({ item, index, id: item.id })
                ) : ListItem ? (
                  <ListItem id={item.id} item={item} index={index} />
                ) : null}
              </DraggableListItem>
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
};

DraggableList.defaultProps = {
  getId: (item: any) => item?.id,
};

export default DraggableList;
