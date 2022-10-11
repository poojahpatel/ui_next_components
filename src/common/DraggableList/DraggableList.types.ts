import { BoxProps } from '@mui/material/Box';
import { DraggableProvidedDragHandleProps, OnDragEndResponder } from 'react-beautiful-dnd';

export interface DraggableItemProps<I> {
  id: string;
  item?: I;
  drag_handle?: DraggableProvidedDragHandleProps;
  index: number;
  disableDrag?: boolean;
  containerProps?: BoxProps;
  children?: React.ReactNode;
}

export interface DraggableListProps<I> extends Omit<BoxProps, 'onDragEnd'> {
  custom_drag?: boolean;
  items: I[];
  getId?: (item: I) => string;
  onDragEnd: OnDragEndResponder;
  renderListItem?: (props: DraggableItemProps<I>) => React.ReactNode;
  ListItem?: React.ComponentType<DraggableItemProps<I>>;
}
