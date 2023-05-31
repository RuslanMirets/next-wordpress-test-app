"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import Container from "../container/Container";

interface IMenu {
	title: string;
	url: string;
}

const menu: IMenu[] = [
	{ title: "Главная", url: "/" },
	{ title: "Блог", url: "/blog" },
];

export default function Header() {
	return (
		<header className={styles.root}>
			<Container>
				<div className={styles.container}>
					<nav>
						<ul className={styles.navList}>
							{menu.map((item) => (
								<li key={item.url}>
									<Link href={item.url}>{item.title}</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</Container>
		</header>
	);
}
