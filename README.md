# Giphy Search

## Live site

A live version of the site can be found at https://giphy-search.surge.sh/

## Project description
The site is a basic search toolbar, which allows users to search the Giphy.com api for GIF results (PG result only!).

Users can search one of three ways:

* Search term: by entering a term in the search bar and hitting enter; recent search results will show up using autofill (as they are saved in localStorage)
* Trending: returns 'trending' GIF
* Random: returns one random GIF

The user can select how many results show up per page by clicking one of the four 'results per page' options at the bottom of the screen (5, 10, 25, or 50).  Results are then displayed using Materialize's grid system.

If a user clicks on any of the GIFs, a modal pops up with the original full-sized GIF and a link to its Giphy.com page.

The site is fully optimized for mobile.

## Requirements met

* got API key from Giphy.com
* pushed to public repo
* used CSS framework (Materialize)
* hosted through surge.sh
* built using javascript framework (React.js)
* site has searchbar
* at least 3 different GIFs are rendered (5, 10, 25, or 50), except for when the user picks 'random' (then only 1 shows up).  NOTE: if the user enters a random string (e.g. 'asdflkjasdlfjads'), then it's possible that the Giphy API will return fewer than 3 results
* scales to mobile / tablet using Materialize's grid system

## Technologies used

The site is built using React.  It also uses the following packages:

* axios: to make API calls
* material-ui: for styling and several components, including the navbar, search (autocomplete), modal, and grid

## Deployment instructions

Simply clone the repo, `npm install` all the packages, and run `npm run start` in your command line to have the site run at http://localhost:3000/

Before making any new deployments to a production environment, make sure to run `npm run build` and then deploy from the `build` folder

## Folder Structure

After creation, your project should look like this:

```
giphy/
  README.md
  .gitignore
  node_modules/
  package.json
  package-lock.json
  public/
    index.html
    gif-file-format-symbol.png
  src/
    App.test.js
    index.js
    api/
      GiphyApi.js
    components/
      App.js
      AutoCompleteFilters.js
      CircularProgressGraphic.js
      Footer.js
      Grid.js
      Modal.js
      muiTheme.js
      Navbar.js
    stylesheets/
      App.css

```

## Next steps / outstanding issues

* if this were a real production site, I would need to save the Giphy API key in a secure location (i.e. so it isn't public)
* if this were a real production site, I would not save recent searched in localStorage, but instead in cache/cookie.  Or, I would institute user authentication and save the user's recent searches in a database
* the colors are a little off in the search bar (the right and left padding don't match the center)
* the modal is a little difficult to scroll in mobile
* I could abstract the fetchSearchResults, fetchTrendingResults, and fetchRandomResult into one function (or at least the part after the result is returned)
* I could stylize the site a little bit more (more background colors, different font sizes, etc.)
* I could allow the user to pick the ratings to return (i.e. not just G and PG) or the language to search
