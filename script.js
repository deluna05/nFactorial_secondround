document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const recipeList = document.getElementById("recipe-list");
    const recipeModal = document.getElementById("recipe-modal");
    const recipeTitle = document.getElementById("recipe-title");
    const recipeDetails = document.getElementById("recipe-details");
    const modalClose = document.querySelector(".close");

    // Функция для обработки события отправки формы поиска
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Отмена действия по умолчанию

        // Получение значения из поля ввода поиска
        const query = searchInput.value.trim();

        // Вызов функции поиска рецептов
        searchRecipes(query);
    });

    // Функция для поиска рецептов с использованием API
    function searchRecipes(query) {
        // Добавьте ваш код для выполнения запроса к API и обработки ответа здесь
    }

    // Функция для открытия модального окна с деталями рецепта
    function openRecipeModal(recipe) {
        recipeTitle.innerText = recipe.label;
        recipeDetails.innerHTML = `
            <p>Категория: ${recipe.category}</p>
            <p>Кухня: ${recipe.cuisine}</p>
            <p>Ингредиенты: ${recipe.ingredients.join(", ")}</p>
            <p><a href="${recipe.url}" target="_blank">Ссылка на рецепт</a></p>
        `;
        recipeModal.style.display = "block";
    }

    // Закрытие модального окна при нажатии на крестик
    modalClose.addEventListener("click", function() {
        recipeModal.style.display = "none";
    });

    // Закрытие модального окна при клике за его пределами
    window.addEventListener("click", function(event) {
        if (event.target == recipeModal) {
            recipeModal.style.display = "none";
        }
        
    // Функция для запроса рецептов по ключевому слову
async function searchRecipes() {
    const searchQuery = document.getElementById("searchInput").value;
    const response = await fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=4f0c2397ID&app_key=
    f22277bcead129c5d314c825909ce5ff	—
    `);
    const data = await response.json();
    displayRecipes(data.hits);
}

// Функция для отображения списка рецептов на главной странице
function displayRecipes(recipes) {
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";
    recipes.forEach(recipe => {
        const li = document.createElement("li");
        li.textContent = recipe.recipe.label;
        li.addEventListener("click", () => {
            displayRecipeDetails(recipe.recipe);
        });
        recipeList.appendChild(li);
    });
}

// Функция для отображения подробной информации о рецепте на странице детального просмотра
function displayRecipeDetails(recipe) {
    const recipeDetails = document.getElementById("recipeDetails");
    recipeDetails.innerHTML = `
        <h2>${recipe.label}</h2>
        <img src="${recipe.image}" alt="${recipe.label}">
        <p>Ингредиенты:</p>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient.text}</li>`).join("")}
        </ul>
        <p><a href="${recipe.url}" target="_blank">Ссылка на рецепт</a></p>
    `;
}

    });
});
