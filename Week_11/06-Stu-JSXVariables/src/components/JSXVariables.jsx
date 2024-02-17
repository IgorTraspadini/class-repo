const name = "Igor"
const react = 'Super!';

function JSXVariables() {
  return (
    <div className="container">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>I think React {react}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
