import { CheckboxProps } from "./Checkbox.types";

import styles from "./Checkbox.module.scss";

export const CheckboxComponent: React.FC<CheckboxProps> = ({
  isShowLabel,
  label,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="checkbox"
        className={styles.custom_checkbox}
        id="checkbox"
        name="checkbox"
        value="yes"
      />
      <label htmlFor="checkbox"></label>
      {isShowLabel && <div>{label}</div>}
    </div>
  );
};

CheckboxComponent.displayName = "Checkbox";
