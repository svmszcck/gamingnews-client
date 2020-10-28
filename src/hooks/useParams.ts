import { useLocation } from "react-router-dom";

const useParams = () => new URLSearchParams(useLocation().search);

export default useParams;
