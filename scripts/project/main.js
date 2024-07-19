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
  
function setLayout(runtime){
	const width = runtime.platformInfo.canvasDeviceWidth;
	const height = runtime.platformInfo.canvasDeviceHeight;
	
	runtime.globalVars.deviceWidth = width;
	runtime.globalVars.deviceHeight = height;
	
	console.log("------------>height", height);
	console.log("------------>width", width);
}