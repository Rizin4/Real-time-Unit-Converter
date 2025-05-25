// Real-time Unit Converter JavaScript
document.addEventListener('DOMContentLoaded', function () {

    // Utility function to round to 4 decimal places for precision
    function roundToPrecision(num, decimals = 4) {
        return Math.round((num + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals);
    }

    // Visual feedback for active conversion
    function showConversionFeedback(input) {
        input.classList.add('converting');
        setTimeout(() => {
            input.classList.remove('converting');
        }, 300);
    }

    // Temperature Conversion
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');

    if (celsiusInput && fahrenheitInput) {
        celsiusInput.addEventListener('input', function () {
            const celsius = parseFloat(this.value);
            if (!isNaN(celsius)) {
                const fahrenheit = roundToPrecision((celsius * 9 / 5) + 32);
                fahrenheitInput.value = fahrenheit;
                showConversionFeedback(fahrenheitInput);
            } else if (this.value === '') {
                fahrenheitInput.value = '';
            }
        });

        fahrenheitInput.addEventListener('input', function () {
            const fahrenheit = parseFloat(this.value);
            if (!isNaN(fahrenheit)) {
                const celsius = roundToPrecision((fahrenheit - 32) * 5 / 9);
                celsiusInput.value = celsius;
                showConversionFeedback(celsiusInput);
            } else if (this.value === '') {
                celsiusInput.value = '';
            }
        });
    }

    // Weight Conversion
    const kilogramsInput = document.getElementById('kilograms');
    const poundsInput = document.getElementById('pounds');

    if (kilogramsInput && poundsInput) {
        kilogramsInput.addEventListener('input', function () {
            const kg = parseFloat(this.value);
            if (!isNaN(kg)) {
                const pounds = roundToPrecision(kg * 2.20462);
                poundsInput.value = pounds;
                showConversionFeedback(poundsInput);
            } else if (this.value === '') {
                poundsInput.value = '';
            }
        });

        poundsInput.addEventListener('input', function () {
            const pounds = parseFloat(this.value);
            if (!isNaN(pounds)) {
                const kg = roundToPrecision(pounds / 2.20462);
                kilogramsInput.value = kg;
                showConversionFeedback(kilogramsInput);
            } else if (this.value === '') {
                kilogramsInput.value = '';
            }
        });
    }

    // Distance Conversion
    const kilometersInput = document.getElementById('kilometers');
    const milesInput = document.getElementById('miles');

    if (kilometersInput && milesInput) {
        kilometersInput.addEventListener('input', function () {
            const km = parseFloat(this.value);
            if (!isNaN(km)) {
                const miles = roundToPrecision(km / 1.609344);
                milesInput.value = miles;
                showConversionFeedback(milesInput);
            } else if (this.value === '') {
                milesInput.value = '';
            }
        });

        milesInput.addEventListener('input', function () {
            const miles = parseFloat(this.value);
            if (!isNaN(miles)) {
                const km = roundToPrecision(miles * 1.609344);
                kilometersInput.value = km;
                showConversionFeedback(kilometersInput);
            } else if (this.value === '') {
                kilometersInput.value = '';
            }
        });
    }

    // Enhanced Navigation with Smooth Scrolling
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Add some visual feedback for successful page load
    console.log('🚀 Real-time Unit Converter loaded successfully!');
    console.log('⚡ All conversions happen instantly as you type!');

    // Show a brief welcome message
    setTimeout(() => {
        const welcomeMessage = document.createElement('div');
        welcomeMessage.innerHTML = '⚡ Real-time Converter Ready!';
        welcomeMessage.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: linear-gradient(45deg, #00b894, #00cec9);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 25px;
                    font-weight: bold;
                    z-index: 1000;
                    animation: slideIn 0.5s ease, fadeOut 0.5s ease 2.5s forwards;
                `;

        // Add keyframes for animations
        const style = document.createElement('style');
        style.textContent = `
                    @keyframes slideIn {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes fadeOut {
                        from { opacity: 1; }
                        to { opacity: 0; }
                    }
                `;
        document.head.appendChild(style);
        document.body.appendChild(welcomeMessage);

        setTimeout(() => {
            if (welcomeMessage.parentNode) {
                welcomeMessage.parentNode.removeChild(welcomeMessage);
            }
        }, 3000);
    }, 500);

});