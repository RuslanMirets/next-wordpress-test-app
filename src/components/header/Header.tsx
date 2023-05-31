"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import Container from "../container/Container";
import { usePathname } from "next/navigation";
import cn from "clsx";

interface IMenu {
	title: string;
	url: string;
}

const menu: IMenu[] = [
	{ title: "Главная", url: "/" },
	{ title: "Блог", url: "/blog" },
	{ title: "Основы CG", url: "/cgb" },
];

export default function Header() {
	const pathName = usePathname();

	return (
		<header className={styles.root}>
			<Container>
				<div className={styles.container}>
					<nav>
						<ul className={styles.navList}>
							{menu.map((item) => (
								<li
									className={cn(item.url === pathName && styles.active)}
									key={item.url}
								>
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
