"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MorseModule = void 0;
class MorseModule {
    constructor({ letter, number, phrase }) {
        this.HashMorseTable = {
            'A': '.-',
            'B': '-...',
            'C': '-.-.',
            'D': '-..',
            'E': '.',
            'F': '..-.',
            'G': '--.',
            'H': '....',
            'I': '..',
            'J': '.---',
            'K': '-.-',
            'L': '.-..',
            'M': '--',
            'N': '-.',
            'O': '---',
            'P': '.--.',
            'Q': '--.-',
            'R': '.-.',
            'S': '...',
            'T': '-',
            'U': '..-',
            'V': '...-',
            'W': '.--',
            'X': '-..-',
            'Y': '-.--',
            'Z': '--..',
            1: '.----',
            2: '..---',
            3: '...--',
            4: '....-',
            5: '.....',
            6: '-....',
            7: '--...',
            8: '---..',
            9: '----.',
            0: '-----'
        };
        this.letter = letter;
        this.number = number;
        this.phrase = phrase;
    }
    convertLetterToMorse(letter) {
        const upperLetter = letter.toUpperCase();
        return this.HashMorseTable[upperLetter] || '';
    }
    convertNumberToMorse(number) {
        return this.HashMorseTable[number] || '';
    }
    convertWordToMorse(word) {
        const char = word.toUpperCase().split('');
        const patternToLetter = /^[A-Z]/;
        const patternToIntNumber = /^\d$/;
        const morseWords = char.map((word) => {
            if (patternToLetter.test(word)) {
                return this.convertLetterToMorse(word);
            }
            else if (patternToIntNumber.test(word)) {
                return this.convertNumberToMorse(parseInt(word));
            }
            else {
                throw new Error(`It's not possible convert to morse because anyone paramethers will be satisfied.`);
            }
        });
        return morseWords.join(' ');
    }
    convertPhraseToMorse(phrase) {
        const words = phrase.trim().split(' ');
        const morseLetters = words.map((word) => this.convertWordToMorse(word));
        return morseLetters.join(' / ');
    }
    convertOnlyLetterToMorse() {
        const morseLetter = this.convertLetterToMorse(this.letter);
        return `${morseLetter}`;
    }
    convertOnlyNumberToMorse() {
        const morseNumber = this.convertNumberToMorse(this.number);
        return `${morseNumber}`;
    }
    convertToMorse() {
        const morseLetter = this.convertLetterToMorse(this.letter);
        const morseNumber = this.convertNumberToMorse(this.number);
        return `${morseLetter} | ${morseNumber}`;
    }
}
exports.MorseModule = MorseModule;
