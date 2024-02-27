import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as model from './model.js'
import recipeView from './Views/recipeView.js';
import searchView from './Views/searchView.js';
import resultsView from './Views/resultView.js';
import bookMarkView from './Views/bookMarkView.js';
import addRecipeView from './Views/addRecipieView.js';
import { MODAL_CLOSE_SEC} from './config'

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1)



    if (!id) recipeView.renderSpinner() // load spinner

    bookMarkView.update(model.state.bookmarks)
    await model.loadRecipe(id) //load recipe

    recipeView.render(model.state.recipe) //view recipe


  } catch (err) {
    // recipeView.generateError()
  }
}

const controlSearchResults = async () => {
  try {

    const query = searchView.getQuery();

    if (!query) resultsView.renderSpinner();;

    await model.loadSearchResults(query)


    resultsView.render(model.state.search.results);
  }
  catch (err) {
    resultsView.generateError()
  }
}

const controlServings = function (newServings) {
  model.updateServings(newServings)
  console.log(model.state.recipe);
  recipeView.update(model.state.recipe)
}

const controlAddBookMark = function () {

  if (!model.state.recipe.bookmarked)
    model.addBookmark(model.state.recipe);

  else model.deleteBookmark(model.state.recipe.id);

  recipeView.update(model.state.recipe)

  bookMarkView.render(model.state.bookmarks)
}
const controlAddRecipe = async function (newRecipe) {
  try {

    addRecipeView.renderSpinner();


    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);


    recipeView.render(model.state.recipe);


    addRecipeView.renderMessage();


    bookMarkView.render(model.state.bookmarks);


    window.history.pushState(null, '', `#${model.state.recipe.id}`);


    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('💥', err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  recipeView.addHandlerRender(showRecipe)
  recipeView.addHandlerUpdateServings(controlServings)
  recipeView.addBookmarkHandler(controlAddBookMark)
  searchView.addHandler(controlSearchResults)
  addRecipeView.addHandlerUpload(controlAddRecipe)
}
init();


