import { Link } from "react-router-dom";

const style = {
    textAlign: "center"
 }
 
 const NotFound = () => {
     return(
         <div style={style}>
           <h1>Page Not Found.</h1>
           <Link to='/'>Go Back Home</Link>
         </div>
     )
 }
 
 export default NotFound;