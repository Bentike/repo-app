import {Link, Outlet } from "react-router-dom";

const Repo = () => {
    return(
        <Link>
            <div>
                <h1>Repo Details To be displayed Here</h1>
            </div>
            <Outlet/>
        </Link>
    )
}

export default Repo;