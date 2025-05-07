import "./FavButton.css";
import starIcon from "../assets/starIcon.svg";
import starIconFilled from "../assets/starIconFilled.svg";
import { useState } from "react";

const FavButton = ({ bookId, isFav }) => {
  const [isLiked, setIsLiked] = useState(isFav);

  const toggleLiked = async () => {
    setIsLiked(!isLiked);

    try {
      const response = await fetch(
        `http://localhost:3000/books/${bookId}/favorite`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isFavorite: !isFav }),
        }
      );

      if (!response.ok) {
        throw new Error("Error al actualizar favorito");
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="FavButton" onClick={toggleLiked}>
      <img src={isLiked ? starIconFilled : starIcon} alt="Favorite icon" />
    </div>
  );
};

export default FavButton;
