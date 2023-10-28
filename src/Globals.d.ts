// Images
declare module "*.png";
declare module "*.svg";

// Styles
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}


// Raw files
declare module "!!raw-loader!*" {
  const contents: string;
  export = contents;
}