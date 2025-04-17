import React, { useState } from 'react';
import './LogicGatesDemo.css';

const LogicGatesDemo = () => {
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);
  const outputAND = inputA && inputB;
  const outputOR = inputA || inputB;
  const outputXOR = inputA !== inputB;
  const outputNAND = !(inputA && inputB);
  const outputNOR = !(inputA || inputB);
  const outputXNOR = inputA === inputB;
  const outputNOT_A = !inputA;
  const outputNOT_B = !inputB;
  
  const ConnectionLine = ({ from, to, active }) => {
    return (
      <div 
        className={`connection-line ${active ? 'connection-active' : 'connection-inactive'}`}
        style={{
          left: `${from.x}px`,
          top: `${from.y}px`,
          width: `${to.x - from.x}px`,
        }}
      ></div>
    );
  };
  
  return (
    <div className="logic-gates-container">
      <h1 className="logic-gates-title">Interactive Logic Gates</h1>
      
      <div className="input-controls">
        <div className="input-control">
          <span className="input-label">Input A</span>
          <button 
            className={`switch ${inputA ? 'switch-active' : 'switch-inactive'}`}
            onClick={() => setInputA(!inputA)}
          >
            <div className={`switch-knob ${inputA ? 'switch-knob-active' : ''}`}></div>
          </button>
          <span className="mt-2 font-mono">{inputA ? '1' : '0'}</span>
        </div>
        
        <div className="input-control">
          <span className="input-label">Input B</span>
          <button 
            className={`switch ${inputB ? 'switch-active' : 'switch-inactive'}`}
            onClick={() => setInputB(!inputB)}
          >
            <div className={`switch-knob ${inputB ? 'switch-knob-active' : ''}`}></div>
          </button>
          <span className="mt-2 font-mono">{inputB ? '1' : '0'}</span>
        </div>
      </div>
      
      <div className="gates-grid">
        <div className={`gate ${outputAND ? 'gate-active' : 'gate-inactive'}`}>
          <div className="gate-title">AND</div>
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path 
                d="M10,20 L10,80 L50,80 A40,40 0 0,0 50,20 L10,20 Z" 
                stroke="currentColor" 
                fill="none" 
                strokeWidth="3"
                className={outputAND ? "text-blue-500" : "text-gray-400"}
              />
              <line x1="0" y1="30" x2="10" y2="30" stroke={inputA ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
              <line x1="0" y1="70" x2="10" y2="70" stroke={inputB ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
              <line x1="90" y1="50" x2="100" y2="50" stroke={outputAND ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
            </svg>
          </div>
          <div className="gate-output">{outputAND ? '1' : '0'}</div>
        </div>
        
        <div className={`gate ${outputOR ? 'gate-active' : 'gate-inactive'}`}>
          <div className="gate-title">OR</div>
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path 
                d="M10,20 Q30,50 10,80 L10,80 C40,75 60,50 40,20 L10,20 Z" 
                stroke="currentColor" 
                fill="none" 
                strokeWidth="3"
                className={outputOR ? "text-blue-500" : "text-gray-400"}
              />
              <line x1="0" y1="30" x2="10" y2="30" stroke={inputA ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
              <line x1="0" y1="70" x2="10" y2="70" stroke={inputB ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
              <line x1="55" y1="50" x2="100" y2="50" stroke={outputOR ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
            </svg>
          </div>
          <div className="gate-output">{outputOR ? '1' : '0'}</div>
        </div>
        
        <div className={`gate ${outputXOR ? 'gate-active' : 'gate-inactive'}`}>
          <div className="gate-title">XOR</div>
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path 
                d="M20,20 Q40,50 20,80 L20,80 C50,75 70,50 50,20 L20,20 Z" 
                stroke="currentColor" 
                fill="none" 
                strokeWidth="3"
                className={outputXOR ? "text-blue-500" : "text-gray-400"}
              />
              <path 
                d="M10,20 Q30,50 10,80" 
                stroke="currentColor" 
                fill="none" 
                strokeWidth="3"
                className={outputXOR ? "text-blue-500" : "text-gray-400"}
              />
              <line x1="0" y1="30" x2="15" y2="30" stroke={inputA ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
              <line x1="0" y1="70" x2="15" y2="70" stroke={inputB ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
              <line x1="65" y1="50" x2="100" y2="50" stroke={outputXOR ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
            </svg>
          </div>
          <div className="gate-output">{outputXOR ? '1' : '0'}</div>
        </div>
        
        <div className={`gate ${outputNOT_A ? 'gate-active' : 'gate-inactive'}`}>
          <div className="gate-title">NOT A</div>
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon 
                points="10,25 10,75 60,50" 
                stroke="currentColor" 
                fill="none" 
                strokeWidth="3"
                className={outputNOT_A ? "text-blue-500" : "text-gray-400"}
              />
              <circle cx="70" cy="50" r="10" stroke="currentColor" fill="none" strokeWidth="3" className={outputNOT_A ? "text-blue-500" : "text-gray-400"} />
              <line x1="0" y1="50" x2="10" y2="50" stroke={inputA ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
              <line x1="80" y1="50" x2="100" y2="50" stroke={outputNOT_A ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
            </svg>
          </div>
          <div className="gate-output">{outputNOT_A ? '1' : '0'}</div>
        </div>
        
        <div className={`gate ${outputNAND ? 'gate-active' : 'gate-inactive'}`}>
          <div className="gate-title">NAND</div>
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path 
                d="M10,20 L10,80 L50,80 A40,40 0 0,0 50,20 L10,20 Z" 
                stroke="currentColor" 
                fill="none" 
                strokeWidth="3"
                className={outputNAND ? "text-blue-500" : "text-gray-400"}
              />
              <circle cx="80" cy="50" r="10" stroke="currentColor" fill="none" strokeWidth="3" className={outputNAND ? "text-blue-500" : "text-gray-400"} />
              <line x1="0" y1="30" x2="10" y2="30" stroke={inputA ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
              <line x1="0" y1="70" x2="10" y2="70" stroke={inputB ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
              <line x1="90" y1="50" x2="100" y2="50" stroke={outputNAND ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
            </svg>
          </div>
          <div className="gate-output">{outputNAND ? '1' : '0'}</div>
        </div>
        
        <div className={`gate ${outputNOR ? 'gate-active' : 'gate-inactive'}`}>
          <div className="gate-title">NOR</div>
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path 
                d="M10,20 Q30,50 10,80 L10,80 C40,75 60,50 40,20 L10,20 Z" 
                stroke="currentColor" 
                fill="none" 
                strokeWidth="3"
                className={outputNOR ? "text-blue-500" : "text-gray-400"}
              />
              <circle cx="70" cy="50" r="10" stroke="currentColor" fill="none" strokeWidth="3" className={outputNOR ? "text-blue-500" : "text-gray-400"} />
              <line x1="0" y1="30" x2="10" y2="30" stroke={inputA ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
              <line x1="0" y1="70" x2="10" y2="70" stroke={inputB ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
              <line x1="80" y1="50" x2="100" y2="50" stroke={outputNOR ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
            </svg>
          </div>
          <div className="gate-output">{outputNOR ? '1' : '0'}</div>
        </div>
        
        <div className={`gate ${outputXNOR ? 'gate-active' : 'gate-inactive'}`}>
          <div className="gate-title">XNOR</div>
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path 
                d="M20,20 Q40,50 20,80 L20,80 C50,75 70,50 50,20 L20,20 Z" 
                stroke="currentColor" 
                fill="none" 
                strokeWidth="3"
                className={outputXNOR ? "text-blue-500" : "text-gray-400"}
              />
              <path 
                d="M10,20 Q30,50 10,80" 
                stroke="currentColor" 
                fill="none" 
                strokeWidth="3"
                className={outputXNOR ? "text-blue-500" : "text-gray-400"}
              />
              <circle cx="75" cy="50" r="10" stroke="currentColor" fill="none" strokeWidth="3" className={outputXNOR ? "text-blue-500" : "text-gray-400"} />
              <line x1="0" y1="30" x2="15" y2="30" stroke={inputA ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
              <line x1="0" y1="70" x2="15" y2="70" stroke={inputB ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
              <line x1="85" y1="50" x2="100" y2="50" stroke={outputXNOR ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
            </svg>
          </div>
          <div className="gate-output">{outputXNOR ? '1' : '0'}</div>
        </div>
        
        <div className={`gate ${outputNOT_B ? 'gate-active' : 'gate-inactive'}`}>
          <div className="gate-title">NOT B</div>
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon 
                points="10,25 10,75 60,50" 
                stroke="currentColor" 
                fill="none" 
                strokeWidth="3"
                className={outputNOT_B ? "text-blue-500" : "text-gray-400"}
              />
              <circle cx="70" cy="50" r="10" stroke="currentColor" fill="none" strokeWidth="3" className={outputNOT_B ? "text-blue-500" : "text-gray-400"} />
              <line x1="0" y1="50" x2="10" y2="50" stroke={inputB ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
              <line x1="80" y1="50" x2="100" y2="50" stroke={outputNOT_B ? "#3B82F6" : "#D1D5DB"} strokeWidth="3" />
            </svg>
          </div>
          <div className="gate-output">{outputNOT_B ? '1' : '0'}</div>
        </div>
      </div>
      
      <div className="truth-table-section">
        <h2 className="truth-table-title">Truth Table</h2>
        <div className="truth-table-container">
          <table className="truth-table">
            <thead>
              <tr>
                <th>Input A</th>
                <th>Input B</th>
                <th>AND</th>
                <th>OR</th>
                <th>XOR</th>
                <th>NAND</th>
                <th>NOR</th>
                <th>XNOR</th>
                <th>NOT A</th>
                <th>NOT B</th>
              </tr>
            </thead>
            <tbody>
              <tr className={!inputA && !inputB ? "active-row" : ""}>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr className={!inputA && inputB ? "active-row" : ""}>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
              </tr>
              <tr className={inputA && !inputB ? "active-row" : ""}>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr className={inputA && inputB ? "active-row" : ""}>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="info-section">
        <h2 className="info-title">How to Use</h2>
        <p className="mb-4">Toggle the Input A and Input B switches to see how different logic gates respond to various input combinations. The active gates and connections will highlight in blue.</p>
        
        <h3 className="info-subtitle">Logic Gates Explained</h3>
        <ul className="gates-list">
          <li><strong>AND:</strong> Output is 1 only when both inputs are 1</li>
          <li><strong>OR:</strong> Output is 1 when at least one input is 1</li>
          <li><strong>XOR:</strong> Output is 1 when inputs are different</li>
          <li><strong>NAND:</strong> Opposite of AND gate</li>
          <li><strong>NOR:</strong> Opposite of OR gate</li>
          <li><strong>XNOR:</strong> Opposite of XOR gate (output is 1 when inputs are the same)</li>
          <li><strong>NOT:</strong> Inverts the input (1 becomes 0, 0 becomes 1)</li>
        </ul>
      </div>
    </div>
  );
};

export default LogicGatesDemo;