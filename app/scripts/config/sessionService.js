'use strict';

export default class SessionService {
    constructor() {
    	
	}

	login(user,accessToken){
        window.sessionStorage.setItem("user", user);
        window.sessionStorage.setItem("accessToken", accessToken);
    }

    logout() {
        window.sessionStorage.clear();
    }

    isAnonymus(){
      let accessToken = window.sessionStorage.getItem("accessToken");
      if(accessToken != null && accessToken !=""){
        return true;
      }else{
        return false;
      }
    }

    getAccessToken(){
       let accessToken = window.sessionStorage.getItem("accessToken");
       return accessToken;
    }
}
