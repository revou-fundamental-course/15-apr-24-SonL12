document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const button1 = document.getElementById('btn1');
    const button2 = document.getElementById('btn2');
    
    const contents = document.querySelectorAll('.hide');
    
    contents.forEach(content => {
        content.classList.add('hidden');
    });

    popup.style.display = 'flex';

    button1.addEventListener('click', () => {
        const manual = document.getElementById('input-manual');
        alert('Belum responsive, bukanya make laptop coy');
        closePopup();
        manual.style.display = 'none';
    });

    button2.addEventListener('click', () => {
        const auto = document.getElementById('input-auto');
        alert('Masih banyak bug, pake yang auto aja coy');
        /*closePopup();
        auto.style.display = 'none';*/
    });

    function closePopup() {
        popup.style.visibility = 'hidden';
        
        contents.forEach(content => {
            content.classList.remove('hidden');
        });
    }

    auto();
    manual();
});

function auto(){
    const celsiusInput = document.getElementById("celsius-auto");
    const fahrenheitInput = document.getElementById("fahrenheit-auto");
    const kelvinInput = document.getElementById("kelvin-auto");
    
    const inputs = document.getElementsByClassName("input");
    
    for(let i=0; i<inputs.length; i++){
        let input = inputs[i];
    
        input.addEventListener("input", function(e){
            let value = parseFloat(e.target.value);
        switch(e.target.name){
                case "celsius-auto":
                    fahrenheitInput.value = (value*1.8) + 32;
                    kelvinInput.value = value + 273.15;
                    break;
                case "fahrenheit-auto":
                    celsiusInput.value = (value - 32) / 1.8;
                    kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                    break;
                case "kelvin-auto":
                    celsiusInput.value = value - 273.15;
                    fahrenheitInput.value = ((value - 273.15) * 18) + 32
                    break; 
            }
        });
    }
}

function manual() {
    const fahrenheitInput = document.getElementById("fahrenheit-manual");
    const celsiusInput = document.getElementById("celsius-manual");
    const kelvinInput = document.getElementById("kelvin-manual");
    
    document.getElementById("convert").addEventListener("click", function() {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = parseFloat(celsiusInput.value);
        const kelvin = parseFloat(kelvinInput.value);
    
        // Konversi dari Fahrenheit ke Celsius dan Kelvin
        if (!isNaN(fahrenheit)) {
            celsiusInput.value = (fahrenheit - 32) * 5 / 9;
            kelvinInput.value = (fahrenheit - 32) * 5 / 9 + 273.15;
        }
    
        // Konversi dari Celsius ke Fahrenheit dan Kelvin
        if (!isNaN(celsius)) {
            fahrenheitInput.value = (celsius * 9 / 5) + 32;
            kelvinInput.value = celsius + 273.15;
        }
    
        // Konversi dari Kelvin ke Fahrenheit dan Celsius
        if (!isNaN(kelvin)) {
            fahrenheitInput.value = (kelvin - 273.15) * 9 / 5 + 32;
            celsiusInput.value = kelvin - 273.15;
        }
    });
    
    document.getElementById("reset").addEventListener("click", function() {
        fahrenheitInput.value = "";
        celsiusInput.value = "";
        kelvinInput.value = "";
    });
    
    document.getElementById("reverse").addEventListener("click", function() {
        // Simpan sementara nilai input dan label
        const tempFahrenheitValue = fahrenheitInput.value;
        const tempCelsiusValue = celsiusInput.value;
        const tempKelvinValue = kelvinInput.value;
    
        const tempFahrenheitLabel = document.querySelector('label[for="fahrenheit-manual"]').innerText;
        const tempCelsiusLabel = document.querySelector('label[for="celsius-manual"]').innerText;
        const tempKelvinLabel = document.querySelector('label[for="kelvin-manual"]').innerText;
    
        // Menukar nilai input
        fahrenheitInput.value = tempKelvinValue;
        celsiusInput.value = tempFahrenheitValue;
        kelvinInput.value = tempCelsiusValue;
    
        // Menukar label
        document.querySelector('label[for="fahrenheit-manual"]').innerText = tempKelvinLabel;
        document.querySelector('label[for="celsius-manual"]').innerText = tempFahrenheitLabel;
        document.querySelector('label[for="kelvin-manual"]').innerText = tempCelsiusLabel;
    });
    
    // document.getElementById("reverse").addEventListener("click", function() {
    //     const tempFahrenheit = fahrenheitInput.value;
    //     const tempCelsius = celsiusInput.value;
    //     const tempKelvin = kelvinInput.value;

    //     // Tukar nilai input
    //     fahrenheitInput.value = tempKelvin;
    //     celsiusInput.value = tempFahrenheit;
    //     kelvinInput.value = tempCelsius;

    //     // Tukar label
    //     document.querySelector('label[for="fahrenheit-manual"]').innerText = "Kelvin";
    //     document.querySelector('label[for="celsius-manual"]').innerText = "Fahrenheit";
    //     document.querySelector('label[for="kelvin-manual"]').innerText = "Celsius";
    // });
}
    