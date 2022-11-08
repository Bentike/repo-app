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

    const {created_at, default_branch, full_name, language, name, visibility} = repo;
    const {avatar_url, login, id, url} = owner;
    
    return(
            <div className='repo'>
                <Helmet>
                   <title>Github Repositories</title>
                   <meta name="description" content="How to fetch the list of all existing repositories of a registered github user from github API"/>
                   <meta name='keywords' content='Html, Css, JavaScript, React, React-Router, Github, Pagination, Error Boundary, Repositories, API'/>
                   <meta name="author" content="Ajadi Yusuf"/>
                   <link rel="canonical" href="/repo" />  
                </Helmet>  
                <div>
                    <h1>More Details</h1>
                    <img src={avatar_url} alt='owner' className='avatar'/>
                    <p><span className='title'>Username: </span>{login}</p>
                    <p><span className='title'>Fullname: </span>{full_name}</p>
                    <p><span className='title'>Name: </span>{name}</p>
                    <p><span className='title'>Date Created: </span>{created_at}</p>
                    <p><span className='title'>Default branch: </span>{default_branch}</p>
                    <p><span className='title'>Language: </span>{language}</p>
                    <p><span className='title'>Visibility: </span>{visibility}</p>
                    <p><span className='title'>Repo Id: </span>{id}</p>
                    <p><span className='title'>Url: </span>{url}</p>
                </div> 
            </div>
        );
}

export default Repo;