import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import './Styles/Home.css';

const Home = () => {
    return(
         <>
           <Helmet>
               <title>Github Repositories</title>
               <meta name="description" content="How to fetch the list of all existing repositories of a registered github user from github API"/>
               <link rel="canonical" href="/"/>
           </Helmet>
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