import { RadioButtonProps } from "./RadioButton.types";

import styles from "./RadioButton.module.scss";

export const RadioButtonComponent: React.FC<RadioButtonProps> = ({
  id,
  isShowLabel,
  label,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: "flex" }}>
        <input
          type="radio"
          className={styles.custom_radio}
          id={id}
          name="radio"
          value={id}
        />
        <label htmlFor={id}></label>
        {isShowLabel && <div>{label}</div>}
      </div>
      {/* <div>
        <div style={{ display: "flex" }}>
          <input
            type="radio"
            className={styles.custom_radio}
            id="two"
            name="radio"
            value="two"
          />
          <label htmlFor="two"></label>
          {isShowLabel && <div>{label}</div>}
        </div>
      </div> */}
    </div>
  );
};

RadioButtonComponent.displayName = "RadioButton";
