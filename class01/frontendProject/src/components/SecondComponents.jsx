function SecondComponents(props) {
  return (
    <div>
      {props.prods.map((prod) => (
        // <p key={prod.product_id}>{prod.product_id}</p>
        <p>{prod.product_id + ' ' + prod.name + '(' + prod.color + ')'}</p>
      ))}
    </div>
  );
}

export default SecondComponents;
