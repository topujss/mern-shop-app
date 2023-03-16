/**
 * find an error before server crash
 */
export const serverError = (error, req, res, next) => {
  const errStatus = error.status || 500;
  const errMsg = error.message || 'Server error';

  return res.status(errStatus).json({
    errorName: error.name,
    message: errMsg,
    status: errStatus,
    stack: (error.stack = null),
  });
};
