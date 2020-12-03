const textInput = document.getElementById("textInput");

const listAddBtn = document.getElementById("textAdd");

const newItem = document.createElement("li");

const list =document.getElementById("list")



textAdd.addEventListener("click", (event) => {
    const newItem = document.createElement("li")
    const count = (list.children.length+1)
    newItem.textContent = count + document.getElementById("textInput").value
    
    // const count =document.getElementsByTagName("li").length;
    // count.textContent =  (list.children.length) + document.getElementById("textInput").value
    
    list.append(newItem)
    // newItem.appendchild(count)
      // 削除ボタン
    const removeBtn = document.createElement("button") 
    removeBtn.innerText += " 削除";
    newItem.appendChild(removeBtn)
    
    removeBtn.addEventListener("click", (event) => {
        newItem.remove()
        for (var i = 0; i < list.children.length; i++){
            var remItem = document.querySelector("ul")
            console.log(remItem)
            const count2 = (list.children.length+1)
            newItem.textContent = count2 + document.getElementById("textInput").value
        }
    })
});
