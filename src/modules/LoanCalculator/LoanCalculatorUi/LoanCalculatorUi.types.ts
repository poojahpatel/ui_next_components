import { IFormInput as IData } from '../AppConfig';

export interface IListItem {
  label: string;
  value: string;
}
export interface IFormInput {
  asset_value: number;
  loan_amount: number;
  down_payment: number;
  interest_rate: number;
  loan_term: number;
}

export interface DataProps extends IData {
  header_title?: string;
  header_description?: string;
  theme_color?: string;
}
export interface LoanCalculatorUiProps {
  data?: any;
}
