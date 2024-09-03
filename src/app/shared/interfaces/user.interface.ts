import { UserGenderE, UserStatusE, UserTypeE } from "../enums/user.enum";

export interface UserLoginI {

    field: string;
    password: string;
    type: UserTypeE;
}

export interface UserI {
    id: number,
    name: string,
    father_name: string,
    grandfather_name: string,
    family_branch_name: string,
    gender: UserGenderE,
    phone: number,
    email: string,
    password: string,
    password_confirmation: string,
    date_of_birth: string | Date,
    country_id: number,
    phone_code: number,
    country_code: string,
    active: UserStatusE,
    tribe: string,
    is_premium: boolean,


    image?: string,
    type?: UserTypeE,
    code?: any,
    verified_at?: string | Date,
    created_at?: string | Date,
    updated_at?: string | Date
}