


const scriptsInEvents = {

	async Menucode_Event2_Act28(runtime, localVars)
	{
		// Get UserID
		const param = new URLSearchParams(window.location.search);
		
		if(param.has('user_id'))
		{
			console.log("param exists");
			paramGotten = param.get('myparam');
			console.log(paramGotten);
			runtime.globalVars.User_ID = paramGotten;
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

