const gameSeasons = () => {
    
    const checkSeason = () => {
    
        let monthNumber = Number(prompt('Month number?'));
    
        if (isNaN(monthNumber) === true) {
            return 'This value is not a number';
        } else if (1 <= monthNumber && monthNumber <= 2 || monthNumber === 12) {
                return 'Winter';
                } else if (3 <= monthNumber && monthNumber <= 5) {
                    return 'Spring';
                } else if (6 <= monthNumber && monthNumber <= 8) {
                    return 'Summer';
                } else if (9 <= monthNumber && monthNumber <= 11) {
                    return 'Autumn';
                } else {
                    return `Month number ${monthNumber} does not exist`;
                };
        };
    console.log(checkSeason());

}