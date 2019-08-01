import auth0 from 'auth0-js'

export default class Auth {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'dev-jhubgo63.auth0.com',
            clientID: 'x3igreCiHNys81Ku0GuLWt1PunG2Wyxq',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile email'
        })

        this.login = this.login.bind(this);
    }

    login = () => {
        // console.log('redirecting..')
        // this.auth0.authorize()    //redirect user to login page hosted on auth0 servers
        
            let _this = this
            return new Promise((resolve, reject) => {
                _this.auth0.checkSession({
                    "audience": "https://domain.auth0.com/userinfo",
                    "scope": "openid profile",
                }, (err, authResult) => {
                    if (err)
                        reject(err)
                    resolve(authResult)
                })
            })
        
    }



}