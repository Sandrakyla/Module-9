
window.onload = function()
{
    const generateButton = document.getElementById('generateButton');
    const clearButton = document.getElementById('clearButton');

    generateButton.addEventListener('click', () => {
        const person = personGenerator.getPerson();
        document.getElementById('firstNameOutput').innerText = person.firstName;
        document.getElementById('surnameOutput').innerText = person.surname;
        document.getElementById('patronymicOutput').innerText = person.patronymic;
        document.getElementById('genderOutput').innerText = person.gender;
        document.getElementById('birthYearOutput').innerText = person.birthYear;
        document.getElementById('professionOutput').innerText = person.profession;
        document.getElementById('birthDateOutput').innerText = person.birthDate;
    });

    clearButton.addEventListener('click', () => {
        document.getElementById('firstNameOutput').innerText = "Имя";
        document.getElementById('surnameOutput').innerText = "Фамилия";
        document.getElementById('patronymicOutput').innerText = "Отчество";
        document.getElementById('genderOutput').innerText = "Пол";
        document.getElementById('birthYearOutput').innerText = "Год";
        document.getElementById('professionOutput').innerText = "Профессия";
        document.getElementById('birthDateOutput').innerText = "Дата рождения";
    });

};

