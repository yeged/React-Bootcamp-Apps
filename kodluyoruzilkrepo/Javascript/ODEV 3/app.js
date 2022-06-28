
const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];
  
  let sectionCenter = document.querySelector(".section-center");
  let buttons = document.querySelector(".btn-container")

  let All = document.createElement("button")
  All.classList.add("btn", "btn-outline-dark", "btn-item")
  All.setAttribute("data-id", "All")
  All.innerHTML = "All"
  buttons.appendChild(All)

  let Korea = document.createElement("button")
  Korea.classList.add("btn", "btn-outline-dark", "btn-item")
  Korea.setAttribute("data-id", "Korea")
  Korea.innerHTML = "Korea"
  buttons.appendChild(Korea)

  let Japan = document.createElement("button")
  Japan.classList.add("btn", "btn-outline-dark", "btn-item")
  Japan.setAttribute("data-id", "Japan")
  Japan.innerHTML = "Japan"
  buttons.appendChild(Japan)

  let China = document.createElement("button")
  China.classList.add("btn", "btn-outline-dark", "btn-item")
  China.setAttribute("data-id", "China")
  China.innerHTML = "China"
  buttons.appendChild(China)

  let showMenu = []

  All.addEventListener("click", function(){

    while(sectionCenter.lastElementChild){
      sectionCenter.removeChild(sectionCenter.lastElementChild)
    }

    showMenu = menu.map((value) => (
      createMenu(value.img, value.desc, value.title, value.price)
   ))

  })

  Korea.addEventListener("click", function(){
    showMenu = menu.filter(value => (
      value.category === "Korea"
    ))

    while(sectionCenter.lastElementChild){
      sectionCenter.removeChild(sectionCenter.lastElementChild)
    }

    showMenu.map((value) => (
      createMenu(value.img, value.desc, value.title, value.price)
   ))

  })

  Japan.addEventListener("click", function(){
    showMenu = menu.filter(value => (
      value.category === "Japan"
    ))

    while(sectionCenter.lastElementChild){
      sectionCenter.removeChild(sectionCenter.lastElementChild)
    }

    showMenu.map((value) => (
      createMenu(value.img, value.desc, value.title, value.price)
   ))

  })

  China.addEventListener("click", function(){
    showMenu = menu.filter(value => (
      value.category === "China"
    ))

    while(sectionCenter.lastElementChild){
      sectionCenter.removeChild(sectionCenter.lastElementChild)
    }

    showMenu.map((value) => (
      createMenu(value.img, value.desc, value.title, value.price)
   ))

  })


 
 function createMenu(image, desc, title, price){

  let firstDiv = document.createElement("div")
  firstDiv.classList.add("menu-items", "col-lg-6", "col-sm-12")
  sectionCenter.appendChild(firstDiv)

  let img = document.createElement("img")
  img.classList.add("photo")
  img.src = image
  firstDiv.appendChild(img)

  let secondDiv = document.createElement("div")
  secondDiv.classList.add("menu-info")
  firstDiv.appendChild(secondDiv)

  let thirdDiv = document.createElement("div")
  thirdDiv.classList.add("menu-title")
  secondDiv.appendChild(thirdDiv)

  let menuTitle = document.createElement("h4")
  menuTitle.innerHTML = title
  thirdDiv.appendChild(menuTitle)
  
  let menuPrice = document.createElement("h4")
  menuPrice.innerHTML = price
  thirdDiv.appendChild(menuPrice)
  

  let fourthDiv = document.createElement("div")
  fourthDiv.classList.add("menu-text")
  fourthDiv.innerHTML = desc
  secondDiv.appendChild(fourthDiv)

 };

 showMenu = menu.map((value) => (
    createMenu(value.img, value.desc, value.title, value.price)
 ))






  