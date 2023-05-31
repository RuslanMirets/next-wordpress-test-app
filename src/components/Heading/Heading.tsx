import { PropsWithChildren } from "react";
import styles from "./heading.module.scss";

export default function Heading({ children }: PropsWithChildren) {
	return <h1 className={styles.root}>{children}</h1>;
}
