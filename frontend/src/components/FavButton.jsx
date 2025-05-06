import "./FavButton.css";
import starIcon from "../assets/starIcon.svg";
import starIconFilled from "../assets/starIconFilled.svg";
import { useState } from "react";

const FavButton = ({ bookId }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [book, setBook] = useState(null);

  const toggleLiked = async () => {
    setIsLiked(!isLiked);

    fetch(`http://localhost:3000/book/${bookId}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((error) => console.error("Error fetching books:", error));

    const updatedFavorite = !book.isFavorite;

    try {
      const response = await fetch(
        `http://localhost:3000/books/${bookId}/favorite`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isFavorite: updatedFavorite }),
        }
      );

      if (!response.ok) {
        throw new Error("Error al actualizar favorito");
      }

      const updatedBook = await response.json();
      setBook(updatedBook);
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
