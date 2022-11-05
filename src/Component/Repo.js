import {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet-async';
import './Styles/Repo.css';

const Repo = () => {
    
   // gets repoName from local storage
   const getRepoName = () => {
    return JSON.parse(localStorage.getItem('repoName'));
  }

  const [repo, setRepo] = useState([]);
  const [owner, setOwner] = useState([]);
    
    useEffect(() => {
        fetch(`https://api.github.com/repos/Bentike/${getRepoName()}`)
             .then(res => res.json())
             .then(data => {
                setRepo(data);
                setOwner(data.owner);
            });
    }, []);

    const {created_at, default_branch, fullname, language, name, visibility} = repo;
    const {avatar_url, login, id, url} = owner;
    
    return(
            <div className='card'>
                <Helmet>
                   <title>Github Repositories</title>
                   <meta name="description" content="How to fetch the list of all existing repositories of a registered github user from github API"/>
                   <link rel="canonical" href="/" />  
                </Helmet>  
                <h1>Repo Details To be displayed Here</h1>
                <p>{created_at}</p>
                <p>{default_branch}</p>
                <p>{fullname}</p>
                <p>{language}</p>
                <p>{name}</p>
                <p>{visibility}</p>
                <p>{login}</p>
                <p>{id}</p>
                <p>{url}</p>
                <img src={avatar_url} alt='owner'/>
            </div>
        );
}

export default Repo;