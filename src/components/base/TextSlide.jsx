import React, {useRef, useEffect, useState} from 'react'
import useIsInViewport from "./ultilities/useIsInViewport.js";

import './css/TextSlide.css'

const defaultTransitionDuration = '300ms'
const defaultDelay = 300

export default function TextSlide(props) {
    const {children, delay, duration, top, left, right, className} = props;
    const ref = useRef(null);
    const isInViewport = useIsInViewport(ref);
    const [textTranslate, setTextTranslate] = useState(
        top
            ? 'lake-text-slide-top'
            : left
                ? 'lake-text-slide-left'
                : right
                    ? 'lake-text-slide-right'
                    : 'lake-text-slide-bottom'
    );

    useEffect(() => {
        if (isInViewport) {
            setTimeout(() => {
                setTextTranslate('');
            }, delay || defaultDelay);
        }
    }, [isInViewport, delay]);

    const renderChild = (child, index) => {

        if (typeof child === 'string' || typeof child === 'number' || typeof child === 'boolean') {
            // text node
            return (
                <div className={`lake-text-slide-wrap`} key={index}>
                    <div
                        className={`${textTranslate} lake-text-slide-content`}
                        style={{transitionDuration: duration || defaultTransitionDuration}}
                    >
                        {child}
                    </div>
                </div>
            );
        }

        // react node
        else if (typeof child === 'object') {
           console.log(child, typeof child)
            return (
                <div className={`lake-text-slide-wrap`} key={index}>
                    {{
                        ...child,
                        props: {
                            ...child.props,
                            className: `${child.props.className || ''} ${textTranslate} lake-text-slide-content`,
                            style: {
                                ...child.props.style || {},
                                transitionDuration: duration || defaultTransitionDuration,
                            },
                        }
                    }}
                </div>
            );
        }

        // otherwise return null
        return null;
    };

    return (
        <div ref={ref} className={`border border-black lake-text-slide-wrap ${className || ''}`}>
            {Array.isArray(children) ? children.map(renderChild) : renderChild(children, 0)}
        </div>
    );
}