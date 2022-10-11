export interface WeekDaySelecterProps {
  label: string;
  name: string;
  value: Array<string>;
  onChange?: (days: Array<string>) => void;
}
