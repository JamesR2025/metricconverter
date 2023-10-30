function calculate () {
    const input = parseFloat(document.getElementById('input').value);
    const output = document.getElementById('output');

    const inputUnit = document.getElementById('fromUnit').value;

    const nanometersValue = document.getElementById('nanometersValue');
    const micrometersValue = document.getElementById('micrometersValue');
    const millimetersValue = document.getElementById('millimetersValue');
    const centimetersValue = document.getElementById('centimetersValue');
    const decimetersValue = document.getElementById('decimetersValue');
    const metersValue = document.getElementById('metersValue');
    const decametersValue= document.getElementById('decametersValue');
    const hectametersValue = document.getElementById('hectometersValue');
    const kilometersValue = document.getElementById('kilometersValue');
    const megametersValue = document.getElementById('megametersValue');
    const terametersValue = document.getElementById('terametersValue');



    function findMeters (input, inputUnit) {
        if (inputUnit === 'nanometers'){
            return input / 1000000000;
        } else if (inputUnit === 'micrometers'){
            return input / 1000000;
        } else if (inputUnit === 'millimeters'){
            return input / 1000;
        } else if (inputUnit === 'centimeters'){
            return input / 100;
        } else if (inputUnit === 'decimeters'){
            return input * (1/10);
        } else if (inputUnit === 'meters'){
            return input;
        } else if (inputUnit === 'decameters'){
            return input * 10;
        } else if (inputUnit === 'hectometers'){
            return input * 100;
        } else if (inputUnit === 'kilometers'){
            return input * 1000;
        } else if (inputUnit === 'megameters'){
            return input * 1000000;
        } else if (inputUnit === 'gigameters'){
            return input * 1000000000;
        } else if (inputUnit === 'terameters'){
            return input * 1000000000000;
        }
    };

    const meters = findMeters(input, inputUnit);

        nanometersValue.textContent = meters * 1000000000 + ' nanometers';
        micrometersValue.textContent = meters * 1000000 + ' micrometers';
        millimetersValue.textContent = meters * 1000 + ' millimeters';
        centimetersValue.textContent = meters * 100 + ' centimeters';
        decimetersValue.textContent = meters * 10 + ' decimeters';
        metersValue.textContent = meters + ' meters';
        decametersValue.textContent = meters * (1/10) + ' decameters';
        hectametersValue.textContent = meters * (1/100) + ' hectameters';
        kilometersValue.textContent = meters * (1/1000) + ' kilometers';
        megametersValue.textContent = meters * (1/1000000) + ' megameters';
        gigametersValue.textContent = meters * (1/1000000000) + ' gigameters';
        terametersValue.textContent = meters * (1/1000000000000) + ' terameters';

}