import Link from 'next/link'
import Head from 'next/head'
import ProfilePic from '../../components/profile-pic'
export default function FirstPost(){
	return (
		<>
		<Head>
			<title>First Post</title>
		</Head>
		<h1>First blog Post</h1>
		<h2>
			Go to the <Link href="/">Home</Link> page
		</h2>
		<ProfilePic />
		</>
	)
}