
const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Expected event');
    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight) {
        Result('Invalid Weight!', false);
        return;
    }
    if (!height) {
        Result('Invalid Height!', false);
        return;
    }

    const bmi = getBmi(weight, height); 
    const bmidegree = getBmiClass(bmi);
    const msg = `Your BMI is ${bmi} (${bmidegree})`;
    console.log(bmidegree, bmi);

    Result(msg, true);
});

function getBmiClass(bmi) {
    const Bmidegree = ['Underweight', 'Normal Weight', 'Overweight',
    'Obese (class 1)', 'Obese (class 2)', 'Obese (class 3)'];
    if (bmi >= 39.9) return Bmidegree[5];
    if (bmi >= 34.9) return Bmidegree[4];
    if (bmi >= 29.9) return Bmidegree[3];
    if (bmi >= 24.9) return Bmidegree[2];
    if (bmi >= 18.5) return Bmidegree[1];
    if (bmi < 18.5)  return Bmidegree[0];
    }
    
    

function getBmi (weight, height) {
    const bmi = weight / height **2;
    return bmi.toFixed(2);
}

function createP () {
    const p = document.createElement('p');
    return p;
}

function Result (msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';
    const p = createP ();
    
    if (isValid) { 
        p.classList.add('p-result');
    } else {
        p.classList.add('error')
    }

    p.innerHTML = msg;
    result.appendChild(p);
}
