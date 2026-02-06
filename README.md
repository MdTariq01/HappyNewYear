# Happy New Year 🎉

A beautiful, interactive New Year celebration web application built with React, Vite, and Tailwind CSS.

## Features

✨ **Festive Animations**
- Floating balloon animations
- Confetti effects
- Smooth fade-up transitions
- Interactive UI elements

💬 **Multiple Message Cards**
- Multiple customizable greeting cards
- Responsive design
- Beautiful gradient backgrounds

🎨 **Modern Design**
- Built with Tailwind CSS v4
- Smooth motion animations using Framer Motion
- Responsive and mobile-friendly

⚡ **High Performance**
- Vite for fast development and builds
- React 19 for latest features
- HMR (Hot Module Replacement) for instant updates

## Tech Stack

- **React** 19.2.0 - UI library
- **Vite** 7.2.4 - Build tool and dev server
- **Tailwind CSS** 4.1.18 - Utility-first CSS framework
- **Framer Motion** 12.23.26 - Animation library
- **ESLint** - Code quality

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd HappyNewYear
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/
│   ├── Balloons/          # Balloon animation component
│   ├── Button/            # Reusable button component
│   ├── Card/              # Message card components
│   ├── Confetti/          # Confetti effect component
│   ├── FloatingDecorations/ # Floating animation elements
│   └── WishingPage/       # Main wishing page
├── assets/                # Static assets
├── App.jsx               # Main app component
├── index.css            # Global styles and Tailwind directives
└── main.jsx             # Application entry point
```

## Development

The project uses:
- **Hot Module Replacement (HMR)** for instant updates while coding
- **ESLint** for code quality with React best practices
- **Tailwind CSS** for utility-first styling

To lint your code:
```bash
npm run lint
```

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder ready for deployment.

## Browser Support

Works on all modern browsers that support ES2020 and React 19.


