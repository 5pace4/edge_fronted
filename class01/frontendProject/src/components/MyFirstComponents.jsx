function MyFirstComponents(props) {
  return (
    <div>
      <p>Name: {props.fun.name}</p>
      <p>Email: {props.fun.email}</p>
      {props.fun.fav_foods.map((fav_food) => (
        <p>{fav_food}</p>
      ))}
    </div>
  );
}

export default MyFirstComponents;
