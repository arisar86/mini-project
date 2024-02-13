import Products from "../components/Products";
function About() {
  return (
    <div>
      <h1 className="about">About Us</h1>
      <div className="project-info"> Our project:</div>
      <div className="names">
        <div className="ari">
          <h2>Rui</h2>
          <p>
            Ex flight attendant that got tired of flying around and decided to
            ground his feet into the Webdev world link to my github:
          </p>
        </div>
        <div className="ari">
          <h2>Tesa</h2>
          <p>
            If she were the genius behind a programming language, she’d probably
            name it after a feline friend, echoing her love for cats in the
            world of technology link to my github: https://github.com/TesaMusa
          </p>
        </div>
        <div className="ari">
          <h2>Ari</h2>
          <p>
            Out in the world to add one more step to his glorious career path
            from artist, carpenter, teacher, Jiu-Jitsu Fighter, again artist,
            carpenter, bookdealer and…….Webdev??!! link to my github:
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
