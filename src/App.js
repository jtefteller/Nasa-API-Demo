import './App.css';
import {useState} from 'react';
import DatePicker from "react-datepicker";
import Grid from "./components/Grid";

import styles from "./components/css/Grid.module.css";
import "react-datepicker/dist/react-datepicker.css";


function App() {
  const [fromDate, setFromDate] = useState(new Date());
  const [fromFormatDate, setFromFormatDate] = useState("");
  const [toDate, setToDate] = useState(new Date());
  const [toFormatDate, setToFormatDate] = useState("");

  const formatDate = (date, setCb, setFmtDate) => { 
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    setCb(date);
    setFmtDate(`${year}-${month}-${day}`);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContainer}>
        {/* https://reactdatepicker.com/ */}
        <div className={styles.controlsContainer}>
          <h1>Nasa API Demo</h1>
          <div className={styles.controls}>
            <div className={styles.textAlignCenter}>
              <label>Start Date</label>
              <DatePicker selected={fromDate} onChange={(date) => formatDate(date, setFromDate, setFromFormatDate)} />
            </div>
            <div className={styles.textAlignCenter}>
              <label>End Date</label>
              <DatePicker selected={toDate} onChange={(date) => formatDate(date, setToDate, setToFormatDate)} />
            </div>
          </div>
        </div>
        <Grid fromFormatDate={fromFormatDate} toFormatDate={toFormatDate}></Grid>
      </div>
    </div>
  );
}

export default App;
