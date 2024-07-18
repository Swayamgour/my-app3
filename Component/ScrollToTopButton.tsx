import React, { useState, useEffect } from 'react';
import style from '@/styles/Scroll.module.css';
import { FaArrowUp } from "react-icons/fa";


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle the visibility of the button
    const toggleVisibility = () => {
        if (window.pageYOffset > 450) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        localStorage.removeItem('mId')
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', toggleVisibility);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <button onClick={scrollToTop} className={style.button_arrow}>
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

// const buttonStyle = {
//     position: 'fixed',
//     bottom: '20px',
//     right: '20px',
//     padding: '0px 0px',
//     fontSize: '16px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
// };

export default ScrollToTopButton;
