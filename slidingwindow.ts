export {}

let input: number[] =  [4,2,2,7,8,1,2,8,10];

const findSmallestSubArray = (input : number[], targetSum: number) : void =>{

	let smallestArraySize = Number.MAX_VALUE
	let startPos:number = 0
	let currSum: number = 0
	for (let i:number=0; i < input.length; i++){

		console.log("Value of i",i)
		currSum += input[i]

		while (currSum >= targetSum){
			smallestArraySize = Math.min(currSum,i - startPos +1)
			if (smallestArraySize == 1){
				console.log(smallestArraySize)
				return
			}
			currSum -= input[startPos]
			startPos++
		}


	}
	console.log(smallestArraySize)

}

findSmallestSubArray(input, 9)