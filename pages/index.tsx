import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

//fetching the data from API
async function fetchData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  return { data };
}

interface Props {
  data: any;
}

export default function Home(props: Props) {
  const [data, setData] = useState(props.data);
  console.log(data);

  // function to reload the API after every call
  async function refresh() {
    const refreshedProps = await fetchData();
    setData(refreshedProps.data);
  }

  return (
    //  head tag for the title
    <>
      <Head>
        <title>Home | Molamgarihat</title>
      </Head>
      <div className={styles.App}>
        <h1 className={styles.comingSoon}>Molamgarihat.com We are coming soon ... </h1>
        <h2 className={styles.headerText}> Advice </h2>
        <p className={styles.paragraph}>{data.slip.advice}</p>
        <button className={styles.button} onClick={refresh}>
          Seek Advice 🤲
        </button>
      </div>
    </>
  );
}

Home.getInitialProps = fetchData;
