import {$host} from "./index";
import jwtDecode from "jwt-decode";


export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password});
    if (data.nonAuth) {
        return data;
    } else {
        return jwtDecode(data.token);
    }


}
