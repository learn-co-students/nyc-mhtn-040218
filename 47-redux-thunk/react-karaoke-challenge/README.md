README
======

## React Mock Code Challenge

### Instructions

It's Karaoke Night at Flatiron School, but oh no! The karaoke machine is broken!!

Luckily, through the power of React and the [flux](https://github.com/facebook/flux) capacitor, your fellow cohort members were able to travel back in time to give you the code to a replacement karaoke app! Unluckily, time travel had adverse effects on the codebase and much of it was damaged. The component hierarchy survived as did the karaoke playback engine in `Lyrics.js`.

Your future cohort members had to return for fear of running into their present selves. However, before leaving, they left you with a few things to help you on your way:

- Example data for the future API you will use. This is in `data/songs.js`.
- This helpful `README.md` with all the deliverables that need to be completed.

It's now up to you to fix the rest of the codebase before the start of Karaoke Night!

### Setup

- Clone this project and `cd` into it.
- Run `npm install` to install your dependencies.
- Run `npm start` and the project will be running on `localhost:3000`.

### Deliverables

```
URL for database: `http://localhost:4000`
Routes:
`GET`: `/songs`
`PATCH`: `/songs/:id`
```

This is your end goal:

Image Goes Here

- [ ] Display a list of songs with their artist in the left sidebar.
- [ ] The list of songs will come from `URL TBD`.
- [ ] Clicking the `Play` button, located next to each song, will load the song in the right panel.
- [ ] The right panel will display the song's title and lyrics.
- [ ] The song's lyrics should be passed into the `Lyrics` component. You should not be editing this file.
- [ ] When typing into the input, the list of songs should filter by song name.

**BONUS**

- [ ] The song list should display a new column with the number of times a song was played.
- [ ] This data, number of plays, will come from the API. Every time a song is played, a `PATCH` should be sent to the database to increment this value for that song.

### Suggested Workflow

TODO

### Criteria

We’ll be evaluating your code based on the following criteria:

- **React Components:** Does the app reasonably separate responsibilities into components and a have a component hierarchy?
- **Props:** Does the app have at least one presentational component that receives props? Does the app pass props down from a higher-level component to a lower one? Does the app make use of passing a functional prop?
- **State:** Does the app have a filter input that responds to changes and calls `this.setState`?
- **Lifecycle Methods & API:** Does the app make a fetch request to the API and return data? Does it set the state of the component within the app with that data within a lifecycle method?
- **Feature:** Does the app filter the list of songs?
- Does the app follow best practices regarding state and component composition?

Good luck!
