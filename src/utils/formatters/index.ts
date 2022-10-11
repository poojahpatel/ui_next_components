import moment from 'moment-timezone';
import { CURRENCIES } from '../../constants';
/**
 *
 * @param number
 * @param dec
 * @returns number
 */
export function formatNumberDecimal(number: number, dec: number) {
  if (!number) number = 0;
  if (!dec && dec !== 0) dec = 0;

  const formatter = new Intl.NumberFormat('us', {
    minimumFractionDigits: dec,
    maximumFractionDigits: dec,
  });

  return formatter.format(number);
}

/**
 *
 * @param code
 * @returns string
 */
export const getCurrencySymbol = (code: string) =>
  CURRENCIES.find((item) => item.abbreviation === code.toUpperCase())?.symbol;

/**
 *
 * @param d
 * @param timezone
 * @returns
 */
export const getMondayOfCurrentWeek = (d: any, timezone: string) => moment(d).tz(timezone).startOf('week');

/**
 *
 * @param d
 * @param timezone
 * @param blank
 * @returns
 */
export const getSundayOfCurrentWeek = (d: any, timezone: string, blank = false) => {
  const lastWeek = moment(d).tz(timezone).endOf('week');
  if (blank) {
    return lastWeek.subtract(1, 'days');
  }
  return lastWeek;
};

/**
 *
 * @param phone
 * @returns
 */
export function unmaskPhoneNumber(phone: string | number) {
  const number = `${phone}`.replace(/\D/g, '');
  return `+${number}`;
}

/**
 *
 * @param phone
 * @returns
 */
export function removeIntCode(phone: string | number) {
  const cleaned = `${phone}`.replace(/\D/g, '');
  if (!phone) return '';

  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const intlCode = match[1] ? '+1 ' : '';
    return [match[2], match[3], match[4]].join('');
  }
  return null;
}

/**
 *
 * @param str
 * @returns string
 */
export const formatPhoneNumber = (str: string) => {
  if (str) {
    const phoneNumberValue = str.replace(/\D[^.]/g, '');
    const phoneNumberNew = `+1 (${phoneNumberValue.slice(0, 3)}) ${phoneNumberValue.slice(
      3,
      6
    )}-${phoneNumberValue.slice(6)}`;

    return phoneNumberNew;
  }
};

/**
 *
 * @param twilio_phone
 * @param customer_phone
 * @returns
 */
export const getSmsThreadSort = (twilio_phone: string, customer_phone: string) =>
  `thread_${removeIntCode(twilio_phone)}_${removeIntCode(customer_phone)}`;

/**
 * convert GMT datetime to user's local timezone datetime
 * @param dateTime
 * @param format
 * @returns
 */
export const getLocalDateTimeFromGmt = (dateTime: string, format?: string) => {
  const gmtDateTime = moment.utc(dateTime);

  const localDateTime = gmtDateTime
    .clone()
    .tz(moment.tz.guess())
    .format(format || 'DD MMM YYYY hh:mm A');
  return localDateTime;
};

/**
 *
 * @param number
 * @param digit
 * @param style
 * @returns
 */
export function formatMoney(number: number | string, digit = 2, style = 'currency') {
  if (Number.isNaN(number)) {
    number = 0;
  }
  const formatter = new Intl.NumberFormat('en-US', {
    style,
    currency: 'USD',
    minimumFractionDigits: digit,
  });

  return formatter.format(Number(number));
}

/**
 *
 * @param timer
 * @returns string
 */
export const formatTimer = (timer: number): string =>
  `${timer / 60 < 10 ? '0' : ''}${Math.floor(timer / 60)}:${timer % 60 < 10 ? '0' : ''}${timer % 60}`;
