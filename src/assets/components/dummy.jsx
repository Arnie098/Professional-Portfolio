import myImage from "../profile.png";

export default function Dummy({setDummy}){


return(
    <>
     <h1>Arnie que Amaba</h1>
     <h2>BSIT 3C</h2>
      <div className="col-md-6 col-12 image-container">
                 <img src={myImage} 
                 className="img-fluid"
                 alt="Arnie Que" />
               </div>
        <hr></hr>       
       <p className="Bio">Bio: kung kaya ng iba ipagawa mo sa kanila</p>        

       <button className= "bg-success"onClick={() => setDummy(false)}>show full details</button>

        <h2>Skills</h2>    
        <ul>
            <li>
               <p>Java</p>
            </li>
             <li>
                 <p>MySql</p>
            </li>
             <li>
                 <p>Html</p>
            </li>
             <li>
                 <p>Css</p>
            </li>
        </ul>   
    
    </>
   
)


}