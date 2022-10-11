export let win: any;
export let document: any;
export let screen: any;

if (typeof window !== 'undefined') {
  win = window;
} else if (typeof self !== 'undefined') {
  win = self;
} else {
  win = {
    document: {
      createElement: () => {},
    },
    parent: {
      postMessage: () => {},
    },
    localStorage: {},
    location: {
      search: '',
    },
    screen: {
      width: 0,
      height: 0,
    },
    addEventListener: () => {},
    removeEventListener: () => {},
  };
}
document = win.document || {};
screen = win.screen || {};
