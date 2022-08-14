import styles from "./css/Grid.module.css";

const GridItem = (props) => {
	return (
		<div className={styles.gridItem}>
			<h3>{props.title}</h3>
			<img src={props.thumbnail_url ? props.thumbnail_url : props.hdurl!== "" ? props.hdurl : props.url}  alt={props.title} />
			<div className={styles.explanation}>
				<p>{props.explanation}</p>
			</div>
		</div>
	)
}

export default GridItem;