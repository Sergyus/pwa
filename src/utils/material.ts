/**
 * Remove Styles
 */
export const jssServerSide = (): void => {
  const jssStyles = document.querySelector('#jss-server-side');
  if (jssStyles && jssStyles.parentElement) {
    jssStyles.parentElement.removeChild(jssStyles);
  }
};
