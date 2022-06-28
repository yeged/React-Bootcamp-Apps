import 'regenerator-runtime/runtime'
import Fuse from 'fuse.js'

let card = document.getElementById("card-container")
let name = document.getElementById("name")
let loader = document.getElementById("loading")
let searchInput = document.getElementById("searchInput")

let foods = [];

const initApp = async () => {
       
    // Promise-Then User
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then(json => name.innerText = `Merhaba, ${json.name}`)
    .catch(() => {
        console.log("Error Occured!")
    })

    // Async Await Todos
    try{
        // Loading Display
        loader.classList.add("display");

        // Fetch Food Data
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const result = await response.json()

        // Fetch Local Storage Data
        const localData = JSON.parse(localStorage.getItem('favs'))
        console.log("Local Data -> ", localData)

        // Clone data to foods array and add isFav bool
        localData === null ? 
        result.map( value => {
            foods = [...foods, {...value, isFav: false}]
        }) : foods = [...localData]

        
    }catch(error){
        console.log(error)
    }

    // Fuse js Search
    const options = {
        includeScore: true,
    // Search in `title` array
        keys: ['title']
    }
    
    searchInput.addEventListener("input", debounce((event) => {
        searchInput.value = event.target.value

        const fuse = new Fuse(foods, options)
        let search = fuse.search(searchInput.value)
        let searchArray = search.map(search => search.item )

        card.innerHTML = ""
        !searchInput.value || !searchInput.value.trim() ? foodCards(foods) : foodCards(searchArray) // !searchInput.value.replace(/\s/g, '').length
        console.log("Result -> ",searchArray)
    },1000))

    foodCards(foods)
}
    // Create Cards
    function foodCards(food){
            // Create Element ( Food Cards )
            food.map( ({title, id}) => {
                // Create {div, p}
                let columnDiv = document.createElement("div")
                let cardDiv = document.createElement("div")
                let foodName = document.createElement("h6")
                let favButton = document.createElement("button")

                let index = foods.findIndex(index => index.id === id)
                let isFav = foods[index].isFav 

                // Bootstrap grid, card & styling
                columnDiv.id = id
                columnDiv.classList.add("col-3")
                columnDiv.classList.add("mb-3")
                cardDiv.classList.add("card");
                cardDiv.classList.add("text-center")
                cardDiv.classList.add("d-flex")
                cardDiv.classList.add("justify-content-center")
                cardDiv.classList.add("align-items-center")
                cardDiv.style = "height: 120px; background-color: #FFE3B3"
                foodName.classList.add("card-title")
                foodName.classList.add("mt-3")
                favButton.classList.add("btn") 
                favButton.classList.add("border-0")
                favButton.style = "width: 200px"

                // Favorilere Ekle Button Styling 
                function checkIsFav(isFav){ isFav ?
                    (favButton.innerText = "Favorilerden Çıkar.",
                    favButton.classList.remove("btn-dark"),
                    favButton.classList.add("btn-danger"))
                :   
                    (favButton.innerText = "Favorilere Ekle",
                    favButton.classList.add("btn-dark"),
                    favButton.classList.remove("btn-danger"))
                }

                // Add Favorites and Local Storage
                const addFav = () => {
                    cardDiv.focus()
                    foods[index].isFav  = !foods[index].isFav
                    isFav = foods[index].isFav
                    checkIsFav(isFav)
                    localStorage.setItem('favs', JSON.stringify(foods))
                }

                //Add Favorites with F key
                const addFavWithKey = (event) => {
                    if(event.key === "f"){
                        addFav()
                    }
                }

                // Food Name
                foodName.innerText = title
                
                // Select Food Div
                cardDiv.tabIndex = id
                cardDiv.addEventListener("click", () => {
                    document.activeElement.addEventListener("keyup", addFavWithKey);
                })

                // Favorilere Ekle
                checkIsFav(isFav)
                favButton.addEventListener("click", addFav)

                // Append root div
                card.appendChild(columnDiv)
                columnDiv.appendChild(cardDiv)
                cardDiv.appendChild(foodName)
                cardDiv.appendChild(favButton)    
            })
            // Remove Loader
            loader.classList.remove("display");       
    }
       
    // For Better Search Performance
    const debounce = (func, delay) => {
        let debounceTimer
        return function() {
            const context = this
            const args = arguments
            clearTimeout(debounceTimer)
            debounceTimer = setTimeout(() => func.apply(context, args), delay)
            console.log("context", context) // input
            console.log("args", args) // input Event
        }
    }

    initApp();
