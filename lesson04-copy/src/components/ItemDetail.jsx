import { useState } from "react";
import "./itemDetail.css";

const ItemDetail = (props) => {
  const [count, setCount] = useState(0)
  function itemDetailCount() {
    setCount(count + 1)
  }

  return (
    <>
      <div className="product-detail-body">
        <div className="row product-detail-body-content">
          <div className="col product-detail-image">
            <img src={props.img} alt={props.name} />
          </div>

          <div className="col">
            <div className="product-detail-description">
              <h2>{props.name}</h2>
              <div className="product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="product-detail-price">
                <p className="product-price">${props.price}</p>
              </div>

              <div className="product-options">
                <label>Phân loại </label>
                <div className="product-options-btn">
                  <button type="button" className="btn btn-light">
                    Nhỏ
                  </button>
                  <button type="button" className="btn btn-light">
                    Vừa
                  </button>
                  <button type="button" className="btn btn-light">
                    Lớn
                  </button>
                </div>
              </div>

              <div className="product-quantity1 d-flex align-items-center mt-3">
                <button className="btn btn-outline-secondary">
                  <i className="fa fa-minus" />
                </button>
                <span className="qty">{count}</span>
                <button className="btn btn-outline-secondary">
                  <i className="fa fa-plus" onClick={itemDetailCount} />
                </button>
                <button className="btn btn-primary ">Chọn mua</button>
              </div>
            </div>
          </div>
        </div>

        <div className="product-detail-body-review">
          <div className="product-detail-review">
            <div className="d-flex align-items-center">
              <img
                src="https://hyperwork.vn/cdn/shop/files/Logo_HPW_-_Black.png?v=1695195500&width=200"
                alt=""
                className="rounded-circle me-3"
              />
              <p className="mb-0">
                <strong>John Doe</strong>
              </p>
            </div>

            <div className="review-para">
              <p>Sản phẩm này sẽ mua tặng cho gia đình sau ngày 15 nhé!</p>
            </div>

            <div className="review-content">
              <div className="review-icon">
                <i className="fa fa-bold"></i>
                <i className="fa fa-italic"></i>
                <i className="fa fa-link"></i>
              </div>
            </div>
          </div>

          <div className="product-detail-notes">
            <div className="h2-notes">
              <h2>Ghi chú</h2>
            </div>
            <p>Danh sách ghi chú</p>

            <div className="product-detail-note">
              <div className="d-flex align-items-center">
                <img
                  src="https://hyperwork.vn/cdn/shop/files/Logo_HPW_-_Black.png?v=1695195500&width=200"
                  alt=""
                  className="rounded-circle me-3"
                />
                <p className="mb-0">
                  <strong>You</strong>
                </p>
              </div>

              <p>Lưu lại đã, rồi mấy nữa tính tiếp...</p>

              <div className="notes">
                <p>5 min ago</p>

                <button className="btn btn-primary">Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
