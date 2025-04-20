# PE02 – Movie List

## Input
The user is presented with a list of movies and a dropdown menu to select a genre. Clicking a movie triggers an alert. The genre list is dynamically generated from the data.

## Process
The application is built using React and utilizes functional components and the `useState` hook. The data is filtered based on the selected genre. The `onChange` handler on the dropdown updates the `selectedGenre` state, triggering a re-render to show the filtered list. Clicking on a movie card uses the `onClick` event to show an alert with the movie title.

## Output
The application displays a styled list of movie cards. When filtered, only movies of the selected genre are shown. When a movie is clicked, the user receives an alert showing the movie title. The final interface is interactive, responsive, and visually organized.
