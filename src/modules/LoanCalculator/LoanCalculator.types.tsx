import { DrawerProps } from '../../core/Drawer';
import AppConfig, { IFormInput } from './AppConfig';
import { DataProps } from './LoanCalculatorUi';

export interface LoanCalculatorProps {
  configDrawerProps?: DrawerProps;
  config?: DataProps;
}
