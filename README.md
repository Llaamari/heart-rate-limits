# Heart Rate Limits Calculator

A simple React Native application that calculates heart rate limits for exercise based on the user's age.

This application was created as part of a school course.

## Technologies

- React Native
- Expo (blank template)
- TypeScript

## Features

- Enter your age in the input field.
- Calculate lower and upper heart rate limits automatically.
- Display the results in beats per minute (bpm).
- Display zero for both limits if the input is not a valid number.

## Calculation

The heart rate limits are calculated using the following formulas:

**Lower limit:**
`(220 - age) * 0.65`

**Upper limit:**
`(220 - age) * 0.85`

For example, if the user is 20 years old:

- Lower limit: 130.00 bpm
- Upper limit: 170.00 bpm

## Installation and Running

1. Clone the repository.
2. Open the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npx expo start
   ```

5. Open the application using Expo Go or an Android/iOS emulator.

## Project Structure

- `App.tsx` – Main application component, user interface and heart rate calculations.
- `index.js` – Application entry point.
- `tsconfig.json` – TypeScript configuration.
- `assets/` – Application assets.

## API Keys

This application does not require any API keys.