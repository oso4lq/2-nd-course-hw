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
    }
}


/* DRAFT

function gameRemember() {

	let array = ['apple', 'pear', 'melon', 'grape', 'peach', 'orange', 'tangerine'];


    const arrayMixer = () => {
        //let max = array.length;
        let newArray = [];
        
        for (let index = 0; index == array.length; index++) {
        
        const randomiserLim = () => {
            let randomNum = Math.round(Math.random() * (array.length));
            console.log(randomNum);
            return randomNum;
        }
        
        newArray.push(array[randomiserLim()]);
        delete array[randomiserLim()];
        console.log(newArray);
        return newArray;
    };
    };


	alert(arrayMixer().join(', '));
	elementFirst = prompt('first?');
	elementLast = prompt('last?');

		if (array[0].toLowerCase() === elementFirst.toLowerCase() && array[6].toLowerCase() === elementLast.toLowerCase()) {
			alert('Meine Respektierung');
		} else if (array[0].toLowerCase() != elementFirst.toLowerCase() && array[6].toLowerCase() != elementLast.toLowerCase()) {
			alert('nope');
		} else {
			alert('close enough');
		}
}
gameRemember();
*/