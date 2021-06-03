/*
1. assigment: Add white bar under the header and animate the copu "Carnival Choose Fun" to cross the screen as shown below.
-I added <div> under header with class name "letter-movement" and h2 tag inside of that div. I applied white background on div, 
and some padding. Then I targeted that specific h2 in css with animation. 
*/

CODE:

.letters-movement{
    background: white;
    padding: 0.5em 0;
}
.letters-movement h2{
    font-size: 2rem;
    width: 350px;
    position: relative;
    font-family: 'TempoStd';
    animation-name: textmove;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.letters-movement h2 span{
    margin-right: 1em;

}

@keyframes textmove {
    0% {left: 100vw}
    100% {left: -350px}
}

/*
2. assigment: Rearange the destination tiles to be in Alphabetic order.

*/

I solved this with simple DOM manipulation:

1. calling parent of all tiles

2. creating function which sorts all tiles aphabetically by aria-label of <a> tag

3. EXPLAINING HOW FUNCITON WORKS:
   - turning Node list into array for easier manipulation a
   - applyinng high order function sort(), 
   - replacing existing order with new order 


CODE:
let el = document.querySelector('.tiles.ccl-tout-wrap')

function sortByName(){

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

sortByName()



/*
3. assigment: Add white bar under the header and animate the copu "Carnival Choose Fun" to cross the screen as shown below.
-I added <div> under header with class name "letter-movement" and h2 tag inside of that div. I applied white background on div, 
and some padding. Then I targeted that specific h2 in css with animation. 
*/

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

