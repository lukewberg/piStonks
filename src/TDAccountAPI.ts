import * as axios from 'axios';
import {UserPrincipals} from './types/UserPrincipals'
import {TokenResponse} from './types/TokenResponse';

export class TDAccountAPI {
    authToken: TokenResponse;
    refreshToken: string;
    constructor(authToken: TokenResponse, refreshToken: string){
        this.authToken = authToken;
        this.refreshToken = refreshToken;
    }

    getUserPrincipals() {
        let options: axios.AxiosRequestConfig = {
            method: 'GET',
            headers: { 'content-type': 'application/x-www-form-urlencoded', 'Authorization' : `Bearer ${this.authToken.access_token}`},
            url: 'https://api.tdameritrade.com/v1/userprincipals',
        }
        axios.default.request(options).then((response: axios.AxiosResponse<UserPrincipals>)=> {
            console.log(response.data.userId);
        }).catch(error => {
            console.log(error);
        })

    }
}