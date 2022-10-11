import { Buffer } from 'buffer';
import { win, document } from '../global';
/**
 *
 * @param len
 * @param prefix
 * @returns
 */
export function keyGenerator(len = 5, prefix?: string) {
  const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let text = '';
  for (let i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  text = text.toLowerCase();
  if (prefix) {
    text = `${prefix}_${text}`;
  }
  return text;
}

/**
 *
 * @param data
 * @returns
 */
export const encodeBase64 = (data: string) => Buffer.from(data).toString('base64');

/**
 *
 * @param data
 * @returns
 */
export const decodeBase64 = (data: string) => Buffer.from(data, 'base64').toString('ascii');

/**
 *
 * @param data
 */
export const copyToClipboard = (data: string) => {
  const { navigator } = win;
  try {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(data);
    } else {
      const el = document.createElement('textarea');
      el.value = data;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  } catch (e) {
    throw new Error('Copy link failed');
  }
};
