export {}

let inputString : string = 'anna'
let anagramString : string = 'nnna'


const anagramChecker = (input: string, anagram:string):boolean =>{

	let frequencyMap = new Map()

	if (input.length !== anagram.length){
		return false
	}

		for (let i = 0;i<input.length;i++){
			let char = input[i]
			if (frequencyMap.has(char)){
				frequencyMap.set(char, frequencyMap.get(char)+1)
			}
			else{
				frequencyMap.set(char,1)
			}
		}

		console.log(frequencyMap.size)
		
		for (let i=0; i<anagram.length; i++){
			let char = anagram[i]
			if (frequencyMap.has(char)){
				frequencyMap.set(char, frequencyMap.get(char) -1 )
				if(frequencyMap.get(char) == 0){
					frequencyMap.delete(char)
				}
			}
		}
		console.log(frequencyMap)
		
		return frequencyMap.size == 0
}
console.log(anagramChecker(inputString,anagramString))