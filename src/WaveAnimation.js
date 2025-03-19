import React, { useState, useMemo } from 'react';
import './WaveAnimation.css';

const WaveAnimation = () => {
    const [selectedColor, setSelectedColor] = useState('#AA00FF');

    const colors = [
        { className: 'red', code: '#D50000' },
        { className: 'blue', code: '#2962FF' },
        { className: 'green', code: '#64DD17' },
        { className: 'orange', code: '#FF6F00' },
        { className: 'violet', code: '#AA00FF' },
    ];

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    // Memoize combined dynamic CSS so it's recalculated only when selectedColor changes.
    const combinedDynamicStyles = useMemo(() => {
        const keyframeStyles = `
            @keyframes updown {
                0% { transform: rotateX(-50deg) translateY(0%); border: 2px solid #000; }
                50% { transform: rotateX(-50deg) translateY(-50px); border: 2px solid ${selectedColor}; }
                100% { transform: rotateX(-50deg) translateY(0%); border: 2px solid #000; }
            }
        `;
    
        const waveStyles = Array.from({ length: 20 }, (_, i) => {
            const delay = ((i + 1) * 0.1).toFixed(1);
            const pixels = (i + 4) * 3 - 1;
            return `.waves-${i + 1} { height: ${pixels}vw; width: ${pixels}vw; animation: updown 2s ${delay}s infinite ease; }`;
        }).join('\n');
    
        return keyframeStyles + '\n' + waveStyles;
    }, [selectedColor]);

    // Create 20 wave DIVs.
    const waves = Array.from({ length: 20 }, (_, i) => (
        <div key={i} className={`wave waves-${i + 1}`}></div>
    ));

    return (
        <main>
            <div className="colorContainer">
                {colors.map((color, index) => (
                    <div 
                        key={index} 
                        className={`color ${color.className}`} 
                        onClick={() => handleColorClick(color.code)}
                    ></div>
                ))}
            </div>
            <h1>Design.</h1>
            <div className="choosedColor">
                <h1 className="colorText">{selectedColor}</h1>
            </div>
            <div className="waves-con">
                {waves}
            </div>
            <style dangerouslySetInnerHTML={{ __html: combinedDynamicStyles }} />
        </main>
    );
};

export default WaveAnimation;