import {FC} from 'react';
import {IUser} from "../../interfaces/user.interface";

interface IProps {
    user: IUser
}
const User: FC<IProps> = ({user}) => {
    const {id, name, username} = user;
    return (
        <div>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>username: {username}</p>
        </div>
    );
};

export {
    User
};