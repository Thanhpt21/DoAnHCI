import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link, useHistory } from "react-router-dom";

function Cart() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  var totalCartPrice = 0;

  if (!localStorage.getItem("auth_token")) {
    history.push("/");
    swal("Warning", "Login to goto Cart Page", "error");
  }

  useEffect(() => {
    axios.get(`/api/user/cart`).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setCart(res.data.data);
        setLoading(false);
      } else if (res.status === 401) {
        history.push("/");
        swal("Warning", res.data.message, "error");
      }
    });
  }, []);

  const handleDecrement = (cart_id) => {
    const carts = [];
    for (let c of cart) {
      if (c.book.id === cart_id) {
        c.quantity = c.quantity - 1;
        updateCartQuantity(c.book.id, c.quantity);
      }
      carts.push(c);
    }
    setCart(carts);
  };
  const handleIncrement = (cart_id) => {
    const carts = [];
    for (let c of cart) {
      if (c.book.id === cart_id) {
        c.quantity = c.quantity + 1;
        updateCartQuantity(c.book.id, c.quantity);
      }
      carts.push(c);
    }
    setCart(carts);
  };
  function updateCartQuantity(bookId, quantity) {
    axios
      .put(`/api/user/updateCart`, {
        bookId: bookId,
        quantity: quantity,
      })
      .then((res) => {
        if (res.data.status === 200) {
          swal("Success", res.data.message, "success");
        }
      });
  }

  const deleteCartItem = (e, bookId) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Removing";

    axios.delete(`/api/user/delCart/${bookId}`).then((res) => {
      if (res.status === 200) {
        swal("Success", res.data.message, "success");
        thisClicked.closest("tr").remove();
        let carts = cart.filter((x) => x.book.id !== bookId);
        if (res.data.success) {
          setCart([]);
          setCart(carts);
        }
      } else {
        swal("Error", res.data.message, "error");
        thisClicked.innerText = "Remove";
      }
    });
  };

  if (loading) {
    return <h4>Loading Product Detail...</h4>;
  }

  var cart_HTML = "";
  if (cart.length > 0) {
    cart_HTML = (
      <div>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th >Price</th>
                <th >Quantity</th>
                <th >Total Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => {
                totalCartPrice += item.book.price * item.quantity;
                return (
                  <tr key={idx}>
                    <td width="10%">
                      <img
                        src={item.book.image}
                        alt={item.book.name}
                        width="50px"
                        height="50px"
                      />
                    </td>
                    <td>{item.book.name}</td>
                    <td width="15%" >
                      {item.book.price.toLocaleString('it-IT',{
          style:"currency",
          currency:"VND"
        })}
                    </td>
                    <td width="15%">
                      <div className="input-group">
                        <button
                          type="button"
                          onClick={() => handleDecrement(item.book.id)}
                          className="input-group-text"
                        >
                          -
                        </button>
                        <div className="form-control text-center">
                          {item.quantity}
                        </div>
                        <button
                          type="button"
                          onClick={() => handleIncrement(item.book.id)}
                          className="input-group-text"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td width="15%" >
                      {(item.book.price * item.quantity).toLocaleString('it-IT',{
          style:"currency",
          currency:"VND"
        })}
                    </td>
                    <td width="10%">
                      <button
                        type="button"
                        onClick={(e) => deleteCartItem(e, item.book.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <div className="card card-body mt-3">
              <h4>
                Sub Total:
                <span className="float-end">{totalCartPrice.toLocaleString('it-IT',{
          style:"currency",
          currency:"VND"
        })}</span>
              </h4>
              <h4>
                Grand Total:
                <span className="float-end">{totalCartPrice.toLocaleString('it-IT',{
          style:"currency",
          currency:"VND"
        })}</span>
              </h4>
              <hr />
              <Link to="/checkout" className="btn btn-primary">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    cart_HTML = (
      <div>
        <div className="card card-body py-5 text-center shadow-sm">
          <h4>Your Shopping Cart is Empty</h4>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="py-4">
        <div className="container">
          <h3 className="text-center">Your Carts</h3>
          <div className="row">
            <div className="col-md-12">{cart_HTML}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
