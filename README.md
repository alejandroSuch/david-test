## Folders problem

Given a `Folder` data structure with 2 properties:
- `name`, the type of which is `string`
- `folder`, the type of which is `Folder` or `null`

and an example folder hierarchy that looks like this:

```
Users
    David
        Pictures
            Hogueras 2022
            Viaje a Sierra Nevada
        Movies
Windows
    System
```

Write a Typescript function that takes in a `Folder` as a parameter and returns the full path of the given folder, and make sure tests go green.

ex: if `Pictures` folder is passed in the function should return `Users/David/Pictures`.

Please check the tests for more examples.

> **Note:** tests assume there's a `newFolder` function to build folders. Feel free to change it if you're more comfortable with a different approach.

> **Another note:** tests assume your function is named `foldersFn`. Feel free to change it, too.
