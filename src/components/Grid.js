import React, { useEffect, useState } from "react";
import GridItem from "./GridItem";
import styles from "./css/Grid.module.css";

const apiKey = process.env.REACT_APP_APIKEY;

const Grid = (props) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const fetchImages = async () => {
			let startDate = ""
			let endDate = ""
			let date = ""
			if(props.fromFormatDate && props.toFormatDate) {
				startDate += "&start_date=" + props.fromFormatDate;
				endDate += "&end_date=" + props.toFormatDate;
			}else if (props.fromFormatDate) {
				date += "&date=" + props.fromFormatDate;
			}else if (props.toFormatDate) {
				date += "&date=" + props.toFormatDate;
			}else {
				// default to today?
			}
			const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&thumbs=True${startDate}${endDate}${date}`
			console.log(url)
			const resp = await fetch(url);
			let data = await resp.json();
			if(data.error) {
				console.log(data.error);
			} else {
				if(data.url){
					data = [data];
				}
				setImages(data);
			}
		}
		fetchImages();
	}, [props.fromFormatDate, props.toFormatDate]);



	return (
		<div className={styles.gridContainer}>
			{images.map((image) => (
				<GridItem key={image.date} {...image} />
			))}
		</div>
	)
}

export default Grid;