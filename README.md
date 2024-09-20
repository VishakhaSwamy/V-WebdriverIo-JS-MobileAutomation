# Project Setup Instructions

This project automates mobile app testing using WebdriverIO, Appium, JavaScript and Allure.


## Prerequisites

- Node.js
- Set environment variables for Java, SDK and allure
- Appium inspecter
- Appium server GUI
- Android studio - SDK setup, emulator setup
- Visual studio code

## Installation

1. Install dependencies using `npm install`. verify all dependencies are available in node_modules folder
2. Set up the Android emulator or connect a real device.

## Running the Tests

1. You dont need to start emulator in Android studio
2. Place the apk file in the app/android folder
3. Set capabilities in wdio.conf.js file as per your emulator
4. Run the tests: npm run android
5. Set the path for your emulator in the package file for 'runEmulator' to start emulator on the fly

## Generating Reports

Allure reports are generated automatically after running the tests. You can view them by navigating to the `reports/allure-results` directory or by allure open in cmd

- **features/**: Contains feature files for Cucumber BDD.
- **src/screen_objects/**: Contains screen objects.
- **src/steps/**: Contains step definitions.
- **allure-report/**: Contains test reports.
- **wdio.conf.js**: WebdriverIO configuration file.
- **package.json**: contains dependencies with versions.




---



## Scripts Overview

1. **`demoAppLogin`**:
   - **Command**: `npx wdio wdio.conf.js && allure generate allure-results --clean`
   - **Purpose**: Runs WebdriverIO tests and generates an Allure report.

2. **`runEmulator`**:
   - **Command**: `nohup /path/to/Library/Android/sdk/emulator/emulator -avd Pixel_8_Pro_API_VanillaIceCream &`
   - ** Also change the emulator name or add the real device as per use.
   - **Purpose**: Starts the Android emulator in the background.
   - **Customization**: Replace the path with your Android SDK emulator path.

3. **`startEmulatorAndRunTests`**:
   - **Command**: `npm run runEmulator && sleep 30 && ./wait-for-emulator.sh && npm run demoAppLogin && adb -s emulator-5554 emu kill`
   - **Purpose**: Starts the emulator, runs tests, and kills the emulator afterward.

## Instructions for Use
- To start the emulator and run tests:
  npm run startEmulatorAndRunTests

- To generate and view the Allure report:
  npm run generate-allure-report
  

## Important Note
Replace `/path/to/Library/Android/sdk/emulator/emulator` in `runEmulator` with your emulator path.


