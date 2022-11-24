import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <section>
      <h1>My Favorites</h1>
      {favoritesCtx.totalFavorites === 0 ? (
        <p>You got no favorites yet, Adding some?</p>
      ) : (
        <MeetupList meetups={favoritesCtx.favorites} />
      )}
    </section>
  );
}

export default FavoritesPage;
