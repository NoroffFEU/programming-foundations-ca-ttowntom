const smartphone = {
	brand: {
		name: "Google",
		model: "Pixel 7",
	},
	os: {
		name: "Android",
		version: 13,
	},
	spesifications: {
		color: "Obisidian",
		cpu: "Google Tensor G2 Titan M2",
		storageCapacityGB: 128,
		ramGB: 8,
		battery: {
			batteryLifeHours: 24,
			capacitymAh: 4355,
			fastCharging: true,
			wirelessCharging: true,
		},
		screen: {
			sizeIn: 6.3,
			resolution: "1080 x 2400 pixels",
			maxFrequency: 90,
			bitDepth: 24,
			maxNit: 1400,
		},
		cameras: [
			{
				position: "rear",
				megapixels: 50,
				viewAngle: 82,
				apertureF: 1.85,
			},
			{
				position: "front",
				megapixels: 10.8,
				viewAngle: 92.8,
				apertureF: 2.2,
			},
		],
	},
	alertLowBattery: function () {
		if (smartphone.battery.capacitymAh < 500) {
			console.log("Low battery!");
		}
	},
};

export { smartphone };
