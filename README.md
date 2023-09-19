[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11919074&assignment_repo_type=AssignmentRepo)

# Programming Foundations CA

Optional goals -> UI can be found in the index.htmnl file.
(Could not host on Pages/Netlify due to the repo being owned by a organization)

# Smartphone Object

This JavaScript object represents a smartphone with various properties and functions.

## Object Structure

The smartphone object is structured as follows:

- brand: An object containing the name and model of the smartphone.
  - name (String): The manufacturer's name
  - model (String): The smartphone model
- os: An object representing the operating system information.
  - name (String): The name of the operating system
  - version (Number): The version of the operating system
- specifications: An object containing various specifications of the smartphone.
  - color (String): The color of the smartphone.
  - cpu (String): The CPU information of the smartphone.
  - storageCapacityGB (Number): The storage capacity in gigabytes.
  - ramGB (Number): The RAM capacity in gigabytes.
- battery: An object describing the smartphone's battery.
  - batteryLifeHours (Number): The estimated battery life in hours.
  - capacitymAh (Number): The battery capacity in milliampere\*hours.
  - fastCharging (Boolean): Indicates if fast charging is supported.
  - wirelessCharging (Boolean): Indicates if wireless charging is supported.
- screen: An object describing the smartphone's screen.
  - sizeIn (Number): The screen size in inches.
  - resolution (String): The screen resolution.
  - maxFrequency (Number): The maximum screen refresh frequency.
  - bitDepth (Number): The screen's color bit depth.
  - maxNit (Number): The maximum brightness in nits.
- cameras: An array of camera objects, each with properties:
  - position (String): The camera's position (e.g., "rear" or "front").
  - megapixels (Number): The camera's megapixel count.
  - viewAngle (Number): The camera's view angle in degrees.
  - apertureF (Number): The camera's aperture size.
- alertLowBattery: A function that checks the battery capacity and logs a message if the battery capacity is less than 500mAh.
