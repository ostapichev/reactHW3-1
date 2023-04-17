import React from 'react';
import {IUser} from "../../interfaces/user.interface";
import {SubmitHandler, useForm} from "react-hook-form";
import {userService} from "../../services/user.service";

const UserForm = () => {
    const {reset, register, handleSubmit} = useForm<IUser>();
    const save: SubmitHandler<IUser> = async (user) => {
        await userService.create(user);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'id'} {...register('id')}/>
            <input type='text' placeholder={'name'} {...register('name')}/>
            <input type='text' placeholder={'username'} {...register('username')}/>
            <button>Create</button>
        </form>
    );
};

export default UserForm;