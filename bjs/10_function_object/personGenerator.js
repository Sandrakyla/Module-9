const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Анна",
            "id_2": "Мария",
            "id_3": "Елена",
            "id_4": "Ольга",
            "id_5": "Татьяна",
            "id_6": "Наталья",
            "id_7": "Екатерина",
            "id_8": "Ирина",
            "id_9": "Светлана",
            "id_10": "Виктория"
        }
    }`,

    patronymicMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Иванович",
            "id_2": "Петрович",
            "id_3": "Сергеевич",
            "id_4": "Александрович",
            "id_5": "Дмитриевич",
            "id_6": "Николаевич",
            "id_7": "Андреевич",
            "id_8": "Михайлович",
            "id_9": "Владимирович",
            "id_10": "Викторович"
        }
    }`,
    patronymicFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Ивановна",
            "id_2": "Петровна",
            "id_3": "Сергеевна",
            "id_4": "Александровна",
            "id_5": "Дмитриевна",
            "id_6": "Николаевна",
            "id_7": "Андреевна",
            "id_8": "Михайловна",
            "id_9": "Владимировна",
            "id_10": "Викторовна"
        }
    }`,

    professionMaleJson: `{
        "count": 5,
        "list": {
            "id_1": "слесарь",
            "id_2": "солдат",
            "id_3": "шахтёр",
            "id_4": "инженер",
            "id_5": "водитель"
        }
    }`,
    professionFemaleJson: `{
        "count": 5,
        "list": {
            "id_1": "учительница",
            "id_2": "медсестра",
            "id_3": "бухгалтер",
            "id_4": "дизайнер",
            "id_5": "повар"
        }
    }`,

    monthsJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    randomMonth: function () {
        return this.randomValue(this.monthsJson);
    },

    randomDay: function (month) {
        let maxDay;
        switch (month) {
            case "февраля":
                maxDay = 28;
                break;
            case "апреля":
            case "июня":
            case "сентября":
            case "ноября":
                maxDay = 30;
                break;
            default:
                maxDay = 31;
        }
        return this.randomIntNumber(maxDay, 1);
    },

    randomBirthDate: function () {
        const month = this.randomMonth();
        const day = this.randomDay(month);
        return `${day} ${month}`;
    },

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function () {
        return this.randomIntNumber(1) === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName: function (gender) {
        return gender === this.GENDER_MALE
            ? this.randomValue(this.firstNameMaleJson)
            : this.randomValue(this.firstNameFemaleJson);
    },


    randomSurname: function (gender) {
        const surname = this.randomValue(this.surnameJson);
        return gender === this.GENDER_FEMALE ? surname + "а" : surname;
    },

    randomPatronymic: function (gender) {
        return gender === this.GENDER_MALE
            ? this.randomValue(this.patronymicMaleJson)
            : this.randomValue(this.patronymicFemaleJson);
    },

    randomProfession: function (gender) {
        return gender === this.GENDER_MALE
            ? this.randomValue(this.professionMaleJson)
            : this.randomValue(this.professionFemaleJson);
    },

    randomBirthYear: function () {
        return this.randomIntNumber(2003, 1950); // Годы от 1950 до 2003
    },

    getPerson: function () {
        const gender = this.randomGender();
        const firstName = this.randomFirstName(gender);
        const surname = this.randomSurname(gender);
        const patronymic = this.randomPatronymic(gender);
        const profession = this.randomProfession(gender);
        const birthYear = this.randomBirthYear();
        const birthDate = this.randomBirthDate();

        return {
            gender,
            firstName,
            surname,
            patronymic,
            profession,
            birthYear,
            birthDate
        };
    }
};
