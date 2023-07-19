import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { detectContentType } from 'next/dist/server/image-optimizer'

// set the directory where the posts are located
// get filenames
// loopthrough that and get the id by removing the md from the end of the filename string
// create full file path 
//r ead file content adn parse that with matter
//return and object with id and file detectContentTypesort through theat data and arrange by Date


const directoryName = path.join(process.cwd(),'posts')

export function getSortedPostsData(){

	const fileNames = fs.readdirSync(directoryName)
	const allPostsData = fileNames.map((fileName)=>{
		const id = fileName.replace(/\.md$/,'')
		
		const filePath = path.join(directoryName,fileName)
		const fileContent = fs.readFileSync(filePath,'utf8')

		const matterContent = matter(fileContent)
		return {
			id,
			...matterContent.data
		}
	})

	allPostsData.sort((a,b)=>{
		if(a.date < b.date){
			return 1
		}else{
			return -1
		}
	})

}