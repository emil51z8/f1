import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store/slices/searchDriverSlice";
import { useNavigate } from "react-router-dom";
import '../styles/styles.css';

const SearchDriver = () => {
    const searchTerm = useSelector((state) => state.searchDriver.searchTerm);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        dispatch(changeSearchTerm(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                className="search-input"
                placeholder="Search for a driver"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
}

export default SearchDriver;