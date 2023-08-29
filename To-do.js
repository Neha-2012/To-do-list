
const dom={
     inputTodo :document.getElementById("inputTo-do"),
     buttonValue :document.getElementById("btn"),
     items : document.getElementById("list-items"),
     SubmitButton :document.getElementById("Submit-btn"),
     clearItems : document.getElementById("clearItems")
}

dom.SubmitButton.addEventListener('click',()=> {
    const value = dom.inputTodo.value
    if(value.trim() == ''){
        return ;
    }
    dom.inputTodo.value=''

    const newItem ={
        id:data.id++,
        text:value
    }
    data.items.push(newItem)
    const newDomItem = createItem(newItem)
    dom.items.prepend(newDomItem)
     

   

})
 // data
const data ={
    items:[
    {
        id : 1,
        text : "I will go colruyt on Monday"

    },

    {
        id :2,
        text:"I will go temple on Sunday"
    },
    {
        id :3,
        text:"I will go to park on Wednesday"
    }
],
id:4,
}


//createItem
const createItem =(item)=>{
const container = document.createElement('div')
container.className = "itemContainer"
container.id = item.id

//itemText
const itemText=document.createElement('p')
itemText.className ="itemText"
itemText.innerText = item.text

//button Container

const buttonContainer = document.createElement('div')
buttonContainer.className ="btn-Container"

//edit Button

const editButton =document.createElement('button')
editButton.className ='edit-btn'
editButton.innerHTML = 'Edit';


        // add click event
editButton.addEventListener('click',()=>{
dom.SubmitButton.innerText="Edit"

})


//delete Button

const deleteButton =document.createElement('button')
deleteButton.className ='delete-btn'
deleteButton.innerText = 'Delete';


// add click event
deleteButton.addEventListener('click',(event)=>{
    const element = document.getElementById(container.id);
    element.remove();
    

})

buttonContainer.append(editButton,deleteButton)
container.append(itemText,buttonContainer)

return container;


}


//handler
const loadHandler =()=>{
    data.items.forEach(item=>{
        const container= createItem(item)
        dom.items.append(container)

    })
}
window.addEventListener('load',loadHandler)


const deleteitemsHandler =()=>{
    dom.items.innerHTML=''
    data.items=[];

}
    dom.clearItems.addEventListener('click',deleteitemsHandler);