import {axiosService, IRes} from "./axios.service";
import {urls} from "../configs/urls";
import {IUser} from "../interfaces/user.interface";

const userService = {
    getAll: (): IRes<IUser[]> => axiosService.get(urls.users),
    create: (user: IUser): IRes<IUser> => axiosService.post(urls.users, user)
}

export {
    userService
}