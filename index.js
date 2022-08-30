const main = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(rest => rest.json())
        .then(data => displayMeails(data.meals))
}

const displayMeails = (meails) => {
    const container = document.getElementById('meails-contianer');
    container.innerText = '';
    meails.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        
        <div onclick="loadMeailsDetails(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">${meal.strInstructions}</p>
                                
                        </div>
                    </div>                    
        `;
        container.appendChild(mealDiv)
    })


}

const searcHFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    main(searchText);
    searchField.value = '';

}

const loadMeailsDetails = (getMeailId) => {
    const getUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${getMeailId}`
    fetch(getUrl)
        .then(res => res.json())
        .then(data => displayMeailsDetails(data.meals[0]))
}

const displayMeailsDetails = meal => {
    const detailsContainer = document.getElementById('detail-container');
    detailsContainer.innerHTML = '';
    const meailDiv = document.createElement('div');
    meailDiv.classList.add('card');
    meailDiv.innerHTML = `
    
    <div class="card" style="width: 18rem;">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions}</p>
            
    </div>
</div> 
`;
    detailsContainer.appendChild(meailDiv)

}


main('')