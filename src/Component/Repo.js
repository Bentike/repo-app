import {useState, useEffect} from 'react';
import './Styles/Repo.css';

const Repo = ({name}) => {
    
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/repos/Bentike/${name}")
             .then(res => res.json())
             .then(data => console.log(data));
    })
    
    return(
            <div className='repo'>
                <h1>Repo Details To be displayed Here</h1>
            </div>
    )
}

export default Repo;