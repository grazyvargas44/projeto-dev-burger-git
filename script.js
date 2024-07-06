const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapDiscount = document.querySelector('.map-discount')
const sumAllRedunce = document.querySelector('.sum-all')
const sumAllDiscount = document.querySelector('.sum-all-discount')
const filterVegan = document.querySelector('.filter-vegan')

function formatValue(value){
   return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
        value)
}

function showAll(productArray) {
    let myLi = ''

    productArray.forEach(product => {
        myLi += `
          <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">R$ ${formatValue(product.price)}</p>
         </li>
        `
    })

    list.innerHTML = myLi
}

function mapDiscount() {
    const newPrices = menuOptions.map((product) => ({
        ...product, //Spread Operator
        price: product.price * 0.9,
    }))

    showAll(newPrices)
}

function sumAll(){
    
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
       <li>
            <p>O valor total é de <br>R$ ${formatValue(totalValue)}</p>
      </li>
    `
}

function sumDiscount(){
    
    const totalValueDiscount = menuOptions.reduce((acc, curr) => acc + curr.price * 0.9, 0)

    list.innerHTML = `
       <li>
            <p>O valor total é de <br>R$ ${formatValue(totalValueDiscount)}</p>
      </li>
    `
}

function filterVeganTrue(){
    const newOptions = menuOptions.filter(product =>  product.vegan === true)

    showAll(newOptions)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapDiscount.addEventListener('click', mapDiscount)
sumAllRedunce.addEventListener('click', sumAll)
sumAllDiscount.addEventListener('click', sumDiscount)
filterVegan.addEventListener('click', filterVeganTrue)

