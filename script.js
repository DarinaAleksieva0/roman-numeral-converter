const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const numerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
];

const romanNumeral = () => {
    let value = number.value;

    output.classList.remove('hidden'); 
    output.classList.remove('error', 'success');
    if (!value) {
        output.innerText = 'Please enter a valid number.';
        output.classList.add('error'); // Add error class
    } else if (value <= 0) {
        output.innerText = 'Please enter a number greater than or equal to 1.';
        output.classList.add('error'); // Add error class
    } else if (value >= 4000) {
        output.innerText = 'Please enter a number less than or equal to 3999.';
        output.classList.add('error');
    } else {
        let result = "";

        for (const [roman, number] of numerals) {
            while (value >= number) {
                result += roman;
                value -= number;
            }
        }
        output.innerText = result;
        output.classList.add('success');
    }
    return result;
}


const checkUserInput = () => {
    const inputInt = parseInt(number.value);

    output.classList.remove('hidden'); 
    output.classList.remove('error', 'success');

    if (!number.value || inputInt <= 0) {
        output.innerText = "Please provide a decimal number greater than or equal to 1.";
        output.classList.add('error');
        return;
    }
    const result = romanNumeral(inputInt);
    output.innerText = result;
    output.classList.add('success');

    number.value = "";
};


number.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        checkUserInput();
        romanNumeral();
    }
});

convertBtn.addEventListener('click', romanNumeral);
