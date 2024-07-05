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

	async Gamecode_Event64_Act31(runtime, localVars)
	{
		runtime.callFunction("SaveData");
	},

	async Gamecode_Event145_Act2(runtime, localVars)
	{
 legacyCopy(`https://t.me/share/url?url=https://t.me/frognutbot?start=${ runtime.globalVars.User_ID }💰Catizen: Unleash, Play, Earn - Where Every Game Leads to an Airdrop Adventure!🎁Let's play-to-earn airdrop right now!`);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

