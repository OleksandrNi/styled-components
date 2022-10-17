import React from "react";

import { BadgeProps } from "./Badge.types";

import { badges } from "./Badge.constants";
import "./Badge.module.scss";

export const BadgeComponent: React.FC<BadgeProps> = ({ variant }) => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: badges[variant].bgc,
        height: "24px",
        width: "max-content",
        padding: "9px 8px 8px",
        borderRadius: "4px",
        color: "white",
      }}
    >
      {badges[variant].text}
    </div>
  );
};

BadgeComponent.displayName = "Badge";
