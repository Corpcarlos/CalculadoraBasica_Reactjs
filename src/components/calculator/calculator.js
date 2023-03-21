/* eslint-disable no-eval */
import React, { useState } from 'react';
import './Calculator.css'; // importa el archivo CSS

function Calculator() {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');

  function handleOperandClick(operand) {
    if (operator === '') {
      setOperand1(operand1 + operand);
    } else {
      setOperand2(operand2 + operand);
    }
  }

  function handleOperatorClick(op) {
    if (op === '=') {
      const result = eval(`${operand1}${operator}${operand2}`);
      setOperand1(result);
      setOperand2('');
      setOperator('');
    } else {
      setOperator(op);
    }
  }

  return (
    <div>
      <h1>Calcualdora Basica</h1>
      <div className='position'>
        <div className="calculator">
          <input type="text" value={operand1 + operator + operand2} disabled />
          <br />
          <button className="operand" onClick={() => handleOperandClick('1')}>1</button>
          <button className="operand" onClick={() => handleOperandClick('2')}>2</button>
          <button className="operand" onClick={() => handleOperandClick('3')}>3</button>
          <button className="operator" onClick={() => handleOperatorClick('+')}>+</button>
          <br />
          <button className="operand" onClick={() => handleOperandClick('4')}>4</button>
          <button className="operand" onClick={() => handleOperandClick('5')}>5</button>
          <button className="operand" onClick={() => handleOperandClick('6')}>6</button>
          <button className="operator" onClick={() => handleOperatorClick('-')}>-</button>
          <br />
          <button className="operand" onClick={() => handleOperandClick('7')}>7</button>
          <button className="operand" onClick={() => handleOperandClick('8')}>8</button>
          <button className="operand" onClick={() => handleOperandClick('9')}>9</button>
          <button className="operator" onClick={() => handleOperatorClick('*')}>*</button>
          <br />
          <button className="operand" onClick={() => handleOperandClick('0')}>0</button>
          <button className="operator" onClick={() => handleOperatorClick('=')}>=</button>
          <button className="operator" onClick={() => handleOperatorClick('/')}>/</button>
          <button className="clear" onClick={() => { setOperand1(''); setOperand2(''); setOperator(''); }}>C</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
