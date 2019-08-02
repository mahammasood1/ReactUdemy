import auth0 from 'auth0-js'

export default class Auth {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'dev-xqxytnsy.auth0.com',
            clientID: 'FNyHPT6XQzMgVgNDQ0xHw7wqd3DFGgZD',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            audience: 'https://' + 'dev-xqxytnsy.auth0.com' + '/userinfo',
            scope: 'openid profile email',
            sso: false
        })

        this.login = this.login.bind(this);
    }  

    login = () => {
         this.auth0.authorize()    //redirect user to login page hosted on auth0 servers
    }

    handleAuth = () => {
        this.auth0.parseHash((err, authResult) => {
            if(authResult) {
                localStorage.setItem('access_token', authResult.accessToken)
                localStorage.setItem('id_token', authResult.idToken)
                
                let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()));
                localStorage.setItem('expiresAt', expiresAt)
            }else{
                console.log(err)
            }
        })
    }

    logout = () => {
        localStorage.setItem('access_token')
        localStorage.setItem('id_token')
        localStorage.setItem('expiresAt')
    }

   
    

  



}