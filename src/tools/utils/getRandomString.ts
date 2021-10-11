export const getRandomString = (length: number, upperCase: boolean) => {
    const str = Math.random()
        .toString(20)
        .substr(2, length);

    return upperCase ? str.toUpperCase() : str;
};
