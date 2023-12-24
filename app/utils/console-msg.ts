export default function consoleMessage() {
  const message =
    '%c Hello There 👋! \n\n This portfolio is developed by Karan Chauhan \n\n hellokaranhere@outlook.com';
  const styles = [
    `font-size: 12px`,
    `font-family: monospace`,
    `background: white`,
    `display: inline-block`,
    `color: black`,
    `padding: 8px 19px`,
    `border: 1px dashed;`,
  ].join(';');

  console.log(message, styles);
}
