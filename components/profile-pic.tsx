import Image from "next/image";


export default function ProfilePic() {
	return (
		<div className="">
			<Image
				src='/images/octocat.png'
				height={500}
				width={500}
				alt='Profile picture'
			/>
		</div>
	);
}
