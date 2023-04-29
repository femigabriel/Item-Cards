# About this Project

This is a simple web application built with Next.js that consumes data from an API and displays it in a visually appealing way. The API endpoint used in this project is `https://jsonplaceholder.typicode.com/posts`, which returns a JSON object containing 100 posts.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [CSS Library](#css-library)
- [How it Works](#how-it-works)
- [Notes](#notes)
- [Todo](#todo)
- [Conclusion](#conclusion)

## Requirements

To run this application locally, you need to have Node.js and npm installed on your machine.

## Installation

1. Clone the repository

   ```
   git clone https://github.com/femigabriel/Susejgroup-assessement
   ```

2. Install the dependencies

   ```
   cd my-project
   npm install
   ```

## Running the Application

To start the development server, run the following command:
`    npm run dev
   `
The application can be accessed on http://localhost:3000.

## CSS Library

This project uses Tailwind CSS as the CSS library and Ant design library. Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined CSS classes to easily style HTML elements.

## How it works

    - Nextjs `getServerProps` fetches data on page load
    - You can see 10 results and a button to load more
    - The long descriptive text is truncated and reduced to two lines with a button to read the full text
    - On read more click, you'll see a pop-up that shows the full title and description with buttons to close popup modal

## Notes

The api doesn't support pagination; so I had to load all results and show only 10 on page load. When the load more button is clicked, 10 new results would be added to the old data and this continues as you click.

When there's no result to show, nothing gets added to the screen.

## Todo

    - Add Dark Mode
    - Add unit test

## Conclusion

This web application is a simple demonstration of how to consume data from an API and display it in a visually appealing way using Next.js and Tailwind CSS. Feel free to modify and use this codebase as a starting point for your own projects.
