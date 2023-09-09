async function fetchRepos()
{
    const response = await fetch('https://api.github.com/users/giasuddin/repos');
    const repos = await response.json();
   return repos
}



const ReposPage = async () => 
{   
    const repos = await fetchRepos(); 
    // console.log(repos)

    return (
        <>
            <h3>{repos[0].name}</h3>
        </>
    )
}
export default ReposPage;

