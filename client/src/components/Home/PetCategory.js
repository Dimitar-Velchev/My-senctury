function PetCategory({pet}) {
  return (
    <li>
      <a href='#'>
        <img
          src={pet.src}
          width="114"
          height="160"
          alt=""
        />
      </a>
      <h2>{pet.title}</h2>
      <p>
       {pet.text}
      <a className="more" href="#">View all</a>
      </p>
    </li>
  );
}
export default PetCategory;
