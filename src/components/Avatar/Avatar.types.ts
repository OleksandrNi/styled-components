export type AvatarsProps = {
  [keys: string]: string;
};

export type ColorsProps = {
  [keys: string]: string;
};

export enum AvatarVariantEnum {
  size_s = "size_s",
  size_M = "size_M",
  size_L = "size_L",
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

export type AvatarProps = {
  variant: string;
  text: string;
  color?: string;
  className?: string;
};
