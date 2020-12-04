import React, { useEffect, useRef, useState } from 'react';
import { dummyText } from '../utils';
import { Fragment } from 'react';

export const React17 = () => {
    const paragraph = useRef({});
    const scrollPosition = useScrollPosition(paragraph);

    return (
        <Fragment>
            <h1>React 17 - {scrollPosition}</h1>
            <p style={{ overflow: 'auto' }} ref={paragraph}>
                {dummyText}
            </p>
        </Fragment>
    );
};

// We can extract this out of this file and reuse as needed without needing to
// re-implement this logic or modifying the containers it's used in.
const useScrollPosition = (paragraph) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = ({ target }) => {
            const scrollPercentage = Math.round(
                (target.scrollTop /
                    (target.scrollHeight - target.clientHeight)) *
                    100
            );

            setScrollPosition(scrollPercentage);
        };
        paragraph.current.addEventListener('scroll', handleScroll);

        return () => {
            paragraph.current.removeEventListener('scroll', handleScroll);
        };
    }, [paragraph]);

    return scrollPosition;
};
