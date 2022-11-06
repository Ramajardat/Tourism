import React from 'react';
  
function Tour (data){
    const city = data.city;
    return (
    <>
    <div className='m-5  card bg-light border border-success rounded-2 ' style={{ width:"25rem" }} >
        <div style={{ width:"25rem " , height:"300px" }} >
            <img src={city.image} style={{ width:"100%" , height:"100%" }} alt="" width="700px"/>
            </div>  
            <p className="Tname p-3" style={{color:"green"}} >{city.name}</p>
            {/* <p className="Tname p-3" style={{color:"green"}} >{city.info}</p> */}

    </div>
    </>
    );
}
  
export default Tour;