// import { useState } from "react"

// export default function SearchBox(){
//     const [cityName, setCityName] = useState('');

//     function handleKeyDown(event){
//         if (event.key === 'Enter'){
//             console.log('u hit it')
//         }
//     }

//     function handleChange(event){
//         setCityName(event.target.value)
//     }

//     return (
//         <div>
//         <input type="text" 
//         className="searchBox"
//          placeholder=" enter city name"
//          onKeyDown={handleKeyDown}
//          onChange={handleChange}
         
//          />
//          <h2>you typed: {cityName} </h2>
//         </div>
//     )

// }