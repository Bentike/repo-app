import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Styles/UserCard.css';

const UserCard = (props) => {
   const {url, full_name, name, id, default_branch} = props.data;
   
   const getRepoName = () => {
    return JSON.parse(localStorage.getItem('repoName'));
  }
  
   const [repoName, setRepoName] = useState(() => getRepoName());

    useEffect(() => {
       localStorage.setItem('repoName', JSON.stringify(repoName));
    }, [repoName]);

   const getProp = (prop) => {
      localStorage.setItem('repoName', JSON.stringify(prop));
   }


    return(
        <div className="card" onClick={() => getProp(name)}>
             <Link to='/repo'>
                <p><span className='title'>Name:</span> {full_name}</p>
                <p><span className='title'>AppName:</span> {name}</p>
                <p><span className='title'>AppUrl:</span> {url}</p>
                <p><span className='title'>Branch:</span> {default_branch}</p>
                <p><span className='title'>Id:</span> {id}</p>
             </Link>
        </div>
    );
}

export default UserCard;