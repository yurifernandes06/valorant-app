"use client";

import { useEffect, useState } from "react";
import styles from "./agents.module.css";

export interface Agent {
  uuid: string;
  displayName: string;
  role: {
    displayName: string;
  } | null;
  fullPortrait: string;
  description: string;
  abilities: {
    uuid: string;
    displayName: string;
    displayIcon: string;
  }[];
}

export default function Agents() {
  const [data, setData] = useState<Agent[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<Agent[]>([]);
  const [searchType, setSearchType] = useState("name");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://valorant-api.com/v1/agents");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const dataFiltered = result.data.filter(
          (item: Agent) => item.fullPortrait && item.fullPortrait.length > 0
        );
        setData(dataFiltered);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData([]);
      return;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = data.filter(
      (agent) =>
        (searchType === "name" && agent.displayName.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (searchType === "class" &&
          agent.role?.displayName &&
          agent.role.displayName.toLowerCase().includes(lowerCaseSearchTerm))
    );
    setFilteredData(filtered);
  }, [searchTerm, searchType, data]);

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.formGroup}>
          <select
            className={styles.selectInput}
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="name">Search by Name</option>
            <option value="class">Search by Class</option>
          </select>
          <input
            type="text"
            placeholder="Search agents"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        {filteredData.length > 0 && (
          <div className={styles.cardsContainer}>
            {filteredData.map((agent) => (
              <div key={agent.uuid} className={styles.card}>
                <img
                  src={agent.fullPortrait}
                  alt={agent.displayName}
                  className={styles.image}
                />
                <h3>{agent.displayName}</h3>
                <p>{agent.role?.displayName || "Unknown Role"}</p>
                <p>{agent.description}</p>
                <div className={styles.abilities}>
                  <h4>Abilities:</h4>
                  {agent.abilities.map((ability) => (
                    <div key={ability.uuid} className={styles.ability}>
                      <img
                        src={ability.displayIcon}
                        alt={ability.displayName}
                        className={styles.abilityIcon}
                      />
                      <span>{ability.displayName}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  ); 
}