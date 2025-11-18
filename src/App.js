import React from 'react';
import './App.css';
import Carousel from './features/Carousel/Carousel';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>React Carousel Challenge</h1>
            </header>
            <main className="App-main">
                <Carousel delay={3000}>
                    <div className="carousel-item item-1">
                        <h2>Slide 1</h2>
                        <p>Welcome to the React Carousel</p>
                    </div>
                    <div className="carousel-item item-2">
                        <h2>Slide 2</h2>
                        <p>Navigate through slides automatically or manually</p>
                    </div>
                    <div className="carousel-item item-3">
                        <h2>Slide 3</h2>
                        <p>Customizable delay and content</p>
                    </div>
                    <div className="carousel-item item-4">
                        <h2>Slide 4</h2>
                        <p>Easy to integrate and extend</p>
                    </div>
                </Carousel>
            </main>
        </div>
    );
}

export default App;
