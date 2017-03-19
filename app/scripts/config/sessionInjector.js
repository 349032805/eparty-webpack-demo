'use strict';

export default class SessionInjector {
    constructor(sessionService) {
    	this.sessionService = sessionService;
	    // this.sessionInjector = {
	    //     request: function(config) {
     //            config.headers['x-session-token'] = "testToken"
	    //         return config;
	    //     }
     //    };
	}

	sessionInjector(){
		request: function(config) {
            config.headers['x-session-token'] = "testToken"
            return config;
        }

        return request;
	}
	
}
SessionInjector.$inject=['sessionService']