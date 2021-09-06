const abc = 12345
let names: string = 'hey'

//  = functions

const getFullName = (firstName: string, lastName: string): Array<string> => [
  firstName,
  lastName,
]



// ! 1 . Array[string], 2.  string[] || number[]
console.log(getFullName('1', '2'))
