// declare module '*.css' {
//   const content: { [className: string]: string };
//   export default content;
// }
// declare module '*.scss' {
//   const content: { [className: string]: string };
//   export default content;
// }
declare module '*.module.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
