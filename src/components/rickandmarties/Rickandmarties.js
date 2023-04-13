import Rickandmarty from "../rickandmarty/Rickandmarty";


const Rickandmarties = () => {
    const rickandmarties = [
        {
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        },
        {
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        },
        {
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        },
        {
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        },
        {
            name: "Abadango Cluster Princess",
            status: "Alive",
            species: "Alien",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        }
    ];

    return (
        <div>
            {
                rickandmarties.map(value => (<Rickandmarty item={value}/>))
            }
        </div>
    );
};

export default Rickandmarties;