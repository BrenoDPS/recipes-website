import axios from 'axios';
import { finishData } from '@/components/Receita.vue';

export const getRecipeFromUrl = function() {
  const nameCategory = getCategoryFromUrl();
  const pathArray = window.location.pathname.split('/');
  const categoryIndex = pathArray.indexOf(nameCategory);
  const nameRecipe = pathArray[categoryIndex + 1];
  return decodeURIComponent(nameRecipe);
};

export const getCategoryFromUrl = function() {
  const pathArray = window.location.pathname.split('/');
  const categoryIndex = pathArray.indexOf('receita');
  return pathArray[categoryIndex + 1];
};

export const fetchCategories = async function() {
  try {
    const response = await axios.get('http://localhost:8000/api/v1/categories/');
    const recipes = JSON.parse(JSON.stringify(response.data));
    getRecipeFromUrl();
    finishData(); // Assuming this function is defined elsewhere
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};
