function gameRemember() {

    let array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    array.sort(() => Math.random() - 0.5);
    alert(array.join(', '));
    elementFirst = prompt('Чему равнялся первый элемент массива?');
    elementLast = prompt('Чему равнялся последний элемент массива?');

    if (array[0].toLowerCase() === elementFirst.toLowerCase() && array[6].toLowerCase() === elementLast.toLowerCase()) {
        alert('Meine Respektierung');
    } else if (array[0].toLowerCase() != elementFirst.toLowerCase() && array[6].toLowerCase() != elementLast.toLowerCase()) {
        alert('Ответ неверный');
    } else {
        alert('Вы были близки к победе!');
    };
};