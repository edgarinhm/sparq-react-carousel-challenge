import React from 'react';

const Carousel = ({ delay, children }) => {
    const itemLength = Array.isArray(children) ? children.length - 1 : 0;
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const intervalRef = React.useRef(null);

    const onButtonNext = () => {
        startCycle(cycleNextLoop, delay);
    }

    const onButtonPrevious = () => {
        startCycle(cycleNextLoop, delay);
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


    React.useEffect(() => {
        if (itemLength > 1) {
            startCycle(cycleNextLoop, delay);
            return () => {
                stopCycle();
            }
        }
    }, [delay, itemLength, startCycle, stopCycle, cycleNextLoop]);

    return (
        <div className='carousel'>
            {itemLength > 1 && (
                <>
                    <div className='current'>
                        {children[currentIndex]}
                    </div>
                    <div className='buttons'>
                        <button className='button-previous' onClick={() => onButtonPrevious()}>Previous</button>
                        <button className='button-next' onClick={() => onButtonNext()}>Next</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Carousel;
