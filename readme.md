/*
1. assigment: Add white bar under the header and animate the copu "Carnival Choose Fun" to cross the screen as shown below.
EXPLANATION:
-I added <div> under header with some stylings and h2 tag inside of that div and created an CSS animation frame.
*/

APPLY THIS CODE TO "ELEMENTS":

 <header>
    /* 
    HEADER CONTENT
    */
    </header>


    <div style="background: white;
     padding: 0.5em 0;">
        <h2 >
        <style>
            h2{
              font-size: 2rem;
        width: 350px;
        position: relative;
        font-family: 'TempoStd';
        animation-name: textmove;
        animation-duration: 20s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;  
            }
            @keyframes textmove {
                0% {left: 100vw}
                100% {left: -350px}
            }
        </style>
        <span style=" margin-right: 1em;">Carnival</span> Choose Fun!</h2>
    </div>

/*
2. assigment: Rearange the destination tiles to be in Alphabetic order.

*/

EXPLANATION: 
-I solved this with simple DOM manipulation:

1. calling parent of all tiles with querySelector and class name

2. creating function which sorts all tiles aphabetically by aria-label of <a> tag(it could have been done with targeting innerText, or outerText)

3. Then I crated function which: 
   - turns Node list into array so I could apply array methods (HOF)
   - sorts all tiles inside of paretn element with HOF sort(), 
   - replaces existing order with just created order 


APPLY FOLLOWING CODE TO CONSOLE:

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
*/

EXPLANATION:
-I fetched data and targeted only maxPrice from results, and stored it in the variable called maxPrice
Then, I created new element named price which i appended to the h2 in the tile.



APPLY THIS CODE TO THE CONSOLE:
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

