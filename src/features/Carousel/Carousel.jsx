import React from 'react';
import './Carousel.css';

const Carousel = ({ delay = 10000, children }) => {
    const itemLength = Array.isArray(children) ? children.length - 1 : 0;
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const intervalRef = React.useRef(null);

    const stopCycle = React.useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const goToNext = React.useCallback(() => {
        setCurrentIndex((index) => (index >= itemLength ? 0 : index + 1));
    }, [itemLength]);

    const goToPrevious = React.useCallback(() => {
        setCurrentIndex((index) => (index <= 0 ? itemLength : index - 1));
    }, [itemLength]);

    const goToSlide = React.useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    const startCycle = React.useCallback(() => {
        stopCycle();
        if (itemLength > 2) {
            intervalRef.current = setInterval(goToNext, delay);
        }
    }, [stopCycle, itemLength, goToNext, delay]);

    const handleNext = () => {
        goToNext();
        startCycle();
    };

    const handlePrevious = () => {
        goToPrevious();
        startCycle();
    };

    const handleIndicatorClick = (index) => {
        goToSlide(index);
        startCycle();
    };

    React.useEffect(() => {
        startCycle();
        return stopCycle;
    }, [itemLength, startCycle, stopCycle]);

    return (
        <div className='carousel'>
            {itemLength > 1 && (
                <>
                    <div className='carousel-current'>
                        {children[currentIndex]}
                    </div>
                    <div className='carousel-buttons'>
                        <button
                            className='carousel-button carousel-button-previous'
                            onClick={handlePrevious}
                            aria-label="Previous slide"
                        >
                            &#8249;
                        </button>
                        <div className='carousel-indicators'>
                            {children.map((_, index) => (
                                <span
                                    key={index}
                                    className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => handleIndicatorClick(index)}
                                    role="button"
                                    aria-label={`Go to slide ${index + 1}`}
                                    tabIndex={0}
                                />
                            ))}
                        </div>
                        <button
                            className='carousel-button carousel-button-next'
                            onClick={handleNext}
                            aria-label="Next slide"
                        >
                            &#8250;
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Carousel;
