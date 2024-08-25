"use client";

import { useEffect, useState } from 'react';
import styles from './maps.module.css';

interface Map {
  uuid: string;
  displayName: string;
  splash: string;
  description: string;
}

interface MapsApiResponse {
  data: Map[];
}

const Maps = () => {
  const [maps, setMaps] = useState<Map[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMaps = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/maps');
        const data: MapsApiResponse = await response.json();
        setMaps(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching maps:', error);
        setLoading(false);
      }
    };

    fetchMaps();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Valorant Maps</h1>
      <div className={styles.mapsList}>
        {maps.map((map) => (
          <div key={map.uuid} className={styles.mapItem}>
            <h2>{map.displayName}</h2>
            <img src={map.splash} alt={map.displayName} className={styles.mapImage} />
            <p>{map.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maps;
