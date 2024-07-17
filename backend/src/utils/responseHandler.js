const successResponse = (response, data, statusCode = 200) => {
  return response.status(statusCode).json(data);
};

const errorResponse = (response, error, statusCode = 400) => {
  return response.status(statusCode).json({ error: error.message });
};

module.exports = {
  successResponse,
  errorResponse,
};
