import {} from "./telegram-web-app.js";
function legacyCopy(value) {
    const ta = document.createElement('textarea')
    ta.value = value ?? ''
    ta.style.position = 'absolute'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    ta.remove()
  }
  



const scriptsInEvents = {

	async Gamecode_Event14_Act5(runtime, localVars)
	{
		if (window.Telegram.WebApp) {
			Telegram.WebApp.ready();
			window.Telegram.WebApp.enableClosingConfirmation();
		}
	},

	async Gamecode_Event90_Act2(runtime, localVars)
	{
		runtime.callFunction("SaveData");
	},

	async Gamecode_Event159_Act1(runtime, localVars)
	{
 legacyCopy(`https://t.me/share/url?url=https://t.me/frognutbot?startapp=${ runtime.globalVars.User_ID }&text=💰Catizen: Unleash, Play, Earn - Where Every Game Leads to an Airdrop Adventure!🎁Let's play-to-earn airdrop right now!`);
	},

	async Loadingcode_Event57_Act31(runtime, localVars)
	{
		let LastTime = new Date(runtime.globalVars.LastTime);
		let CurrentTime = new Date(runtime.globalVars.CurrentTime);
		
		let timeDiffer = CurrentTime.getTime() - LastTime.getTime();
		let timeDiffInSeconds = Math.floor(timeDiffer / 1000);
		
		console.log("TimeDifference----------------->", timeDiffInSeconds);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

