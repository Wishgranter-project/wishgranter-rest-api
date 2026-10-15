
# Faq


## Why deleting an accounts requires a confirmation token ?
I decided that password confirmation was a suitable safe guard against
human error.

Could have submitted the password straight to `DELETE /api/v1/users/{userId}`,
but servers are not consistent regarding the body in DELETE requests, cannot 
rely it will work everywhere. Sending the password in the query string or the
header is not an option since it would leak into server, proxy and browser logs.

Hence the two step process:

1. `POST /api/v1/confirmation` with an `action` (`deleteUser`) and the user's 
   `password`. On success it returns a short-lived, single-use `token`.
2. The action request (`DELETE /api/v1/users/{userId}`) carries that token in 
   the `X-Confirmation-Token` header.

This keeps the correct HTTP method, keeps the password safe and does not
rely on DELETE bodies being forwarded.
