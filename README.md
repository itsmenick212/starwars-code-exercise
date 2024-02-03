# Star Wars Coding Exercise
This repository holds the Star Wars code exercise we use for interviewing engineers.

## Installation
```bash
yarn
```

## Instructions

Using the [Star Wars API](https://swapi.dev/documentation), create an autocomplete component that allows a user to find and select a Planet from the Star Wars universe. You can use any library you’d like, and any styling methodology/library that suits you (css, scss, css-in-js, Styled Components, etc).

### Acceptance Criteria

* The autocomplete list should open upon focus and close upon blur.
* The component should allow the user to type in a partial or full planet name to query the Star Wars API and display the filtered results. 
* At least 2 letters are required before searching begins.
* The user must be able to select a planet from the list.
* As the user types, the request to fetch planets should be debounced.
* Unnecessary requests (ie: ones already made) should be cached.
* The user should be able to tell when planets are being fetched. 

**This exercise is more about seeing how YOU think and code.**  

🎉 Good luck!
