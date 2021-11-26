import PetCard from './PetCard';
import './Catalog.css';

function Catalog() {
  return (
    <div id="body">
      <div className="catalog-content">
        <ul className="pet-list">
        <PetCard />
        </ul>
      </div>
    </div>
  );
}

export default Catalog;
