import "./AnimalCard.css";
import animals from "./Animals";

interface IAnimal {
  name: string;
  species: string;
  habitat: string;
  lifespan: number;
  diet: string;
  funFacts: string[];
  emoji: string;
}

const AnimalCard: React.FC<IAnimal> = (props) => {
  return (
    <div className="animal-card">
      <h1 className="emoji">{props.emoji}</h1>
      <h3>{props.name}</h3>
      <p>{props.species}</p>
      <p>{props.habitat}</p>
      <p>{props.diet}</p>
      <p>{props.lifespan} years</p>
      <div className="funFacts">
        {props.funFacts.map((fact, index) => (
          <li key={index} className="funFacts">
            {fact}
          </li>
        ))}
      </div>
    </div>
  );
};

export default AnimalCard;
