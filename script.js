///////ASIGNMENT NO 2//////////

let el = document.querySelector('.tiles.ccl-tout-wrap')

function sortByName (){

let elemChildren = [...el.children]

.sort((a,b)=>{
  if(a.firstElementChild!==null){
    return a.firstElementChild.querySelector('a').ariaLabel.localeCompare(b.firstElementChild.querySelector('a').ariaLabel)
  }
}
)

let newDiv = el.replaceWith(...elemChildren)
return newDiv
}



window.onload = function() {
    sortByName();
  };
  



  //////ASIGNMENT NO 3///////


fetch('https://www.carnival.com/cruisesearch/api/search?numAdults=2&pageNumber=1&pageSize=8&dest=c',
{mode: "no-cors"}
)
.then(res=>res.json())
.then(data=>{
 console.log(String(data.results.maxPrice).charAt(0)+','+String(data.results.maxPrice).slice(1))
  let maxPrice = `$ ${String(data.results.maxPrice).charAt(0)+','+String(data.results.maxPrice).slice(1)}`

  let price = document.createElement('h2')
  price.innerHTML=`<br>${maxPrice}`



let carribeanTile = [...document.querySelectorAll('.ccl-tout.flip-tile.activated')]
.filter(tile=>tile.innerText.toUpperCase().includes('CARIBBEAN'))
.map(tile=>tile.querySelector('.ccl-tout-front').querySelector('.overlay').append(price));



  return carribeanTile
})

