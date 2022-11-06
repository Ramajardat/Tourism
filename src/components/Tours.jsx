import {React} from 'react';
import { Link } from "react-router-dom";
import Tour from './Tour';
  
function Tours (data){
    
const cities =data.data;

    return (
        <>
        
        <h3 className='m-5'> Tourism In Jordan</h3>
        <div className=" d-flex flex-wrap text-center justify-content-center Tour" >
           
  {cities.map((city,i) => (
   
         

<Tour city={city}/>
    
    
  )
  
  )}
</div>
</>

    );
 


}
  
export default Tours;