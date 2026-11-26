export const errorHandler = (err, req, res, next) => {
  console.error('[Error Middleware]:', err.stack || err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
};
