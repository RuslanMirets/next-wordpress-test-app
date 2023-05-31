import { getPostBySlug } from "@/api/wp-api";
import Heading from "@/components/Heading/Heading";
import Container from "@/components/container/Container";
import { Metadata } from "next";

type Props = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({
	params: { slug },
}: Props): Promise<Metadata> {
	const post = await getPostBySlug(slug);

	return {
		title: post.title,
	};
}

export default async function Post({ params: { slug } }: Props) {
	const post = await getPostBySlug(slug);

	return (
		<div>
			<Container>
				{post && (
					<article>
						<Heading>{post.title}</Heading>
						<div dangerouslySetInnerHTML={{ __html: post.content }} />
					</article>
				)}
			</Container>
		</div>
	);
}
