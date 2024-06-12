


const scriptsInEvents = {

	async Menucode_Event2_Act28(runtime, localVars)
	{
		// Get UserID
		const param = new URLSearchParams(window.location.search);
		console.log("Working")
		runtime.globalVars.User_ID = 989868;
		
		if(param.has('user_id'))
		{
			console.log("param exists");
			paramGotten = param.get('user_id');
			console.log(paramGotten);
			runtime.globalVars.User_ID = paramGotten;
		}
		
		fetch("")
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

