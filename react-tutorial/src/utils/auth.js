import auth0 from 'auth0-js';
import history from './history';
import authcheck from './authcheck';

export default class Auth {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'dev-xqxytnsy.auth0.com',
            clientID: 'FNyHPT6XQzMgVgNDQ0xHw7wqd3DFGgZD',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            audience: 'https://dev-xqxytnsy.auth0.com/userinfo',
            scope: 'openid profile email',
            sso: false
        })
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
    }  

    userProfile = {}

    login = () => {
        console.log('logging in')
         this.auth0.authorize()    //redirect user to login page hosted on auth0 servers
    }

    handleAuth = () => {
        this.auth0.parseHash((err, authResult) => {
            if(authResult) {
                console.log(authResult)
                localStorage.setItem('access_token', authResult.accessToken)
                localStorage.setItem('id_token', authResult.idToken)
                console.log(localStorage.getItem('access_token'))
                
                let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()));
                localStorage.setItem('expiresAt', expiresAt)
                
                this.getProfile()
                setTimeout(() => {history.replace('/authcheck')}, 2000)
            }else{
                console.log(err)
            }
        })
    }

    getAccessToken = () => {
        if(localStorage.getItem('access_token')) {
            const accessToken = localStorage.getItem('access_token')
            return accessToken
        } else {
            return null
        }
    }

    getProfile = () => {
        let accessToken = this.getAccessToken()
        if(accessToken) {
            this.auth0.client.userInfo(accessToken, (err, profile) => {
                if(profile) {
                    this.userProfile = {profile}
                }
            })
        }
    }

    logout = () => {
        console.log('logging out')
        localStorage.removeItem('access_token')
        localStorage.removeItem('id_token')
        localStorage.removeItem('expiresAt')
        setTimeout(() => {history.replace('/authcheck')}, 200);
    }

    isAuthenticated = () => {
        let expiresAt = JSON.parse(localStorage.getItem('expiresAt'));
        return new Date().getTime() < expiresAt
    }
}