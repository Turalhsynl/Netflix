import { useNavigate } from "react-router";

const Card = ({ item, type }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => {
                navigate("/details", {
                    state: {
                        id: item.id,
                        type: type || item.media_type,
                    },
                });
            }}
            className="relative bg-gray-800 m-14 w-[250px] rounded-lg overflow-hidden"
        >
            <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt={item.title || "Movie Poster"}
                className="w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50 opacity-0 flex items-center justify-center ">
                <p className="text-white text-center font-bold">{item.overview}</p>
            </div>
        </button>
    );
};

export default Card;