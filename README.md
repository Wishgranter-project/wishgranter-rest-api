# Wishgranter Rest API

This repository specifies a web-based restful API to manage a collection of 
music playlists.

It follows the [Open API](https://learn.openapis.org/specification/docs) 
standard.

This is part of the wide Wishgranter project.

A web-based description player does not need to implement this API or any, but 
this remains as an advisable standard to follow.

## Important concepts

Requests must use the apropriate methods, get, post, put, patch, delete.

Responses must use apropriate codes, 200, 40*, 50* etc.

Post/put requests use the form-data format, responses use json.

### Schema
All responses return an object encapsulating the information in three properties:

- `data`: The actual information we asked for.
- `meta`: Adjacent information about the `data`.
- `messages`: Status messages, infos, warnings, errors, debug ...

As an example of what a typical response looks like, this is what you may expect of a search result:

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
            "description": "Request fulfilled in 100 miliseconds."
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
