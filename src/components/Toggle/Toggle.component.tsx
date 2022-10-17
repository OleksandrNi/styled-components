import { ToggleProps } from "./Toggle.types";

import styles from "./Toggle.module.scss";

export const ToggleComponent: React.FC<ToggleProps> = ({
  isShowLabel,
  label,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <label className={styles.switch}>
        <input type="checkbox" value="check" />
        <div className={styles.slider}></div>
      </label>
      {isShowLabel && <div>{label}</div>}
    </div>
  );
};

ToggleComponent.displayName = "Toggle";
