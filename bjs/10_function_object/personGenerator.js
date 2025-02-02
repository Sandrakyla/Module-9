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

    randomBirthYear: function () {
        return this.randomIntNumber(2003, 1950); // Годы от 1950 до 2003
    },

    getPerson: function () {
        const gender = this.randomGender();
        const firstName = this.randomFirstName(gender);
        const surname = this.randomSurname(gender);
        const birthYear = this.randomBirthYear();

        return {
            gender,
            firstName,
            surname,
            birthYear
        };
    }
};
