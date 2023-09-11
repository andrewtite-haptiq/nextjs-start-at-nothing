import {useState} from 'react';

function Header({title}) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ['Andrew Tite', 'Ankit Sarkar', 'Swapnil Paril'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h2>Child Component: Header with props.title="Develop. Preview. Ship.</h2>
      <Header title="Develop. Preview. Ship."/>
      <hr/>

      <h2>Names List Looping with `.map(...)`</h2>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <hr/>

      <h2>Likes Button with State</h2>
      <button onClick={handleClick}>Like ({likes})</button>
      <hr/>

      <h2>Automatic Routing to Another Page - "Look Ma! No React Router Needed!"</h2>
      <a href="/another-page">Go to another page with auto-routing</a>
    </div>
  );
}
