export default function NotFound(): JSX.Element {
  return (
    <div style={{ marginTop: '20px' }}>
      <h1>404 ERROR!</h1>
      <div style={{ fontSize: '24px', marginBottom: '5px' }}>
        Page not found :(
      </div>
      <p>
        Maybe the page you are looking for has been removed, or you typed in the
        wrong URL
      </p>
    </div>
  );
}
