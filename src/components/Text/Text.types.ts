export type TagsProps = {
  [keys: string]: string;
};

export type ColorsProps = {
  [keys: string]: string;
};

export enum TagsVariantEnum {
  heading_1 = "h1",
  heading_2 = "h2",
  heading_3 = "h3",
  heading_4 = "h4",
  heading_5 = "h5",
  subtitle_m = "p",
  subtitle_s = "p",
  body_l = "p",
  body_m = "p",
  caption = "p",
}

export enum ColorsVariantEnum {
  black = "10203B",
  dark_grey = "515B6C",
  grey = "9CA4B3",
  light_grey = "D7DBE2",
  bg = "F9F9F9",
  profile_block = "263650",
  main = "10A8C9",
  red = "D82045",
  green = "03D087",
  orange = "F2994A",
}

export type TextProps = {
  variant: string;
  text: string;
  color?: string;
  className?: string;
};
