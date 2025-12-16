import * as crypto from 'crypto';

// Some libs expect a global `crypto` like in the browser.
(globalThis as any).crypto = crypto;
