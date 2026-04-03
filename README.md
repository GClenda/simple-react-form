# Animal Shelter Donation Form 🐾

A simple front-end application built with React that lets users submit a donation to an animal shelter. Users fill out their details, choose a donation type, and receive a thank-you confirmation upon submission.

<img width="600" alt="Screenshot 2024-08-22 at 11 58 46 AM" src="https://github.com/user-attachments/assets/eedaa1c4-79d2-4fe0-8a28-e377ebbfd965">

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI library |
| [Create React App](https://create-react-app.dev/) | Project scaffolding & build tooling |
| CSS | Styling |
| [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) | Component testing |

---

## How It Works

The app is made up of three React components arranged in a simple hierarchy:

```
App
└── AnimalShelter       (page wrapper — heading + layout)
    └── Form            (form logic, state, and conditional rendering)
```

1. **`App`** — Root component. Renders `AnimalShelter` inside the main app container.
2. **`AnimalShelter`** — Wrapper that adds the page heading ("Welcome to Animal Shelter Donations!") and renders the `Form`.
3. **`Form`** — Core component. Manages all form state with the `useState` hook. Renders either:
   - The **donation form** (default) with fields for first name, last name, donation type, quantity, and date.
   - A **thank-you screen** (after the user submits) showing a confirmation message and an image.

### State Management

`Form` tracks two pieces of state:

- `values` — an object holding the current value of every form field.
- `submitted` — a boolean flag that switches the view from the form to the thank-you screen.

When a field changes, `handleChanges` updates only the relevant key in `values` using the input's `name` attribute. When the form is submitted, `handleSubmit` prevents the default browser behavior, logs the collected values, and sets `submitted` to `true`.

---

## Features

- **Form fields** — First name, last name, donation type (required); quantity and date (optional).
- **Controlled inputs** — Every field is bound to component state, keeping the UI and data in sync.
- **Form submission** — Switches to a thank-you view without a page reload.
- **Form reset** — Restores all fields to their initial empty state without reloading the page.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or later
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GClenda/simple-react-form.git
   cd simple-react-form
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app opens automatically at [http://localhost:3000](http://localhost:3000).

---

## Usage

1. Fill in your **First Name**, **Last Name**, and **Donation Type** (required).
2. Optionally enter the **quantity/amount** and select **today's date**.
3. Click **Submit** — the form is replaced by a thank-you screen.
4. To start over, click **Reset** to clear all fields (available before submission).

---

## File Structure

```
simple-react-form/
├── public/                        # Static assets served as-is
│   └── index.html                 # HTML shell for the React app
├── src/
│   ├── App.js                     # Root component
│   ├── App.css                    # Global layout and theme styles
│   ├── index.js                   # React entry point (ReactDOM.render)
│   ├── Assets/
│   │   └── Images/
│   │       └── animals.jpg        # Image shown on the thank-you screen
│   └── Componets/
│       ├── AnimalShelter/
│       │   └── AnimalShelter.jsx  # Page wrapper component
│       └── Form/
│           ├── Form.jsx           # Form logic, state, and rendering
│           └── Form.css           # Form and thank-you screen styles
├── package.json
└── README.md
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Run the app in development mode with hot reload |
| `npm test` | Run the test suite in interactive watch mode |
| `npm run build` | Create an optimized production build in `build/` |
| `npm run eject` | Expose the underlying CRA configuration (irreversible) |

---

## Future Improvements

- Add input validation with user-friendly error messages.
- Integrate a back-end API to persist donation records.
- Support multiple donation types via a dropdown/select input.
- Enhance the UI with animations and accessibility improvements.

