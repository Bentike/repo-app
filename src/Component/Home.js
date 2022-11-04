import { Link, Outlet } from "react-router-dom";
import './Styles/Home.css';

const Home = () => {
    return(
         <>
             <nav>
                <Link to='/' className="link">Home</Link>
                <Link to='repos' className="link">Repositories</Link>
             </nav>
             <div className="home_div">
                 <h1 className="heading">Welcome to My List of Github Repositories.</h1>
                 <p className="homeText">Navigate to  
                      <Link to='repos'><span>repos</span></Link> 
                     to view my github repositories.
                 </p>
             </div>
             <Outlet/>
         </>
    )
}

export default Home;