import PetCard from './PetCard';
import './Catalog.css';

function Catalog() {
  return (
    <div id="body">
        <ul className="pet-list" >
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
         </ul>
    </div>
  );
}

export default Catalog;
