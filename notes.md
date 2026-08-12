
# Faq


## Why `/api/v1/users/{userId}/delete` is a POST request ?
Because servers are not consistent regarding the body in DELETE requests, and 
since we opted to go with password confirmation during deletion, id was made
a post request.

