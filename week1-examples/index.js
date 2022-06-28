
const productList = [
  { id: 1, name: 'Kola', price: 4000000000, img: 'https://i.sozcu.com.tr/wp-content/uploads/2016/01/19/diyet-kola.jpg' },
  { id: 2, name: 'Iskender', price: 39000000000, img: 'https://i.lezzet.com.tr/images-xxlarge-recipe/ev-yapimi-iskender-33bd7089-fa36-4398-95f8-02c6463ea27c.jpg' },
  { id: 3, name: 'Yat', price: 450000000000, img: 'https://i.ytimg.com/vi/9BCZpcgsAb8/maxresdefault.jpg'  },
  { id: 4, name: 'Bahceli Ev', price: 9500000000000, img: 'https://www.neredekal.com/res/blog/1582812421_7.jpg' },
  { id: 5, name: 'Araba Fabrikası', price: 120000000000000, img: 'https://i.ytimg.com/vi/rfMkp55oTv0/maxresdefault.jpg' },
  { id: 6, name: 'Mısır Piramitleri', price: 7900050000000000, img: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/8712/production/_104187543_piramit.jpg' },
  { id: 7, name: 'Bilgisayar', price: 2254740990, img: 'https://cdn.cimri.io/image/1200x1200/dizstbilgisayarfiyatlar_301029036.jpg' }
  
  // ... Kendi örneklerinizi eklemeye çekinmeyin.
]

let money = Number.MAX_SAFE_INTEGER

let root = document.querySelector("#root")
let header = document.querySelector("h1");
header.innerHTML = `Kalan Para : ${money} TL `


// Kart Oluştur
function createCard(index){
  var img = document.createElement("img")
  var div = document.createElement('div');
  var name = document.createElement("h1")
  var button = document.createElement("button")
  var count = document.createElement("p")
  
  count.innerHTML = 0
  name.innerHTML = productList[index].name

  img.src = productList[index].img
  img.style.width = "400px";
  img.style.height = "300px";

  button.setAttribute("id", productList[index].id);
  button.title = Math.floor(money / productList[index].price)

  div.style.display = "inline-block";
  div.style.margin = "50px";
  button.innerText = "Ekle"
  

  root.appendChild(div)
  div.appendChild(name)
  div.appendChild(img)
  div.appendChild(count)
  div.appendChild(button)

}

for(let i = 0 ; i<productList.length; i++){
createCard(i)
}


// Ekle Butonu
var buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", function(){  
      let index = productList.findIndex(val => val.id == button.id )
      if(money < productList[index].price) {
        button.disabled = true 
      }else{
        money = money - productList[index].price
        header.innerHTML = `Kalan Para : ${money} TL `
        button.parentElement.children[2].innerHTML = +button.parentElement.children[2].innerHTML + 1 //count
        button.title = Math.floor(money / productList[index].price)  
      
        buttons.forEach(btn => {
          index = productList.findIndex(val => val.id == btn.id )
          btn.title = Math.floor(money / productList[index].price)      
          if(btn.title <= 0){ 
            btn.disabled = true
          }
        }) 
      }
    })
})



