```bash
npm i react-morse-code

import { MorseModule, MorseProps } from "react-morse-code"

export default function Morse({letter, number, phrase}:MorseProps){
  const obj = new MorseModule({letter: letter, number: number, phrase: phrase})

  const phraseCode = obj.convertPhraseToMorse(phrase)
  const letterCode = obj.convertOnlyLetterToMorse()
  const numberCode = obj.convertOnlyNumberToMorse()

  return(
    <div>
      <p>{letter}: {letterCode}</p>
      <p>{number}: {numberCode}</p>
      <p>{phrase}: {phraseCode}</p>
    </div>
  )
}
```
