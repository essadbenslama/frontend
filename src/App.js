import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "./Redux/movieSlice";
import AddMovie from "./components/AddMovie";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Carossel from "./components/Carousel";

function App() {
  const { createdMovie } = useSelector((state) => state.movie);
  const { myMovies } = useSelector((state) => state.movie);
  const { deletedMovie } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch, createdMovie, deletedMovie]);

  return (
    <div className="App">
      <Search setSearch={setSearch} setRating={setRating} />
      <br />
      <br />
      <Carossel />
      <br />
      <AddMovie />
      <br />
      <HomePage
        myMovies={myMovies?.filter(
          (el) =>
            el.movieTitle.trim().toLocaleLowerCase().includes(search) &&
            el.rate >= rating
        )}
      />

      <Footer />
    </div>
  );
}

export default App;
