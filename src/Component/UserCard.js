import {Link, Outlet} from 'react-router-dom';
import './Styles/UserCard.css';

const UserCard = (props) => {

   const {url, full_name, name, id, default_branch} = props.data;

    return(
        <Link to='/repo'>
            <div className="card">
                <p className='username'>Name: {full_name}</p>
                <p className="cardContent">AppName: {name}</p>
                <p className="cardContent">AppUrl: {url}</p>
                <p className="cardContent">Branch: {default_branch}</p>
                <p className="cardContent">Id: {id}</p>
            </div>
        </Link>
    );
}

export default UserCard;