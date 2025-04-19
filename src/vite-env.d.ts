/// <reference types="vite/client" />
export {};

declare global {
    interface Window {
        Telegram: typeof Telegram;
    }
}
