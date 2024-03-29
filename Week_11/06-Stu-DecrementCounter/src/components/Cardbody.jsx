const CardBody = (props) => (

  <div className="card-body">
    <p className="card-text">Click Count: {props.count}</p>
    <button
      type="button"
      className="btn btn-primary"
      onClick={props.handleIncrement}
    >
      Increment
    </button>
    <button
      type="button"
      className="btn btn-primary"
      onClick={props.handleDecrement}
    >
      Decrement
    </button>
  </div>
  )


export default CardBody;