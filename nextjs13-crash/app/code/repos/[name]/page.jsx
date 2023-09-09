import { FaEye,FaStar,FaCodeBranch } from "react-icons/fa";
const RepoPage = ({params : {name}}) => 
{
    return(
        <div className="card">
            <h2>{name}</h2>
            <p>Repos details</p>
        </div>
    )
}

export default RepoPage;

