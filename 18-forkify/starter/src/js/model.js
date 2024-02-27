export const state = {
    recipe: {},
    search: {
        query: '',
        results: []
    },
    bookmarks: []
}


import { API_URL } from './config'
import { getJSON } from './helper'
import {KEY} from './config'


export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}${id}`)
        const { recipe } = data.data
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            img: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
        }
        if (state.bookmarks.some(bookmark => bookmark.id === id))
            state.recipe.bookmarked = true
        else
            state.recipe.bookmarked = false
    }


    catch (err) {
        console.error(`${err} 🎇🎇🎇`)
        throw err;
    }
}

export const loadSearchResults = async (query) => {
    try {
        const data = await getJSON(`${API_URL}?search=${query}`)

        state.search.results =
            data.data.recipes.map((rec) => {
                return {
                    id: rec.id,
                    title: rec.title,
                    publisher: rec.publisher,
                    img: rec.image_url
                }
            })

    } catch (err) {
        console.error(`${err} 🎇🎇🎇`);
        throw err
    }
}

export const updateServings = function (newServings) {
    state.recipe.ingredients.forEach(ing => {
        ing.quantity = (ing.quantity * newServings) / state.recipe.servings
    });

    state.recipe.servings = newServings;
}

const persistBookmarks = function () {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
}

export const addBookmark = function (recipe) {
    state.bookmarks.push(recipe)

    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true
    persistBookmarks();
}

export const deleteBookmark = function (id) {
    const index = state.bookmarks.findIndex(el => el.id === id)
    state.bookmarks.splice(index, 1)
    if (id === state.recipe.id) state.recipe.bookmarked = false
    persistBookmarks();
}

export const uploadRecipe = async function (newRecipe) {
    try {
      const ingredients = Object.entries(newRecipe)
        .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
        .map(ing => {
          const ingArr = ing[1].split(',').map(el => el.trim());
          // const ingArr = ing[1].replaceAll(' ', '').split(',');
          if (ingArr.length !== 3)
            throw new Error(
              'Wrong ingredient fromat! Please use the correct format :)'
            );
  
          const [quantity, unit, description] = ingArr;
  
          return { quantity: quantity ? +quantity : null, unit, description };
        });
  
      const recipe = {
        title: newRecipe.title,
        source_url: newRecipe.sourceUrl,
        image_url: newRecipe.image,
        publisher: newRecipe.publisher,
        cooking_time: +newRecipe.cookingTime,
        servings: +newRecipe.servings,
        ingredients,
      };
  
      const data = await fetch(`${API_URL}?key=${KEY}`, recipe);
      state.recipe = createRecipeObject(data);
      addBookmark(state.recipe);
    } catch (err) {
      throw err;
    }
  };