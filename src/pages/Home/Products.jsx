import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useLoaderData } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import BarLoader from "../../components/BarLoader/BarLoader";

const Products = () => {
  const { totalProducts } = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [productPerPage, serProductPerPage] = useState(12);
  const pages = Math.ceil(totalProducts / productPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const [products, setProducts] = useState([]);

  const handelProductPerPage = (event) => {
    serProductPerPage(event.target.value);
  };

  const handelPageNumber = (number) => {
    setCurrentPage(number);
    setLoading(true);
  };

  useEffect(() => {
    fetch(
      // `http://localhost:5000/products?page=${currentPage}&limit=${productPerPage}`
      `https://mfarhad-ema-jhon.vercel.app/products?page=${currentPage}&limit=${productPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      });
  }, [currentPage, productPerPage]);
  return (
    <section className="container mx-auto mt-10">
      {loading ? (
        <BarLoader></BarLoader>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      )}
      <Pagination
        handelProductPerPage={handelProductPerPage}
        pages={pages}
        handelPageNumber={handelPageNumber}
      ></Pagination>
    </section>
  );
};

export default Products;
