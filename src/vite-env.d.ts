/// <reference types="vite/client" />
export interface TelegramWebApp {
    initData: string;
    initDataUnsafe: Record<string, any>;
    version: string;
    platform: string;
    colorScheme: 'light' | 'dark' | string;
    themeParams: Record<string, any>;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    close: () => void;
    safeAreaInset: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    contentSafeAreaInset: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    isClosingConfirmationEnabled: boolean;
    isVerticalSwipesEnabled: boolean;
    isFullscreen: boolean;
    isOrientationLocked: boolean;
    isActive: boolean;
    bottomBarColor: string;
    BackButton: {
        isVisible: boolean;
    };
    MainButton: TelegramButton;
    SecondaryButton: TelegramButton & {
        position: 'left' | 'right';
    };
    SettingsButton: {
        isVisible: boolean;
    };
    HapticFeedback: Record<string, any>;
    CloudStorage: Record<string, any>;
    DeviceStorage: Record<string, any>;
    SecureStorage: Record<string, any>;
    BiometricManager: {
        isInited: boolean;
        isBiometricAvailable: boolean;
        biometricType: string;
        isAccessRequested: boolean;
        isAccessGranted: boolean;
        isBiometricTokenSaved: boolean;
        deviceId: string;
    };
    Accelerometer: {
        isStarted: boolean;
        x: number | null;
        y: number | null;
        z: number | null;
    };
    DeviceOrientation: {
        isStarted: boolean;
        absolute: boolean;
        alpha: number | null;
        beta: number | null;
        gamma: number | null;
    };
    Gyroscope: {
        isStarted: boolean;
        x: number | null;
        y: number | null;
        z: number | null;
    };
    LocationManager: {
        isInited: boolean;
        isLocationAvailable: boolean;
        isAccessRequested: boolean;
        isAccessGranted: boolean;
    };
}

export interface TelegramButton {
    type: 'main' | 'secondary';
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isProgressVisible: boolean;
    isActive: boolean;
    hasShineEffect: boolean;
}

declare global {
    interface Window {
        Telegram: {
            WebApp: TelegramWebApp;
        };
    }
}
