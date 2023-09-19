import { smartphone } from "/js/smartphone.js";

var brandContainer = document.querySelector("#brand");
var modelContainer = document.querySelector("#model");
var osContainer = document.querySelector("#os");
var colorContainer = document.querySelector("#color");
var cpuContainer = document.querySelector("#cpu");
var storageContainer = document.querySelector("#storage");
var ramContainer = document.querySelector("#ram");
var screenSizeContainer = document.querySelector("#screen-size");
var screenResolutionContainer = document.querySelector("#screen-resolution");
var screenRefreshContainer = document.querySelector("#screen-refreshrate");
var screenBitDepthContainer = document.querySelector("#screen-bit-depth");
var screenNitsContainer = document.querySelector("#screen-nits");
var mainCameraMpContainer = document.querySelector("#camera-main-mp");
var mainCameraViewAngleContainer = document.querySelector(
	"#camera-main-view-angle"
);
var mainCameraApertureContainer = document.querySelector(
	"#camera-main-aperture"
);
var frontCameraMpContainer = document.querySelector("#camera-front-mp");
var frontCameraViewAngleContainer = document.querySelector(
	"#camera-front-view-angle"
);
var frontCameraApertureContainer = document.querySelector(
	"#camera-front-aperture"
);
var batteryLifeContainer = document.querySelector("#battery-life");
var batteryCapacityContainer = document.querySelector("#battery-capacity");
var batteryFastChargingContainer = document.querySelector(
	"#battery-fast-charging"
);
var batteryWirelessChargingContainer = document.querySelector(
	"#battery-wireless-charging"
);

brandContainer.innerHTML = smartphone.brand.name;
modelContainer.innerHTML = smartphone.brand.model;
osContainer.innerHTML = smartphone.os.name + " " + smartphone.os.version;
colorContainer.innerHTML = smartphone.spesifications.color;
cpuContainer.innerHTML = smartphone.spesifications.cpu;
storageContainer.innerHTML =
	smartphone.spesifications.storageCapacityGB + " GB";
ramContainer.innerHTML = smartphone.spesifications.ramGB + " GB";
screenSizeContainer.innerHTML = smartphone.spesifications.screen.sizeIn + '"';
screenResolutionContainer.innerHTML =
	smartphone.spesifications.screen.resolution;
screenRefreshContainer.innerHTML =
	smartphone.spesifications.screen.maxFrequency + " Hz";
screenBitDepthContainer.innerHTML =
	smartphone.spesifications.screen.bitDepth + " bit";
screenNitsContainer.innerHTML =
	smartphone.spesifications.screen.maxNit + " nits";
mainCameraMpContainer.innerHTML =
	smartphone.spesifications.cameras[0].megapixels + " MP";
mainCameraViewAngleContainer.innerHTML =
	smartphone.spesifications.cameras[0].viewAngle + "°";
mainCameraApertureContainer.innerHTML =
	"f/" + smartphone.spesifications.cameras[0].apertureF;
frontCameraMpContainer.innerHTML =
	smartphone.spesifications.cameras[1].megapixels + " MP";
frontCameraViewAngleContainer.innerHTML =
	smartphone.spesifications.cameras[1].viewAngle + "°";
frontCameraApertureContainer.innerHTML =
	"f/" + smartphone.spesifications.cameras[1].apertureF;
batteryLifeContainer.innerHTML =
	smartphone.spesifications.battery.batteryLifeHours + " hours";
batteryCapacityContainer.innerHTML =
	smartphone.spesifications.battery.capacitymAh + " mAh";
batteryFastChargingContainer.innerHTML = smartphone.spesifications.battery
	.fastCharging
	? "Yes"
	: "No";
batteryWirelessChargingContainer.innerHTML = smartphone.spesifications.battery
	.wirelessCharging
	? "Yes"
	: "No";

var checkBatteryButton = document.querySelector("#battery-status");
checkBatteryButton.addEventListener("click", function () {
	smartphone.alertLowBattery();
});
