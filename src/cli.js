import readlineSync from 'readline-sync';

export default () => {
    const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

return('Hello, '+name+'!')
}