declare module "*.module.css";
declare module "*.module.scss";
declare module "*.png";
declare module "*.svg";

declare module "!!raw-loader!*" {
  const contents: string;
  export = contents;
}