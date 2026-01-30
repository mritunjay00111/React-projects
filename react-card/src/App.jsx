import "./index.css";

function Avatar() {
  return (
      <img src="john.avif" alt="jonas photo" srcset="" className="avatar"/>
  );
}
function Intro() {
  return (<>
    <h1>John</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laborum
      facere rem laudantium vel enim repellat eveniet omnis corporis iusto velit
      animi asperiores distinctio ex, ut quibusdam id molestiae! Culpa?
    </p>
    </>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.name}
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="Javascript" color="red" />
      <Skill name="HTML+CSS" color="green" />
      <Skill name="next.js" color="orange" />
      <Skill name="react.js" color="blue" />
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

export default App;

