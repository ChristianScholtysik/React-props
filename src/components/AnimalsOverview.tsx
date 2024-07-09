import "./AnimalsOverview.css";
import animals from "./Animals";
import AnimalCard from "./AnimalCard";

const AnimalOverview = () => {
  return (
    <section className="animal-list">
      <h2>Animal Overview</h2>
      <div className="grid-layout">
        {animals.map((animal, index) => (
          <AnimalCard
            key={index}
            emoji={animal.emoji}
            name={animal.name}
            species={animal.species}
            habitat={animal.habitat}
            diet={animal.diet}
            lifespan={animal.lifespan}
            funFacts={animal.funFacts}
          />
        ))}
      </div>
    </section>
  );
};

export default AnimalOverview;
