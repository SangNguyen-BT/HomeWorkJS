import Images from "./assets/images/images.jpg";

const PageTwo = () => {
  return (
    <div className="product-detail container">
      <div className="product-detail-header">
        <div className="product-detail-icon-delete">
          <i className="fa fa-trash-alt"></i>
        </div>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="product-detail-body">
        <div className="row product-detail-body-content">
          <div className="col product-detail-image">
            <img src={Images} alt="Product Image" />
          </div>

          <div className="col col-description ">
            <div className="product-detail-description">
              <h2>Ngũ hạt thập cẩm, hũ trang trí ý nghĩa</h2>
              <div className="product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-alt"></i>
              </div>
              <div className="product-detail-price">
                <p className="product-price">
                  Giá: 42.000 VND <i class="fa fa-arrow-down"></i>
                </p>
                <span className="text-danger">-30%</span>
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

              <div className="product-quantity d-flex align-items-center mt-3">
                <button className="btn btn-outline-secondary">-</button>
                <input
                  type="text"
                  value={0}
                  className="form-control text-center width"
                />
                <button className="btn btn-outline-secondary">+</button>
                <button className="btn btn-primary ms-3">Chọn mua</button>
              </div>
            </div>
          </div>
        </div>

        <div className="product-detail-body-footer">
          <p>
            Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị
            thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân
            thiện với mọi nhà
          </p>
        </div>

        <div className="product-detail-body-review">
          <div className="product-detail-review">
            <div className="d-flex align-items-center">
              <img src={Images} alt="" className="rounded-circle me-3" />
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

              <button className="btn btn-primary">Comment</button>
            </div>
          </div>

          <div className="product-detail-notes">
            <div className="h2-notes">
              <h2>Ghi chú</h2>
            </div>
            <p>Danh sách ghi chú</p>

            <div className="product-detail-note">
              <div className="d-flex align-items-center">
                <img src={Images} alt="" className="rounded-circle me-3" />
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
    </div>
  );
};

export default PageTwo;
