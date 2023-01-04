import { useLocation } from "react-router-dom";

function Search() {
    const location = useLocation();
    const keyword = new URLSearchParams(location.search).get("keyword");
    console.log("🚀 ~ file: Search.tsx:6 ~ Search ~ keyword", keyword);
    return null;
}

export default Search;
