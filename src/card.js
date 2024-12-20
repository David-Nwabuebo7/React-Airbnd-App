import './App.css';
import star  from './images/star.png'

export default  function card(props){
   console.log(props);


   let badgeText;
   
   if (props.info.openSpots === 0) {
    badgeText ='SOLD OUT'
   }
    else  if(props.info.country === 'Online') {
            badgeText ='ONLINE'
   }



    return(
        <div className='card'>
        {/* this is codition rendering in react just like the if else statements */}
          { badgeText && <div className='card--badge'>{badgeText}</div>}
          
            <nav className='top'>
                <img src={props.info.img} className='card--image' />
            </nav>
            <div className='card--stats'>
                <img src={star}className='star'/>
                <span className="bold">{props.info.rate}</span>
                <span className='gray'>({props.info.count}).{props.info.country} </span>
               
            </div>
 
            <p className='title'>{props.info.title}</p>
            <p> <span className='bold'>From ${props.info.price}</span> / Person</p>

           
              
      

        </div>
        
   

    )
}














//map() takes a function as it parameter and renders a new array
// this how to use map()
const nums = [1,2,3,4,5]
const MapNums = nums.map(function(item) {
    return item * item
})
console.log(MapNums)



const names = ['alice','bob','charlie','danielle']


const mapNames = names.map(function(index){
 let cap = index.charAt(0)
 let capitalise = cap.toUpperCase() + index.slice(1) // or you can use index[0] as the first char of the index
 return capitalise
})
console.log(mapNames)




const pokemon= ['Bulbasaur','Charmander','Squirtle','daid']

const next = pokemon.map(function(name){
    let wrapped = `<p>${name}</p>`
    return wrapped;
})
console.log(next)

 
