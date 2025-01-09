import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useStore } from "zustand";
import { themeStore } from "../../../assets/common/Store";
import Card from "../../../assets/common/Card";

const Similar = () => {
    const [similarData, setSimilarData] = useState([]);
    const { token } = useStore(themeStore);
    const { id, type } = useLocation().state;

    const getSimilar = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/v1/${type}/${id}/similar`, {
          headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });
        const data = await response.json();

        if (response.ok) {
          setSimilarData(data.similar || []);
        } else {
          setSimilarData([]);
        }
      } catch (error) {
        console.error('Error fetching similar data:', error);
        setSimilarData([]);
      }
    };

    useEffect(() => {
      getSimilar();
    }, [id, type]);

    return (
        <div className="p-10">
        <h2 className="text-white text-3xl mb-5">Similar {type === "movie" ? "Movies" : "Shows"}</h2>
        <div className="flex overflow-x-auto space-x-6">
          {similarData.length > 0 ? (
            similarData.map((item) => (
              <div className="flex-shrink-0 w-64">
                <Card key={item.id} item={item} type={type} />
              </div>
            ))
          ) : (
            <p className="text-white">No similar content available.</p>
          )}
        </div>
      </div>
    );
};

export default Similar;