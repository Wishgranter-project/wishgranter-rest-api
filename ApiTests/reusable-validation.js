

// Validate ...
function jsonResponse(res) {
  expect(res.getHeader('content-type')).to.contain('application/json');

  const allowedProperties = ['meta', 'data', 'messages'];
  const bodyProperties = Object.keys(res.getBody());
  const foreignProperties = bodyProperties.filter((prp) => !allowedProperties.includes(prp));

  expect(foreignProperties).to.be.an('array').that.is.empty;
}

//Validate ...
function jsonSchema(res) {
  const allowedProperties = ['meta', 'data', 'messages'];
  const bodyProperties = Object.keys(res.getBody());
  const foreignProperties = bodyProperties.filter((prp) => !allowedProperties.includes(prp));

  expect(foreignProperties).to.be.an('array').that.is.empty;
}

// Validate ...
function responseToUnauthenticatedRequest(res) {
  const status = res.getStatus();

  if (status != 401) {
    return;
  }

  expect(res.getBody().meta.statusCode).to.equal(401);
}

// Validate ...
function responseToUnauthorizedRequest(res) {
  const status = res.getStatus();

  if (status != 403) {
    return;
  }

  expect(res.getBody().meta.statusCode).to.equal(403);
}

module.exports = {
  jsonResponse,
  jsonSchema,
  responseToUnauthenticatedRequest,
  responseToUnauthorizedRequest
}
