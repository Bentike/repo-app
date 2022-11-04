import './Styles/UserCard.css';

const UserCard = (props) => {
    console.log(props);
   const {url, full_name, name, id, default_branch} = props.data;
    return(
        <div className="card">
            <p className='username'>Name: {full_name}</p>
            <p className="cardContent">AppName: {name}</p>
            <p className="cardContent">AppUrl: {url}</p>
            <p className="cardContent">Branch: {default_branch}</p>
            <p className="cardContent">Id: {id}</p>
        </div>
    );
}

export default UserCard;