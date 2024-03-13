import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet"
import "../styles/shop.css"
import products from "../assets/data/products"
import ProductsList from "../components/UI/ProductsList"

const Shop = () => {

    const [productsData, setProductsData] = useState(products)

    const handleFilter = e => {
        const filterValue = e.target.value;
        if (filterValue === "Tao") {
            let filteredProducts = products.filter(
                (item) => item.category === "Tao"
            );
            setProductsData(filteredProducts)
        }
        if (filterValue === "Dau") {
            let filteredProducts = products.filter((item) => item.category === "Dau")
            setProductsData(filteredProducts)
        }
        if (filterValue === "Nho") {
            let filteredProducts = products.filter((item) => item.category === "Nho")
            setProductsData(filteredProducts)
        }
        if (filterValue === "Dua") {
            let filteredProducts = products.filter((item) => item.category === "Dua")
            setProductsData(filteredProducts)
        }
        if (filterValue === "Luu") {
            let filteredProducts = products.filter((item) => item.category === "Luu")
            setProductsData(filteredProducts)
        }
        if (filterValue === "Cherry") {
            let filteredProducts = products.filter((item) => item.category === "Cherry")
            setProductsData(filteredProducts)
        }
        if (filterValue === "Quat") {
            let filteredProducts = products.filter((item) => item.category === "Quat")
            setProductsData(filteredProducts)
        }
        if (filterValue === "Le") {
            let filteredProducts = products.filter((item) => item.category === "Le")
            setProductsData(filteredProducts)
        }
    }

    const handleSearch = (e) => {
        const searchTerm = e.target.value
        console.log(searchTerm)
        const searchedProducts = products.filter(item=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
        console.log(searchedProducts)
        setProductsData(searchedProducts)
    }

    return (
        <Helmet title='Cửa hàng'>
            <CommonSection title='Sản phẩm' />

            <section>
                <Container>
                    <Row>
                        <Col lg='3' md='6'>
                            <div className="filter__widget">
                                <select onChange={handleFilter}>
                                    <option>Lọc theo loại trái cây</option>
                                    <option value="Tao">Táo</option>
                                    <option value="Nho">Nho</option>
                                    <option value="Dau">Dâu</option>
                                    <option value="Quat">Quất</option>
                                    <option value="Cherry">Cherry</option>
                                    <option value="Dua">Dưa</option>
                                    <option value="Le">Dưa</option>
                                    <option value="Luu">Lựu</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='3' md='6' className="text-end">
                            <div className="filter__widget">
                                <select>
                                    <option>Sắp xếp theo thứ tự</option>
                                    <option value="ascending">Tăng dần</option>
                                    <option value="descending">Giảm dần</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='6' md='12'>
                            <div className="search__box">
                                <input type="text" placeholder="Bạn muốn tìm trái cây gì?" onChange={handleSearch}/>
                                <span>
                                    <i class="ri-search-line"></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Container>
                    <Row>
                        {
                            productsData.length === 0 ? <h1 className="text-center fs-4">No product are found!</h1>
                                : <ProductsList data={productsData} />
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Shop