import RemoteApp from "./RemoteApp";

const Welcome = () => {
  return (
    <>
      <h1>Remote: Vite + React</h1>
      <h1>Remote: Vite + React - POC</h1>
      {/* <RemoteApp /> */}
      {setTimeout(() => {
        console.log("Remote: Vite + React");
        <RemoteApp />;
      }, 5000)}
      <h1>Remote: Vite + React - POC</h1>
    </>
  );
};

export default Welcome;
