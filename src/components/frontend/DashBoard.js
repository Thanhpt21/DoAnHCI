import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import {Input, Button, Select} from "antd";
import axios from "axios";
import SingleBook from "./book/SingleBook";
import "./css/DashBoard.css";
import BookPaging from "./book/BookPaging";
import * as queryString from "query-string";
import SearchIcon from "../../assets/admin/assets/img/searchIcon.png";
import bannerweb from "../../assets/admin/assets/img/bannerweb.png";
import bannertc1 from "../../assets/admin/assets/img/bannertc1.png";
import bannertc2 from "../../assets/admin/assets/img/bannertc2.png";
import bannertc3 from "../../assets/admin/assets/img/bannertc3.png";
import swal from "sweetalert";
function DashBoard() {
  let params = queryString.parse(window.location.search);

  const [bookState, setBookState] = useState({
    books: [],
    categories: [],
    bookLoading: true,
    currentPage: 1,
    totalPage: 1,
  });

  const [searchForm, setSearchForm] = useState({
    search: "",
    category: null,
    sortBy: 0,
    sortDescending: false,
    minPrice: null,
    maxPrice: null,
  });
  const [url, setUrl] = useState(window.location);

  const { search, category, sortBy, sortDescending, minPrice, maxPrice } =
    searchForm;
  const onChangeSearchForm = (event) =>
    setSearchForm({ ...searchForm, [event.target.name]: event.target.value });
  const onSubmitSearch = () => {
    searchBooks();
  };
  function setGetParam(params) {
    var newUrl =
      window.location.origin + window.location.pathname + "?" + params;
    window.history.pushState({ path: newUrl }, "", newUrl);
    setUrl(newUrl);
  }
  async function searchBooks() {
    try {
      let reqParams = "page=1&";
      if (search && search.length !== 0) reqParams += "name=" + search;
      if (category && category > 0) reqParams += "&category=" + category;
      if (sortBy && sortBy > 0) reqParams += "&sortBy=" + sortBy;
      if (sortDescending) reqParams += `&sortDescending=` + sortDescending;
      if (minPrice && minPrice >= 0) reqParams += "&minPrice=" + minPrice;
      if (maxPrice && maxPrice >= 0) reqParams += "&maxPrice=" + maxPrice;
      if (parseInt(maxPrice) < parseInt(minPrice))
        swal(
          "Warning",
          "Min price is greater than max price will cause no result found.",
          "warning"
        );

      setGetParam(reqParams);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function getBooks() {
      try {
        let reqParams = "";
        if (params && params.name) reqParams += `name=${params.name}&`;
        if (params && params.page) reqParams += `page=${params.page}&`;
        if (params && params.category)
          reqParams += `category=${params.category}&`;
        if (params && params.sortBy) reqParams += `sortBy=${params.sortBy}&`;
        if (params && params.sortDescending)
          reqParams += `sortDescending=${sortDescending}&`;
        if (params && params.minPrice) reqParams += "minPrice=" + minPrice;
        if (params && params.maxPrice) reqParams += "&maxPrice=" + maxPrice;
        if (reqParams.length === 0) reqParams = "page=1";
        const bookResponse = await axios.get(
          `api/book/search?limit=12&${reqParams}`
        );
        const categoryResponse = await axios.get(`api/category`);

        setBookState({
          books: bookResponse.data.data,
          categories: categoryResponse.data.datas,
          bookLoading: false,
          currentPage: bookResponse.data.currentPage,
          totalPage: bookResponse.data.totalPage,
        });
      } catch (error) {
        console.log(error);
      }
    }
    getBooks();
  }, [url]);

  const handlePageChange = (pageNumber) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", pageNumber);
    if (params.get("page"))
      //  let key = "page=" + pageNumber;
      setGetParam(params.toString());
    else setGetParam("page=" + pageNumber);
  };

  let body;

  if (bookState.bookLoading) {
    body = <div>Loading</div>;
  } else {
    body = (
      <>
        <div className="list-book-container">
          {bookState.books.map((book) => {
            return (
              <>
                <SingleBook key={book.id} book={book} />
              </>
            );
          })}
        </div>
        <BookPaging
          handlePageChange={handlePageChange}
          currentPage={bookState.currentPage}
          totalPage={bookState.totalPage}
        />
      </>
    );
  }

  let searchView = (
    <>
      <ul className="ul-nav-search">
        <li className="py-2 px-4">
          <Input
            type="number"
            placeholder="Min price"
            name="minPrice"
            value={minPrice}
            onChange={onChangeSearchForm}
          />
        </li>
        <li className="py-2 px-4">
          <Input
            type="number"
            placeholder="Max price"
            name="maxPrice"
            value={maxPrice}
            onChange={onChangeSearchForm}
          />
        </li>
        <li className="py-2 px-4">
          <select
          className="select"
            name="sortDescending"
            onChange={onChangeSearchForm}
            value={sortDescending}
          >
            <option value={true}>Sort Descending</option>
            <option value={false}>Sort Ascending</option>
          </select>
        </li>
        <li className="py-2 px-4">
          <select className="select" name="sortBy" onChange={onChangeSearchForm} value={sortBy}>
            <option value={0}>Unsorted</option>
            <option value={1}>Sort by Name</option>
            <option value={2}>Sort by Author name</option>
            <option value={4}>Sort by price</option>
            <option value={8}>Sort by Category</option>
          </select>
        </li>
        <li className="py-2 px-4">
          <select
            className="select"
            name="category"
            onChange={onChangeSearchForm}
            value={category}
          >
            <option value={0}>Category</option>
            {bookState.categories.map((cate) => (
              <option key={cate.id} value={cate.id}>
                {cate.name}
              </option>
            ))}
          </select>
        </li>
        <li className="py-2 px-4">
          <Input
            type="text"
            placeholder="search"
            name="search"
            value={search}
            onChange={onChangeSearchForm}
          />
        </li>
        <li className="p-2">
          <Button type="primary" className="" onClick={onSubmitSearch}>
            Search <img src={SearchIcon} alt="" />
          </Button>
        </li>
      </ul>
    </>
  );
  return (
    <div>
      <div>
        <img src={bannerweb} className="img-fluid" alt="" />
      </div>
      <div className="p-5 d-flex justify-content-around"> 
        
        <div className="col-md-3">
        <img src={bannertc1} className="img-fluid" alt="" />
        </div>
        <div className="col-md-3">
        <img src={bannertc2} className="img-fluid" alt="" />
        </div>
        <div className="col-md-3">
        <img src={bannertc3} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="nav-search">{searchView}</div>
      <div>{body}</div>
    </div>
  );
}

export default DashBoard;
