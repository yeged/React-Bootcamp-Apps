


var items = document.querySelectorAll("#list li"),
    spans = document.querySelectorAll("span.close"),
    tab = [], index;
for(var i = 0; i < items.length; i++){
    tab.push(items[i].innerHTML);
}

finished_item()
remove_item()

function remove_item(){
    items = document.querySelectorAll("#list li")
    spans = document.querySelectorAll("span.close")
    for(var i = 0; i < items.length; i++)
    {
    spans[i].onclick = function(){
        index = tab.indexOf(this.parentElement.innerHTML);
        tab.splice(index,1)
        items[index].remove()
        remove_item()
    };
}
}

function finished_item(){
    items = document.querySelectorAll("#list li")
    for(var i = 0; i < items.length; i++)
    {
    items[i].onclick = function(){
        index = tab.indexOf(this.innerHTML);
        if(!items[index].classList.contains("checked")){
            items[index].classList.add("checked")
            item[index].unbind("hover")
        }else{
            items[index].classList.remove("checked")
        }
    };
}
}





let add = document.querySelector("#liveToastBtn")


add.addEventListener("click", function(){
    let task = document.querySelector("#task")
    var myLi = document.createElement("li")
    var span = document.createElement("span");
    span.innerHTML = "x";
    span.setAttribute("class", "close")
    
    
    if(task.value){
        myLi.appendChild(span)
        myLi.innerHTML = `${task.value} ${myLi.innerHTML}`
        document.querySelector("#list").appendChild(myLi)
        localStorage.setItem("element", task.value)
        task.value = ""
        tab.push(myLi.innerHTML);
        remove_item()
        finished_item()
        $('#liveToast').toast('show')
    }else{
        $('#liveToasts').toast('show')
    }
})
