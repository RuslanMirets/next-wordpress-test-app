import { getPageBySlug } from "@/api/wp-api";
import Heading from "@/components/Heading/Heading";
import Container from "@/components/container/Container";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
	const page = await getPageBySlug();

	return {
		title: page.title,
	};
}

export default async function CGB() {
	const page = await getPageBySlug();

	return (
		<div>
			<Container>
				<Heading>{page.title}</Heading>
				<div>
					<h2 dangerouslySetInnerHTML={{ __html: page.rm.introTitle }} />
					<div>
						<p>{page.rm.introDesc}</p>
					</div>
					<div
						style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
					>
						{page.rm.workList.map((item) => (
							<div key={item.workListImg.sourceUrl}>
								<div>{item.workListName}</div>
								<div>
									<Image
										src={item.workListImg.sourceUrl}
										width={300}
										height={300}
										alt={item.workListName}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</div>
	);
}
