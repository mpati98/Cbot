import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from '../assets/data/products'
import counterImg from "../assets/images/autumn_glory_flashsale.jpg"
import Clock from "../components/UI/Clock";

import Helmet from "../components/Helmet/Helmet";
// import heroImg from "../assets/images/tao-HT.png"
import "../styles/home.css"
import { Container, Row, Col } from "reactstrap";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

// import useGetData from "../custom-hooks/useGetData";


const Home = () => {
    // const year = new Date().getFullYear()
    // const {data: products, loading} = useGetData('products')

    const [trendingProducts, setTrendingProduct] = useState([])
    const [bestSaleProducts, setbestSaleProducts] = useState([])
    const [newArrivalProducts, setNewArrivalProduct] = useState([])
    // const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        const filteredTrendingProducts = products.filter(
            (item) => item.type === "trending"
        )
        setTrendingProduct(filteredTrendingProducts)
        
        const filteredBestSaleProducts = products.filter(
            (item) => item.type === "best_sale"
        )
        setbestSaleProducts(filteredBestSaleProducts)

        const filteredNewArrivalProducts = products.filter(
            (item) => item.type === "new_arrival"
        )
        setNewArrivalProduct(filteredNewArrivalProducts)

        // const filteredPopularProducts = products.filter(
        //     (item) => item.type === "popular_in_category"
        // )
        // setPopularProducts(filteredPopularProducts)


    }, [products])
    return <Helmet title={"Trang chủ"}>
        <section className="hero__section">
            <Container>
                <Row>
                    {/* <Col lg='6' md='6'>
                        <div className="hero__content">
                            <p className="hero__subtitle">Trending product in {year}</p>
                            <h2>Lựa chọh vì sức khỏe của bạn</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorum eveniet distinctio, sequi in alias ullam quae aperiam itaque exercitationem?</p>
                            <motion.button whileTap={{ scale: 1.2 }} className="buy__btn"><Link to='/shop'>SHOP NOW!</Link></motion.button>
                        </div>
                    </Col> */}

                    {/* <Col>
                        <div className="hero__img">
                            <img src={heroImg} alt="banner" />
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </section>
        <Services />
        <section className="trending_products">
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                        <h2 className="section__title">Sản phẩm nổi bật năm 2023</h2>
                    </Col>
                    {/* {
                        loading ? <h5 className="fw-bold">Loading ....</h5>: */}
                        <ProductsList data={trendingProducts} />
                    {/* } */}
                </Row>
            </Container>
        </section>
        <section className="best__sales">
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                        <h2 className="section__title">Sản phẩm bán chạy</h2>
                    </Col>
                    {/* {
                        loading ? <h5 className="fw-bold">Loading ....</h5>: */}
                        <ProductsList data={bestSaleProducts} />
                    {/* } */}

                </Row>
            </Container>
        </section>
        <section className="timer_count">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="clock__top-content">
                            <h4 className="text-white fs-6 mb-2">Ưu đãi hấp dẫn</h4>
                            <h3 className="text-white fs-5 mb-3">Táo Autumn Glory</h3>
                        </div>
                        <Clock/>
                        <motion.button whileTap={{scale: 1.2}} className="buy__btn store_btn">
                            <Link to="/shop">Ghé thăm shop</Link>
                        </motion.button>
                    </Col>
                    <Col lg="6" md="6" className="text-end">
                        <img src={counterImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="all__products">
            <Container>
                <Row>
                <Col lg="12" className="text-center mb-5">
                        <h2 className="section__title">Tất cả sản phẩm</h2>
                    </Col>
                    {/* {
                        loading ? <h5 className="fw-bold">Loading ....</h5>: */}
                        <ProductsList data={products}/>
                    {/* } */}

                </Row>
            </Container>
        </section>
        <section className="new__arrivals">
            <Container>
                <Row>
                <Col lg="12" className="text-center mb-5">
                        <h2 className="section__title">Hàng sắp về</h2>
                    </Col>
                    {/* {
                        loading ? <h5 className="fw-bold">Loading ....</h5>: */}
                        <ProductsList data={newArrivalProducts}/>
                    {/* } */}

                </Row>
            </Container>
        </section>

    </Helmet>
}

export default Home