let currentDate = new Date(); // Получаем текущую дату
let birthDate = document.getElementById("birthday");
let btn = document.getElementById('btn');
let result = document.querySelector('#result');

function calculateBirthday() {
    let birthday = new Date(birthDate.value);
    console.log(birthday);
    birthday.setFullYear(currentDate.getFullYear()); // Устанавливаем год текущей даты для объекта даты рождения
    if (birthday < currentDate) {
        birthday.setFullYear(birthday.getFullYear() + 1);
    }
    let timeDiff = Math.abs(birthday.getTime() - currentDate.getTime());
    let daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    result.innerHTML = "До дня рождения осталось " + daysDiff + " дней"; 

    if (birthDate.value != '') { 
        calculateBirthday();
    }  
    else { 
        result.innerHTML = "Введите дату рождения"; 
    }
}
btn.addEventListener('click', calculateBirthday);
