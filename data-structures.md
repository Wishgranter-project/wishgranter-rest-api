FORMAT: 1A

# Data Structures API

This document describe common data structures used across the API.

# Data Structures

## Playable item (object)

Describes a playable item, either a music or an album.

Modeled after [playlist item object](https://github.com/wishgranter-project/descriptive-playlist-definition/blob/master/technical-specifications.md#the-playlist-item-object) of the Descriptive Playlist specification.

+ title: (string)

    The music's title.

+ artist: (string[])

    The performing artist(s).

+ featuring: (string[])

    A featured artist in this particular case.

+ cover: (string)

    The original artist if the music is being performed by someone else.

+ album: (string)

    The album's title.

+ soundtrack: (string[])

    An intellectual property featuring the music.

+ genre: (string[])

    Musical genre(s).

+ xxx[\w]{1,100}$: (primitive[])

    Custom properties, defined by the user or by the software managing the playlist.
    It must be prefixed by xxx, contain only letters and numbers and be no more than 100 characters long ( not counting the xxx prefix ).

---

## Playlist item (Playable item)

Describes a playlist item.

+ uuid: (string, required)

    Obligatory. An unique identifier.

---

## Page (object)

Describes a set of a list of arbitrary items.

+ meta: (object)

    Metadata about our set.

    + total: (number)

        The total number of items to be paginated.

    + itemsPerPage: (number)

        The maximum number of items per page.

    + pages: (number)

        How many pages there are.

    + page: (number)

        The current page.

    + count: (number)

        How many items there are in this current `page`, naturally equal or less than `itemsPerPage`.

+ data: (array)

    The actual set of items.
