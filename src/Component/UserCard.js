import {Link, Outlet} from 'react-router-dom';
import './Styles/UserCard.css';

const UserCard = (props) => {

   const {url, full_name, name, id, default_branch} = props.data;

    return(
        <div className="card">
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