import axios from 'axios'


class AuthService {
    constructor(){
        let service = axios.create({
            baseURL: 'http://localhost:5000',
            withCredentials: true
        })
        this.service = service
    }


    signup = (username, password, campus, course) => {
        return this.service.post('/auth/signup', { username, password, campus, course })
        .then(response => {
            console.log(response.data)
            return response.data
        })
    }

    login = (username, password) => {
        return this.service.post('/auth/login', { username, password })
        .then(response => response.data)
    }

    logout = () => {
        return this.service.get('auth/logout')
        .then(response => response.data)
    }

    loggedin = () => {
        return this.service.get('auth/loggedin')
        .then(response => response.data)
    }

    imageUpload = (image) => {
        return this.service.post('auth/profile', image)
        .then(response => response.data)
    }


}


export default AuthService