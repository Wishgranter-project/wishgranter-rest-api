# Wishgranter Rest API

Here is defined the RESTful API for a web-based Descriptive Player.

This is part of the wider [Wishgranter project](https://github.com/Wishgranter-project).

A web-based description player does not need to implement this API or any, but 
this remains as an advisable standard to follow. It would make easier to write 
clients compatible with different servers.

The API is defined using the [Open API](https://learn.openapis.org/specification/docs) 
standard, see the [openapi.json](openapi.json).

Human-friendly documentation available [here](https://wishgranter-project.github.io/wishgranter-rest-api/).

## Features of the API

- Multi-user support, with user/password authentication.
- Full CRUD support to manage users' [descriptive playlists](https://github.com/Wishgranter-project/descriptive-playlist-definition)

The repository include [Bruno](https://docs.usebruno.com/introduction/getting-started) 
collections to help test your implementation, check the [ApiTests](ApiTests) 
directory.

## Important concepts

- Requests must use the appropriate methods, get, post, put, patch, delete.
- Responses must use appropriate codes, 200, 40*, 50* etc.
- The body of POST/PUT/PATCH requests use either form-data or urlencoded 
formats, responses use json.

### Schema
All responses return an object encapsulating the information in one to three 
properties:

- `data`: The actual information we asked for.
- `meta`: Adjacent information about the `data`.
- `messages`: Status messages, infos, warnings, errors, debug ...

**Observation**: None are obligatory, each may be ommitted entirely if there's 
no data to fill them with.

Example, this is what you may expect of a search result:

```json
{
    "meta": {
        "statusCode": 200,
        "resultsCount": 91,
        "pagesCount": 10,
        "currentPage": 10,
        "itemsPerPage": 10,
        "currentPageCount": 1
    },
    "messages": [
        {
            "type": "debug",
            "title": "Debug info",
            "description": "Request fulfilled in 100 milliseconds."
        }
    ],
    "data": [
        {
            "uuid": "3f702cd2-d36f-45ac-8ada-e67bd6468776", 
            "title": "Twilight Of The Thunder God", 
            "artist": "Sabaton", 
            "album": "Carolus Rex", 
            "cover": "Amon Amarth",
            "genre": "Metal"
        }
    ]
}
```

## License
MIT
