const Rickandmarty = ({item}) => {
    return (
        <div>
            <div>My name is {item.name}</div>
            <div>My status is {item.status}</div>
            <div>My species is {item.species}</div>
            <div>My gender is {item.gender}</div>
            <img src={item.image} alt={item.name}/>
            <hr/>
        </div>
    );
};

export default Rickandmarty;