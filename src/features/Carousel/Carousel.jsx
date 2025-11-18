import React from 'react';
import './Carousel.css';

const Carousel = ({ delay, children }) => {
    const itemLength = Array.isArray(children) ? children.length - 1 : 0;
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const intervalRef = React.useRef(null);

    const onButtonNext = () => {
        setCurrentIndex((index) => index === itemLength ? 0 : index + 1);
        startCycle(cycleNextLoop, delay);
    }

    const onButtonPrevious = () => {
        setCurrentIndex((index) => index === 0 ? itemLength : index - 1);
        startCycle(cyclePreviousLoop, delay);
    }

    const startCycle = React.useCallback((callback, delay) => {
        stopCycle();
        intervalRef.current = setInterval(callback, delay);
    }, []);

    const stopCycle = React.useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
    }, []);

    const cycleNextLoop = React.useCallback(() => {
        setCurrentIndex((index) => index === itemLength ? 0 : index + 1);
    }, [itemLength]);

    const cyclePreviousLoop = React.useCallback(() => {
        setCurrentIndex((index) => index === 0 ? itemLength : index - 1);
    }, [itemLength]);

    React.useEffect(() => {
        if (itemLength > 1) {
            startCycle(cycleNextLoop, delay);
        }
        return () => {
            stopCycle();
        }
    }, [delay, itemLength, startCycle, stopCycle, cycleNextLoop]);

    return (
        <div className='carousel'>
            {itemLength > 1 && (
                <>
                    <div className='carousel-current'>
                        {children[currentIndex]}
                    </div>
                    <div className='carousel-buttons'>
                        <button className='carousel-button carousel-button-previous' onClick={onButtonPrevious}>
                            &#8249;
                        </button>
                        <div className='carousel-indicators'>
                            {children.map((_, index) => (
                                <span
                                    key={index}
                                    className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        startCycle(cycleNextLoop, delay);
                                    }}
                                />
                            ))}
                        </div>
                        <button className='carousel-button carousel-button-next' onClick={onButtonNext}>
                            &#8250;
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Carousel;
