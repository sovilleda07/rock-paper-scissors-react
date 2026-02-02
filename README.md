# Rock Paper Scissors React

A modern, interactive Rock Paper Scissors game built with React. Play against the computer, track your score, and enjoy a polished UI with dark mode support.

![Demo](./public/demo.png)

## Features

-   **Play vs Computer**: Classic game logic implementation.
-   **Score Tracking**: Wins, losses, and ties are tracked and persisted using LocalStorage.
-   **Auto Play Mode**: Let the computer play against itself for automated testing or fun.
-   **Keyboard Controls**:
    -   `r`: Rock
    -   `p`: Paper
    -   `s`: Scissors
    -   `a`: Toggle Auto Play
    -   `Backspace`: Reset Score
-   **Theme Support**: Toggle between Light and Dark modes.
-   **Multi-language**: Full support for English and Spanish.

## Tech Stack

-   **React 19**: Modern UI library for building the interface.
-   **Vite**: Fast build tool and development server.
-   **i18next**: Internationalization framework for multi-language support.
-   **CSS**: Custom styling with variables for theming.

## Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/sovilleda07/rock-paper-scissors-react.git
    cd rock-paper-scissors-react
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

## Usage

1.  Open the application in your browser (usually at `http://localhost:5173`).
2.  Choose your move by clicking on the Rock, Paper, or Scissors icons.
3.  The computer will instantly make its move, and the result (Win/Loss/Tie) will be displayed.
4.  Use the toggle buttons at the top to switch themes or languages.
