import useFetch from "./customHooks/useFetch";

function FetchDataWithUSeFetch() {
  // const response = useFetch("https://jsonplaceholder.typicode.com/posts", {});

  // console.log(response);

  // we can destructure the returned obj
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {}
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <h3>➡️ Custom hook example- useFetch() </h3>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default FetchDataWithUSeFetch;
