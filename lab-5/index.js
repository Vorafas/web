angular.module('projectRepDemo', [])
    .constant('vacancies', [
        { name: 'Программист 1С', salary: 'от 20 000 до 80 000 руб.', company: 'РДС' },
        { name: 'Бухгалтер', salary: 'от 30 000 до 32 000 руб.', company: 'Демидыч, Компания' },
        { name: 'Менеджер по работе с клиентами (B2B)', salary: 'от 48 000 до 60 000 руб.', company: 'U-Link Пермская Интернет Компания' },
        { name: 'Врач-терапевт', salary: 'от 40 000 до 40 000 руб.', company: 'МЕДИС' },
        { name: 'Руководитель группы по проектированию', salary: 'от 50 000 до 70 000 руб.', company: 'АЛЬБА' }
    ])
    .controller('ngRepDemo', function (vacancies) {
        this.list = vacancies;
    });
