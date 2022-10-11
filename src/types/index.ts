import { GridColDef } from '@mui/x-data-grid-pro';

export interface ISelectOption {
  label: string;
  value: string;
  disbaled?: boolean;
}

export interface ITableColumnsType extends GridColDef {
  internal_name: string;
  visible: boolean;
  hidden?: boolean;
}
