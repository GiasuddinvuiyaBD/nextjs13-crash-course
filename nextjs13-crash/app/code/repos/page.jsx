import Link from "next/link";
import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa';

async function fetchRepos()
{
    const response = await fetch(
        'https://api.github.com/users/giasuddin/repos', {
            next : {
                revalidate : 60,
            }
        }
        );
    // it will be resolve after 1 secnod.
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const repos = await response.json();
    return repos
}


const ReposPage = async () => 
{   
    const repos = await fetchRepos(); 
    // console.log(repos)

    return (
        <div className="repos-container">
            <h2>Repositories</h2>
            <ul className="repo-list">
                {repos.map((repos) => (
                    <li key={repos.id}>
                        <Link href={`/code/repos/${repos.name}`}>
                            <h3>{repos.name}</h3>
                            <p>{repos.description}</p>
                            <div className="repo-details">
                                <span>
                                    <FaStar /> {repos.stargazers_count}
                                </span>
                                <span>
                                    <FaCodeBranch /> {repos.forks_count}
                                </span>
                                <span>
                                    <FaEye /> {repos.watchers_count}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ReposPage;

