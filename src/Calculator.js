import React, { useState } from 'react';
import './Calculator.css'; // Import the CSS file for styling

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(input)); // Evaluate the expression
            } catch (error) {
                setResult('Error'); // Handle any errors
            }
            setInput('');
        } else if (value === 'C') {
            setInput(''); // Clear the input
            setResult('');
        } else {
            setInput(input + value); // Update the input
        }
    };

    return (
        <div className="calculator-container">
            <div className="display">
                <div className="input">{input}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                {['7', '8', '9', '/'].map((item) => (
                    <button key={item} onClick={() => handleButtonClick(item)}>
                        {item}
                    </button>
                ))}
                {['4', '5', '6', '*'].map((item) => (
                    <button key={item} onClick={() => handleButtonClick(item)}>
                        {item}
                    </button>
                ))}
                {['1', '2', '3', '-'].map((item) => (
                    <button key={item} onClick={() => handleButtonClick(item)}>
                        {item}
                    </button>
                ))}
                {['0', 'C', '=', '+'].map((item) => (
                    <button key={item} onClick={() => handleButtonClick(item)}>
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;