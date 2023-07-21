export {}

const sampleString: string = 'HelloWorld'

function reverseString(input: string) :void{
	let start: number = 0
	let end : number = input.length - 1 
	let inputArray: string[] = input.split('')

	while (start<= end){
		let temp = inputArray[start]
		inputArray[start] = inputArray[end]
		inputArray[end] = temp
		start++
		end--
	}

	console.log(inputArray.join(''))


}

reverseString(sampleString)