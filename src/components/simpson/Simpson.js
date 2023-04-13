const Simpson = ({item}) => {
    return (
        <div>
            <div>My name is - {item.name}</div>
            <div>My surname is - {item.surname}</div>
            <div>Age - {item.age}</div>
            <img src={item.photo} alt={item.name}/>
            <div>{item.info}</div>
            <hr/>
        </div>
    )
}

export default Simpson;