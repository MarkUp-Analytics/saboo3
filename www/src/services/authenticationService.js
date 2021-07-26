import axios from 'axios';

var authenticationService = {
    login: function(credentials){
        return axios({
                method: 'post',
                url: '/api/users/login/',
                data: credentials,
                config: {headers: {
                    'Content-Type': 'multipart/form-data'
                    }}
              })
            .then(result => { return result; })
            .catch(error => { return Promise.reject(error); });
    },

    logout: function(){
        return axios({
            method: 'get',
            url: '/api/users/logout/'
          })
        .then(result => { return result; })
        .catch(error => { return Promise.reject(error); });
    },
    signup: function(userDetails){
        return axios({
                method: 'post',
                url: '/api/users/signup/',
                data: userDetails,
                config: {headers: {
                    'Content-Type': 'multipart/form-data'
                    }}
              })
            .then(result => { return result; })
            .catch(error => { return Promise.reject(error); });
    },
}

export default authenticationService