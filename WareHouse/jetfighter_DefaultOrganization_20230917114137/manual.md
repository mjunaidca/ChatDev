# Jet Shooting CLI Game User Manual

## Introduction

Welcome to the Jet Shooting CLI Game! This game is a simple command-line interface (CLI) game where you control a jet fighter and shoot down enemies to clear stages. The game features different colors and shapes for the fighter jet, and you can control the jet using arrow keys. Your goal is to shoot enemies and earn scores.

## Installation

To play the Jet Shooting CLI Game, you need to have TypeScript and the required dependencies installed on your machine. Here are the steps to install the necessary dependencies:

1. Make sure you have Node.js installed on your machine. You can download it from the official website: [https://nodejs.org](https://nodejs.org)

2. Open a terminal or command prompt and navigate to the directory where you have the game files.

3. Run the following command to install the dependencies:

   ```
   npm install
   ```

   This command will install the required dependencies specified in the `package.json` file, including `readline-sync`, `ts-node`, and `typescript`.

## Usage

Once you have installed the dependencies, you can start playing the Jet Shooting CLI Game. Here are the steps to run the game:

1. Open a terminal or command prompt and navigate to the directory where you have the game files.

2. Run the following command to start the game:

   ```
   npm start
   ```

   This command will compile the TypeScript files and start the game.

3. Use the arrow keys to control the jet fighter. Press the up arrow key to move up, the down arrow key to move down, the left arrow key to move left, and the right arrow key to move right.

4. Press the spacebar to shoot enemies. Your goal is to shoot down as many enemies as possible to earn scores.

5. The game will display the jet fighter, the enemies, and your score on the console. Keep playing and try to achieve a high score!

## Customization

You can customize the color and shape of the fighter jet in the game. Here's how:

1. Open the `game.ts` file in a text editor.

2. Locate the `start()` method in the `Game` class.

3. Inside the `start()` method, you will find the following lines of code:

   ```typescript
   this.jet.setColor("blue");
   this.jet.setShape("triangle");
   ```

   You can change the color and shape values to your desired values. For example, you can change the color to "red" and the shape to "circle" like this:

   ```typescript
   this.jet.setColor("red");
   this.jet.setShape("circle");
   ```

4. Save the changes to the `game.ts` file.

5. Run the game again using the `npm start` command. The fighter jet will now have the new color and shape you specified.

## Conclusion

Congratulations! You have successfully installed and played the Jet Shooting CLI Game. Enjoy shooting down enemies and achieving high scores! If you have any questions or need further assistance, please don't hesitate to reach out to our support team. Happy gaming!