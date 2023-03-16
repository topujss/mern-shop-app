export const customErr = (msg, status) => {
  const err = Error();

  err.message = msg || 'Unknown error';
  err.status = status || 500;
  err.stack = '';

  return err;
};
