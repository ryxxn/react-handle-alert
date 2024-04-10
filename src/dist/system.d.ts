/// <reference types="react" />
import { ConfirmOptions, AlertOptions } from "./types";
export declare function handleConfirm(text: React.ReactNode, options?: ConfirmOptions): Promise<boolean>;
export declare const handleAlert: (text: React.ReactNode, options?: AlertOptions) => void;
