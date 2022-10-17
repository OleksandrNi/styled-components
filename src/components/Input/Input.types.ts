export enum InputVariantEnum {
  text = "text",
  password = "password",
  email = "email",
  date = "date",
  currency = "currency",
}

export type InputProps = {
  type: string;
  label: string;
  error: string;
  size: string;
  placeholder: string;
};
