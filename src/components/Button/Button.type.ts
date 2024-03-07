import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  category?: "filled" | "outlined";
  children: string;
}
