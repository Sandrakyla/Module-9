
window.onload = function()
{
    const generateButton = document.getElementById('generateButton');
    const clearButton = document.getElementById('clearButton');

    generateButton.addEventListener('click', () => {
        const person = personGenerator.getPerson();
        document.getElementById('firstNameOutput').innerText = person.firstName;
        document.getElementById('surnameOutput').innerText = person.surname;
        document.getElementById('genderOutput').innerText = person.gender;
        document.getElementById('birthYearOutput').innerText = person.birthYear;
    });

    clearButton.addEventListener('click', () => {
        document.getElementById('firstNameOutput').innerText = "Имя";
        document.getElementById('surnameOutput').innerText = "Фамилия";
        document.getElementById('genderOutput').innerText = "Пол";
        document.getElementById('birthYearOutput').innerText = "Год";
    });
};

