import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import {User} from "../User/User";
import {IUser} from "../../interfaces/user.interface";
import UserForm from "../UserForm/UserForm";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    }, [])
    return (
        <div>
            <UserForm/>
            {users.map(user => <User user = {user} key = {user.id}/>)}
        </div>
    );
};

export default Users;