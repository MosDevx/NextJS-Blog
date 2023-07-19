import Link from 'next/link'
import Head from 'next/head'
import ProfilePic from '../../components/profile-pic'
import Layout from '../../components/layout'
export default function FirstPost({message}){
	return (
		<Layout>
		<Head>
			<title>First Post</title>
		</Head>
		<h1>First blog Post {message}</h1>
		<h2>
			Go to the <Link href="/">Home</Link> page
		</h2>
		<ProfilePic />
		</Layout>
	)
}