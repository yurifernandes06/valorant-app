"use client";

import { useEffect, useState } from 'react';
import styles from './skins.module.css';

interface Skin {
    uuid: string;
    displayName: string;
    displayIcon: string | null;
}

interface SkinsApiResponse {
    data: Skin[];
}

const Skins = () => {
    const [skins, setSkins] = useState<Skin[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchSkins = async () => {
            try {
                const response = await fetch('https://valorant-api.com/v1/weapons/skins');
                const data: SkinsApiResponse = await response.json();

                const excludedNames = [
                    'Random Favorite Skin',
                    'Standard Odin',
                    'Standard Ares',
                    'Standard Vandal',
                    'Standard Bulldog',
                    'Standard Phantom',
                    'Standard Judge',
                    'Standard Bucky',
                    'Standard Frenzy',
                    'Standard Classic',
                    'Standard Ghost',
                    'Standard Sheriff',
                    'Standard Shorty',
                    'Standard Operator',
                    'Prime Guardian',
                    'Sovereign Guardian',
                    'Melee',
                    'Luxe Knife',
                    'Standard Stinger',
                    'Standard Spectre',
                    'Standard Marshal',
                    'Sovereign Marshal',
                    'Standard Guardian'
                ];

                const filteredSkins = data.data.filter(
                    skin =>
                        skin.displayIcon &&
                        !excludedNames.includes(skin.displayName)
                );

                setSkins(filteredSkins);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching skins:', error);
                setLoading(false);
            }
        };

        fetchSkins();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Valorant Skins</h1>
            <div className={styles.skinsList}>
                {skins.map((skin) => (
                    <div key={skin.uuid} className={styles.skinItem}>
                        <h2>{skin.displayName}</h2>
                        <img src={skin.displayIcon!} alt={skin.displayName} className={styles.skinImage} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skins;
