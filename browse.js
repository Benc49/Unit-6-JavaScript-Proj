//Local File API
recipeContent = document.getElementById("content");

function populateRecipe() {
  fetch("recipes.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        recipeDiv = document.createElement("div");
        recipeTitle = document.createElement("h1");
        // recipePic = document.createElement("img");
        recipeDesc = document.createElement("p");
        recipeIng = document.createElement("p");

        recipeContent.appendChild(recipeDiv);
        recipeDiv.appendChild(recipeTitle);
        // recipePic.appendChild(recipePic);
        recipeDiv.appendChild(recipeDesc);
        recipeDiv.appendChild(recipeIng);

        recipeTitle.innerHTML = data[i].title;
        // recipePic.innerHTML = data[i].image;
        recipeDesc.innerHTML = data[i].desc;
        recipeIng.innerHTML = data[i].ing;
      }
    });
}

const allRecipes = async () => {
  const response = await fetch("recipes.json");
  const data = await response.json();
  return data;
};

allRecipes().then((data) => populateRecipe(data));

//Star Rate
const ratingStars = [...document.getElementsByClassName("rating__star")];
const ratingResult = document.querySelector(".rating__result");

printRatingResult(ratingResult);

function executeRating(stars, result) {
  const starClassActive = "rating__star fas fa-star";
  const starClassUnactive = "rating__star far fa-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className.indexOf(starClassUnactive) !== -1) {
        printRatingResult(result, i + 1);
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        printRatingResult(result, i);
        for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
      }
    };
  });
}

function printRatingResult(result, num = 0) {
  result.textContent = `${num}/5`;
}

executeRating(ratingStars, ratingResult);
