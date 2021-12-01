import PetCard from './PetCard';
import './Catalog.css';

function Catalog() {
  return (
    <div id="catalog-body">
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
        <PetCard />
    
         </ul>
    </div>
  );
}

export default Catalog;
