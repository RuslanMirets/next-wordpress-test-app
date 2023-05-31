import { PropsWithChildren } from "react";
import styles from "./container.module.scss";

export default function Container({ children }: PropsWithChildren) {
	return <div className={styles.root}>{children}</div>;
}
