function List(props) {
  console.log(props);
  const filtergroceries = props.groceries.filter(groce => !groce.purchased);

  return (
    <ul className="list-group">
      {filtergroceries.map(i => (
        <li className="list-group-item" key={i.id}>
          {i.name}
        </li>
      ))}
    </ul>
  );
}

export default List;
