export interface MorseProps {
  letter: string
  number: number
  phrase: string
}

export class MorseModule {
  private letter: string
  private number: number
  private phrase: string

  constructor({
    letter, number, phrase
  }: MorseProps) {
    this.letter = letter
    this.number = number
    this.phrase = phrase
  }

  private HashMorseTable: { [key: string]: string } = {
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
  }

  private convertLetterToMorse(letter: string): string {
    const upperLetter = letter.toUpperCase()
    return this.HashMorseTable[upperLetter] || ''
  }

  private convertNumberToMorse(number: number): string {
    return this.HashMorseTable[number] || ''
  }

  private convertWordToMorse(word: string): string {
    const char = word.toUpperCase().split('')
    const patternToLetter = /^[A-Z]/
    const patternToIntNumber = /^\d$/
    const morseWords = char.map((word) => {
      if (patternToLetter.test(word)) {
        return this.convertLetterToMorse(word)
      } else if (patternToIntNumber.test(word)) {
        return this.convertNumberToMorse(parseInt(word))
      } else {
        throw new Error(`It's not possible convert to morse because anyone paramethers will be satisfied.`)
      }
    })
    return morseWords.join('')
  }

  public convertPhraseToMorse(phrase: string): string {
    const words = phrase.trim().split('')
    const morseLetters = words.map((word) => this.convertWordToMorse(word))
    return morseLetters.join(' / ')
  }

  public convertOnlyLetterToMorse(): string {
    const morseLetter = this.convertLetterToMorse(this.letter)
    return `${morseLetter}`
  }

  public convertOnlyNumberToMorse(): string {
    const morseNumber = this.convertNumberToMorse(this.number)
    return `${morseNumber}`
  }

  public convertToMorse(): string {
    const morseLetter = this.convertLetterToMorse(this.letter)
    const morseNumber = this.convertNumberToMorse(this.number)
    return `${morseLetter} | ${morseNumber}`
  }
}