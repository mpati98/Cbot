import React, { useState, useRef, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-details.css"
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductsList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";
import products from "../assets/data/products";
// import {db} from '../firebase.config'
// import { doc, getDoc } from "firebase/firestore";
// import useGetData from '../custom-hooks/useGetData'

const ProductDetails = () => {
    // const [product, setProduct] = useState({})
    const [tab, setTab] = useState('desc')
    const [rating, setRating] = useState(null)
    const reviewUser = useRef()
    const reviewMdg = useRef()
    const dispatch = useDispatch()

    // const {data: products} = useGetData('products')
    
    const { id } = useParams()
    const product = products.find((item)=>item.id === id)
    // const docRef = doc(db, 'products', id)
    // useEffect(()=>{
    //     const getProduct = async()=>{
    //         const docSnap = await getDoc(docRef)

    //         if(docSnap.exists()){
    //             setProduct(docSnap.data())
    //         } else {
    //             console.log('No product')
    //         }
    //     }
    //     getProduct()
    // }, [])

    const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product
    const relatedProducts = products.filter(item => item.category === category)
    
    const submitHandler = (e) => {
        e.preventDefault()
        const reviewUserName = reviewUser.current.value
        const reviewUserMsg = reviewMdg.current.value

        const reviewObj = {
            userName: reviewUser,
            text: reviewMdg,
            rating
        }
        toast.success("Cảm ơn bạn đã dành thời gian đánh giá!")
    }

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            image: imgUrl,
            productName,
            price
        }))

        toast.success("Cho vào giỏ thành công")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

    return (
        <Helmet title={productName}>
            <CommonSection title={productName} />

            <section className="pt-5">
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={imgUrl} alt="" />
                        </Col>
                        <Col lg='6'>
                            <div className="product__details">
                                <h2>{productName}</h2>
                                <div className="product__rating d-flex aligh-items-center gap-5 mb-3">
                                    <div>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-half-line"></i></span>
                                    </div>
                                    <p><span>({avgRating} rating)</span></p>
                                </div>
                                <div className="d-flex align-items-center gap-5">
                                    <span className="product__price">Liên hệ</span>
                                    <span className="product__categoty">Loại sản phẩm: {category.toUpperCase()}</span>
                                </div>
                                <p className="mt-3">{shortDesc}</p>
                                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn" onClick={addToCart}>Cho vào giỏ</motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="tab__wrapper d-flex align-items-center gap-5">
                                <h6 className={`${tab === "desc" ? "active__tab" : ""}`}
                                    onClick={() => setTab('desc')}>Description</h6>
                                <h6 className={`${tab === "rev" ? "active__tab" : ""}`} onClick={() => setTab('rev')}>Reviews</h6>
                            </div>
                            {
                                tab === "desc" ? (
                                    <div className="tab__content mt-5">
                                        <p>{description}</p>
                                    </div>
                                ) : (
                                    <div className="product__review mt-5">
                                        <div className="review__wrapper">
                                            {/* <ul>
                                                {reviews?.map((item, index) => (
                                                    <li kew={index} className="mb-4">
                                                        <h6>Anynomous</h6>
                                                        <span>{item.rating} ( rating)</span>
                                                        <p>{item.text}</p>
                                                    </li>
                                                ))}
                                            </ul> */}

                                            <div className="review__form">
                                                <h4>Để lại đánh giá của bạn</h4>
                                                <form action="" onSubmit={submitHandler}>
                                                    <div className="form__group">
                                                        <input type="text" placeholder="Tên bạn là?" ref={reviewUser} required/>
                                                    </div>
                                                    <div className="form__group d-flex align-item-center gap-5 rating__group">
                                                        <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(1)}>
                                                            1<i class="ri-star-s-fill"></i>
                                                        </motion.span>
                                                        <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(2)}>
                                                            2<i class="ri-star-s-fill"></i>
                                                        </motion.span>
                                                        <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(3)}>
                                                            3<i class="ri-star-s-fill"></i>
                                                        </motion.span>
                                                        <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(4)}>
                                                            4<i class="ri-star-s-fill"></i>
                                                        </motion.span>
                                                        <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(5)}>
                                                            5<i class="ri-star-s-fill"></i>
                                                        </motion.span>
                                                    </div>
                                                    <div className="form__group">
                                                        <textarea ref={reviewMdg} type="text" rows={4} placeholder="Nhận xét của bạn về sản phẩm" required/>
                                                    </div>

                                                    <motion.button whileTap={{scale: 1.2}} type="submit" className="buy__btn">Gửi</motion.button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </Col>
                        <Col lg='12' className="mt-5">
                            <h2 className="related__title">Có thể bạn cũng thích</h2>
                        </Col>
                        <ProductsList data={relatedProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default ProductDetails