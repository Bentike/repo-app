import './Styles/UserCard.css';

const UserCard = (props) => {
    console.log(props);
   const {url, full_name, name, id, default_branch} = props.data;
    return(
        <div className="card">
            <p className='username'>{full_name}</p>
            <p className="cardContent">{name}</p>
            <p className="cardContent">{url}</p>
            <p className="cardContent">{default_branch}</p>
            <p className="cardContent">{id}</p>
        </div>
    );
}

export default UserCard;