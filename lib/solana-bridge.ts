// Solana WebView <-> Native bridge communication

export type PaymentToken = 'SOL' | 'USDC' | 'SKR';

export interface PaymentRequest {
  type: 'PAYMENT_REQUEST';
  token: PaymentToken;
  timestamp: number;
}

export interface PaymentResponse {
  type: 'PAYMENT_RESPONSE';
  success: boolean;
  signature?: string;
  error?: string;
}

export interface WalletRequest {
  type: 'WALLET_REQUEST';
  action: 'connect' | 'disconnect';
}

export interface WalletResponse {
  type: 'WALLET_RESPONSE';
  connected: boolean;
  publicKey?: string;
  error?: string;
}

type BridgeMessage = PaymentRequest | WalletRequest;
type BridgeResponse = PaymentResponse | WalletResponse;

// Check if running inside React Native WebView
export function isInNativeApp(): boolean {
  if (typeof window === 'undefined') return false;
  return !!(window as any).ReactNativeWebView;
}

// Send message to native app
function postToNative(message: BridgeMessage): void {
  const rn = (window as any).ReactNativeWebView;
  if (rn) {
    rn.postMessage(JSON.stringify(message));
  }
}

// Request payment via native app
export function requestPayment(token: PaymentToken): Promise<PaymentResponse> {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      resolve({ type: 'PAYMENT_RESPONSE', success: false, error: 'Payment timed out' });
      cleanup();
    }, 120000); // 2 minute timeout

    function handleMessage(event: MessageEvent) {
      try {
        const data: BridgeResponse = typeof event.data === 'string'
          ? JSON.parse(event.data)
          : event.data;

        if (data.type === 'PAYMENT_RESPONSE') {
          resolve(data as PaymentResponse);
          cleanup();
        }
      } catch {
        // Ignore non-JSON messages
      }
    }

    function cleanup() {
      clearTimeout(timeout);
      window.removeEventListener('message', handleMessage);
    }

    window.addEventListener('message', handleMessage);

    postToNative({
      type: 'PAYMENT_REQUEST',
      token,
      timestamp: Date.now(),
    });
  });
}
