import "./cardItem.css";

const CardItem = (props) => {
  return (
    <>
      <div className="card-item" >
        <div className="card-item-header" >
          <button type="button" className="card-item-top btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <img src={props.img} alt={props.name} onClick={() => props.handleImageClick(props)}/>
          </button>  
          <button className="card-item-icon-favourite" onClick={() => props.handleAddToFavCart(props)}><i class="fa fa-heart"></i></button>
        </div>
        
        <div className="card-item-body">
          <p className="card-item-body-title">{props.name}</p>

          <div className="card-item-body-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>

          <p className="card-item-body-price">${props.price}</p>

          <button
            className="card-item-body-add-to-cart"
            onClick={() => props.handleAddToCart(props)}
          >
            <i className="fa fa-shopping-cart"></i>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardItem;
