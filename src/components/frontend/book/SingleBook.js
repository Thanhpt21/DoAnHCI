import axios from "axios";
import {Button} from "antd";
import { Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "../css/SingleBook.css"
import swal from "sweetalert";

const SingleBook = ({ book }) => {
  const history = useHistory();
  const onAddToCartClick = async (e) => {
    e.preventDefault();

    try {
      const addToCart = await axios.post(`api/user/addCart`, {
        bookId: book.id,
        quantity: 1,
      });
      if (addToCart.data.success)
        swal("Success", addToCart.data.message, "success");
      else swal("Warning", "Try again", "warning");
    } catch (error) {
      console.log(error);
    }
  };
  const onImageClick = (e) => {
    e.preventDefault();
    history.push(`/books/${book.id}`);
  };
  return (
    <div className="col-xxl-3 col-md-3 col-12 p-3 ">
    <Card className="shadow hieuung_hover">
      <Card.Img
        className="card-img"
        variant="top"
        src={book.image}
        onClick={onImageClick}
      />
      <Card.Body>
        <Card.Title  style={{textAlign: 'center', fontSize: '16px'}}>
          <Link className="hieuung_text" to={"/books/" + book.id}> {book.name}</Link>
        </Card.Title>
        <Card.Text lassName="hieuung_text" style={{textAlign: 'center'}}>Giá: {book.price.toLocaleString('it-IT',{
          style:"currency",
          currency:"VND"
        })} </Card.Text >
        <div style={{textAlign: 'center'}}>
        <Button onClick={onAddToCartClick}>
          Thêm vào giỏ hàng
        </Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
};

export default SingleBook;
