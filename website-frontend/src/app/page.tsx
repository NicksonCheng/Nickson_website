// frontend/src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface PersonalInfo {
  host: string;
  user: string;
  description: string;
  password: string;
  database: string;
}

export default function Home() {
  const [data, setData] = useState<PersonalInfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your backend API URL
        const response = await axios.get("https://140.116.164.184/api/info");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>My Personal Website</h1>
      {data ? (
        <div>
          <h2>{data.user}</h2>
          <p>{data.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
