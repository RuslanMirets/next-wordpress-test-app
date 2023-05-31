import { getPosts } from "@/api/wp-api";
import Heading from "@/components/Heading/Heading";
import Container from "@/components/container/Container";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Блог",
};

export default async function Blog() {
	const posts = await getPosts();

	return (
		<div>
			<Container>
				<Heading>Blog</Heading>
				<ul>
					{posts.map((post) => (
						<li key={post.slug}>
							<Link href={`/blog/${post.slug}`}>{post.title}</Link>
						</li>
					))}
				</ul>
			</Container>
		</div>
	);
}
