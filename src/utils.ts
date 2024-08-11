/**
 *
 * @example
 * import styles from "./styles.module.css";
 * const cn = bindClassNames(styles);
 *
 * <div className={cn("rha-alert-modal", className)}></div>
 */
export const bindClassNames =
  (styles: { [key: string]: string }) =>
  (...classNames: string[]) => {
    return classNames.map((className) => styles[className]).join(" ");
  };
