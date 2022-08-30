import useFetch from "./useFetch.js";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
    </>
  );
};

export default Home