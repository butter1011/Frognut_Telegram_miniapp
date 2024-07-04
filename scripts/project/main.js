
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";
import * as TMA from "https://cdn.jsdelivr.net/npm/@tma.js/sdk@2.5.1/dist/index.min.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}

globalThis.inviteuser = function(runtime)
{
    const utils = TMA.initUtils();
    utils.openTelegramLink(`https://t.me/share/url?url=${encodeURIComponent("https://t.me/share/url?url=https://t.me/frognutbot?startapp="&runtime.User_ID&"&text=%F0%9F%92%B0Catizen%3A%20Unleash%2C%20Play%2C%20Earn%20-%20Where%20Every%20Game%20Leads%20to%20an%20Airdrop%20Adventure!%0A%F0%9F%8E%81Let%27s%20play-to-earn%20airdrop%20right%20now!")}`);
}
