const searchBox = document.querySelector('.searchBox')
const searchBtn = document.querySelector('.searchBtn')
const recipe_container = document.querySelector('.recipe-container')

const fetchRecipes =  async (query) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const response = await data.json()
    response.meals.forEach(meal => {
        // console.log(meal)
        const recipeDiv = document.createElement('div')
        recipeDiv.classList.add('recipe')
        recipeDiv.innerHTML=`
            <img src="${meal.strMealThumb}">
            <h3>${meal.strMeal}</h3>
            <p>${meal.strArea}</p>
            <p>${meal.strCategory}</p>
        `
         recipe_container.appendChild(recipeDiv)
    })
    // console.log(response)
   
}

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    // console.log("ButtonClicked!!");
    const searchInput = searchBox.value.trim()
    fetchRecipes(searchInput)
    
})