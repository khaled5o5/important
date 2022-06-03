const itemsContainer = document.querySelector('.itemsContainer')
const getItemsBtn = document.getElementById('getItemsBtn') 
const nameInput = document.getElementById("nameInput")
const brandInput = document.getElementById("brandInput")
const priceInput = document.getElementById("priceInput")
const quantityInput = document.getElementById("quantityInput")
const addItem = document.getElementById("addItem")

const getInputValues = function(){
    const name = nameInput.value 
    const brand = brandInput.value 
    const price = priceInput.value
    const quantity = quantityInput.value
    return(name, brand, price, quantity) 
}
const addIemToDB = async function(){
    const item = getInputValues() 
    console.log(item);
    const dbRes = await axios.post("/item/addNewItem", item)
    getItemsFromDB() 
} 

addItem.addEventListener('click',addIemToDB) 

const renderItems = function (items){
    itemsContainer.innerHTML = ""
    items.forEach((item) => {
        const {name, brand, price, quantity} = item 
    const itemContainer = `
    <div class="item">
    <h2> name:${name} </h2>
    <h3> brand:${brand} </h3>
    <h3> price:${price} </h3>
    <h3> quantity:${quantity} </h3>  
    </div>`
    itemsContainer.innerHTML += itemContainer
    })
} 
  
const getItemsFromDB = async function () {
    const items = await axios.get('/item/getItem')
    renderItems(items.data) 

} 
getItemsBtn.addEventListener("click", getItemsFromDB)
getItemsFromDB()