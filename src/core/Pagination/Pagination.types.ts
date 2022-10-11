import { PaginationProps as MuiPaginationProps } from '@mui/material/Pagination';
import { TypographyProps } from '@mui/material/Typography';

export interface PaginationInfoTextProps extends TypographyProps {
  count?: number;
}
export type PaginationProps = MuiPaginationProps;
