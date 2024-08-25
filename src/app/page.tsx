"use client"

import { useEffect, useState } from 'react';
import styles from "./page.module.css";

export interface DataAgent {
  uuid: string;
  displayName: string;
  role: {
    displayName: string;
  } | null;
  fullPortrait: string;
  displayIcon: string; 
  description: string;
}

function Home() {
  const [data, setData] = useState<DataAgent[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://valorant-api.com/v1/agents");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const dataFiltered = result.data.filter(
          (item: DataAgent) => item.displayIcon && item.displayIcon 
        );
        setData(dataFiltered);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <main>
        <div className={styles.background}>
          {data &&
            data.map((item) => (
              <div key={item.uuid} className={styles.card}>
                <img 
                  src={item.displayIcon} 
                  alt={item.displayName} 
                  className={styles.image} 
                />
                <h3>{item.displayName}</h3>
                <p className={styles.role}>{item.role?.displayName || 'Unknown Role'}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            ))}
        </div>
    </main>
  );
}

export default Home;
