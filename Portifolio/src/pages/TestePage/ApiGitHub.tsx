import { useFetch } from "src/shared/Hooks/useFetch";
import styles from "./ApiGitHub.module.css";

interface ApiGitHubProp {
  login: string;
}

export const ApiGitHub = ({ login }: ApiGitHubProp) => {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );

  console.log(error);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div>
      <div className={styles.container}>
        <div>
          <pre className={styles.pre}>{JSON.stringify(data, null, 2)}</pre>
        </div>
        <div className={styles.avatar}>
          <img src={data.avatar_url} alt={data.login} />
          <div>
            {data.name && <p>Nome: {data.name}</p>}
            {data.location && <p>Location: {data.location}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
