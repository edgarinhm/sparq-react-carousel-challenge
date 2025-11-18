# React Carousel Challenge

A complete React application featuring a customizable and animated carousel component.

## Features
- 🎠 Auto-rotating carousel with customizable delay
- ⏮️ Previous/Next navigation buttons
- 🎯 Click-to-navigate indicator dots
- 🎨 Smooth animations and transitions
- 📱 Fully responsive design
- 🏗️ Feature-based architecture

## Project Structure
```
react-carousel-challenge/
├── public/
│   └── index.html
├── src/
│   ├── features/
│   │   └── Carousel/
│   │       ├── Carousel.jsx
│   │       └── Carousel.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm start
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage
Import and use the `Carousel` component in your React application:

```jsx
import Carousel from './features/Carousel/Carousel';

function App() {
  return (
    <Carousel delay={3000}>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    </Carousel>
  );
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `delay` | number | Time in milliseconds between automatic slide transitions |
| `children` | ReactNode | Slide content elements |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
