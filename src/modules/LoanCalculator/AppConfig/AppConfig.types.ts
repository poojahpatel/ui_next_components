import { ValueProps } from '../../../common/ButtonConfigInput';

export interface IFormInput {
  calculate_button?: ValueProps;
  primary_button?: ValueProps;
  secondary_button?: ValueProps;
  rates_note?: string;
  disclaimer_note?: string;
  redirect_note?: string;
  down_payments?: string;
  interest_rates?: string;
  loan_terms?: string;
  app_border_color?: string;
  app_border?: boolean;
  header?: boolean;
}

export interface AppConfigProps {
  onChange?: (data: IFormInput) => void;
  initialValues?: IFormInput;
}
