import { useState } from 'react';

export default function Cal() {
  const [input, setInput] = useState('0');


  const handleClick = (value) => {
    if(input === '0'){
      setInput(""+value)
    }
    else{
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput('0');
  };

  const handleCalculate = () => {
    if (input === '') {
      alert('Please enter an number to calculate.');
      return;
    }
    try {
      const result = new Function('return ' + input)();
      setInput(result.toString());
    } catch (e) {
      setInput('Error');
      console.log("Error",e)
    }
    
  };

  return (
    <div style={styles.calculator}>
      <input 
        type="text" 
        value={input} 
        style={styles.input} 
        disabled 
      />
      <div style={styles.buttons}>
        <button onClick={() => handleClick('7')} style={styles.button}>7</button>
        <button onClick={() => handleClick('8')} style={styles.button}>8</button>
        <button onClick={() => handleClick('9')} style={styles.button}>9</button>
        <button onClick={() => handleClick('+')} style={styles.operator}>+</button>

        <button onClick={() => handleClick('4')} style={styles.button}>4</button>
        <button onClick={() => handleClick('5')} style={styles.button}>5</button>
        <button onClick={() => handleClick('6')} style={styles.button}>6</button>
        <button onClick={() => handleClick('-')} style={styles.operator}>-</button>

        <button onClick={() => handleClick('1')} style={styles.button}>1</button>
        <button onClick={() => handleClick('2')} style={styles.button}>2</button>
        <button onClick={() => handleClick('3')} style={styles.button}>3</button>
        <button onClick={() => handleClick('*')} style={styles.operator}>*</button>

        <button onClick={() => handleClick('0')} style={styles.button}>0</button>
        <button onClick={() => handleClick('.')} style={styles.button}>.</button>
        <button onClick={handleClear} style={styles.clearButton}>C</button>
        <button onClick={() => handleClick('/')} style={styles.operator}>/</button>
      </div>
      <div>
        <button onClick={handleCalculate} style={styles.equalsButton}>=</button>
      </div>
    </div>
  );
}


const styles = {
  calculator: {
    padding: '20px',
    maxWidth: '280px',
    margin: '0 auto',
    textAlign: 'center',
    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.85), rgba(34, 193, 195, 0.5))',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
  },
  input: {
    padding: '25px 0',
    width: '100%',
    fontSize: '24px',
    textAlign: 'right',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '5px',
    boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
    color: '#333',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    marginBottom: '10px',
  },
  button: {
    padding: '20px',
    fontSize: '18px',
    border: 'none',
    backgroundColor: '#e0e0e0', 
    color: '#333', 
    borderRadius: '5px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  },
  operator: {
    backgroundColor: '#4e4e4e', 
    color: '#fff',
    padding: '20px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  },
  clearButton: {
    backgroundColor: '#8EA3A6', 
    color: '#fff',
    padding: '20px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  },
  equalsButton: {
    backgroundColor: '#4e4e4e', 
    color: '#fff',
    padding: '20px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '5px',
    width: '100%',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  },
};
