import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/BookDetail.css";
import swal from "sweetalert";

const BookDetail = () => {
  let { id } = useParams();

  const [bookState, setBookState] = useState({
    book: null,
    bookLoading: true,
  });

  const random = Math.floor(Math.random() * 100);

  const [quantity, setQuantity] = useState(1);

  const onAddToCartClick = async (e) => {
    e.preventDefault();

    try {
      const addToCart = await axios.post(`api/user/addCart`, {
        bookId: id,
        quantity: quantity,
      });
      if (addToCart.data.success)
        swal("Success", addToCart.data.message, "success");
      else swal("Warning", "Try again", "warning");
    } catch (error) {
      console.log(error);
    }
  };
  const onBuyNowClick = () => {};
  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const minusQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  useEffect(() => {
    async function getBookDetail() {
      try {
        const bookResponse = await axios.get(`api/book/${id}`);

        setBookState({
          book: bookResponse.data,
          bookLoading: false,
        });
      } catch (error) {
        console.log(error);
      }
    }
    getBookDetail();
  }, []);
  let body;
  if (bookState.bookLoading)
    body = (
      <>
        <div>Loading</div>
      </>
    );
  else
    body = (
      <>
        <div className="product-details-container">
          <div className="product-details-image-left">
            <div className="img-holder">
              <img
                src={bookState.book.image}
                alt=""
              />
            </div>
          
          </div>
          <div className="product-details-right">
            <div className="product-title">{bookState.book.name}</div>
            <p className="product-type">
              <strong>Loại: </strong>
              {bookState.book.authorname}
            </p>
            <div className="rating-title">
              <strong>Đánh giá (26) </strong>
            </div>
            <div className="rating">
              <input type="radio" name="rating" value="5" id="5" />
              <label for="5">☆</label>
              <input type="radio" name="rating" value="4" id="4" />
              <label for="4">☆</label>
              <input type="radio" name="rating" value="3" id="3" />
              <label for="3">☆</label>
              <input type="radio" name="rating" value="2" id="2" />
              <label for="2">☆</label>
              <input type="radio" name="rating" value="1" id="1" />
              <label for="1">☆</label>
            </div>
            <label className="description-title" for="description">
              <strong>Mô tả:</strong>
            </label>
            {bookState.book.description.split("\n").map((d) => (
              <p className="description">{d}</p>
            ))}
            {/* <p>{bookState.book.description}</p> */}
            <div className="price-title">
              <strong className="price">Giá: </strong> {bookState.book.price.toLocaleString('it-IT',{ style:"currency", currency:"VND" })}
            </div>
            <div>
              <div className="line-quantity">
                <label for="input-quantity">
                  <strong>Số lượng: </strong>
                </label>
                <div className="input-quantity" id="input-quantity">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      minusQuantity();
                    }}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => {
                      e.preventDefault();
                      setQuantity(parseInt(e.target.value));
                    }}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addQuantity();
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="product-buttons">
              <button className="btn-add-to-cart" onClick={onAddToCartClick}>
                <span className="title-btn">Thêm vào giỏ hàng</span>
              </button>
              {/* <button className="btn-buy-now" onClick={onBuyNowClick}>
                Mua ngay
              </button> */}
            </div>
          </div>
        </div>
      </>
    );
  return body;
};

export default BookDetail;
