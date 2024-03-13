import React from "react";
import "../styles/cart.css"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection"
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/CartSlice"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector((state) => state.cart.totalAmount)

    return (
        <Helmet title="Giỏ hàng">
            <CommonSection title="Giỏ hàng của bạn" />
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                cartItems.length === 0 ? (
                                    <h2 className="fs-4 text-center">Chưa có sản phẩm nào trong giỏ</h2>
                                ) : (
                                    <table className="table bordered">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Hình ảnh
                                                </th>
                                                <th>
                                                    Tên sản phẩm
                                                </th>
                                                <th>
                                                    Giá
                                                </th>
                                                <th>
                                                    Số lượng
                                                </th>
                                                <th>
                                                    Xóa khỏi giỏ hàng
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartItems.map((item, index) => (
                                                    <Tr item={item} key={index} />
                                                ))
                                            }
                                        </tbody>
                                    </table>

                                )
                            }
                        </Col>
                        <Col lg='3'>
                            <div>
                                <h6 className="d-flex align-items-center justify-content-between">
                                    Tổng giá trị đơn hàng
                                    <span className="fs-4 fw-bold">{totalAmount} vnd</span>
                                </h6>

                            </div>
                            <p className="fs-6 mt-2">Thuế và phí ship sẽ tính trong phần checkout</p>
                            <div>
                                <form action="https://zalo.me/878903023073905671">
                                    <button class="buy__btn cart_button">Liên hệ với chúng tôi</button>
                                </form>
                                <button class="buy__btn cart_button mt-3"><Link to='/shop'>Tiếp tục mua</Link></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

const Tr = ({ item }) => {

    const dispatch = useDispatch()

    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }
    return (
        <tr>
            <td><img src={item.imgUrl} alt="" /></td>
            <td>{item.productName}</td>
            <td>{item.price} vnd</td>
            <td>{item.quantity} Kg</td>
            <td><motion.i whileTap={{ scale: 1.2 }} onClick={deleteProduct} class="ri-delete-bin-line"></motion.i></td>
        </tr>)
}

export default Cart