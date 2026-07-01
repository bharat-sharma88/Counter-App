# Counter App

A simple, clean counter application built with vanilla HTML, CSS, and JavaScript. Increment, decrement, and reset a counter with a minimal, responsive interface.

## Demo

*https://bharat-sharma88.github.io/Counter-App/*

## Features

- **Increment** — increase the counter by 1
- **Decrement** — decrease the counter by 1, with a lower limit of 0 (won't go negative)
- **Reset** — instantly set the counter back to 0
- Circular increment/decrement buttons with hover effects (green for increment, red for decrement)
- Rounded reset button with hover effect (blue)
- Responsive sizing using `vmin` units so the layout scales with the viewport

## Tech Stack

- **HTML5** for structure
- **CSS3** for styling 
- **JavaScript** (DOM manipulation, event listeners) for functionality

## Project Structure

```
counter-app/
├── index.html      # Markup for the counter UI
├── style.css        # Styling for layout, buttons, and typography
└── script.js         # Counter logic (increment, decrement, reset)
```

## How It Works

- The counter value is tracked in a JavaScript variable and displayed inside a `<p>` element with the id `counter`.
- Three buttons (`increment`, `decrement`, `resetBtn`) each have a click event listener that updates the counter value and re-renders it on the page.
- The decrement button includes a guard clause so the counter never goes below 0.
