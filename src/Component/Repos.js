import {useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Pagination from "./Pagination";
import UserCard from "./UserCard";
import './Styles/Users.css';
import Spinner from "./Spinner";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/Bentike/repos")
          .then(response => response.json())
          .then(data => {
             setUsers(data);
          });
        }, []);

    
    return(
        <div className="users">
        <Helmet>
            <title>Github Repositories</title>
            <meta name="description" content="How to fetch the list of all existing repositories of a registered github user from github API"/>
            <meta name='keywords' content='Html, Css, JavaScript, React, React-Router, Github, Pagination, Error Boundary, Repositories, API'/>
            <meta name="author" content="Ajadi Yusuf"/>
            <link rel="canonical" href="/repos" />  
        </Helmet>          
        {users.length > 0 ? (
          <div>
            <Pagination
              data={users}
              RenderComponent={UserCard}
              title="My Repositories"
              pageLimit={5}
              dataLimit={6}
            />
          </div>
        ) : (
         <Spinner/>
        )}
      </div>
    )
}

export default Users;