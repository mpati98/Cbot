import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify"
import { db, storage } from "../firebase.config"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { collection, addDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

const AddProducts = () => {

    const [enterTitle, setEnterTitle] = useState('')
    const [enterShortDesc, setEnterShortDesc] = useState('')
    const [enterDescription, setEnterDescription] = useState('')
    const [enterCategory, setEnterCategory] = useState('')
    // const [enterPrice, setEnterPrice] = useState('')
    const [enterProductImg, setEnterProductImg] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const addProduct = async (e) => {
        e.preventDefault()
        setLoading(true)

        // === Add product to the firebase database
        try {
            const docRef = await collection(db, 'products')
            const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`)
            const uploadTask = uploadBytesResumable(storageRef, enterProductImg)

            uploadTask.on(() => {
                toast.error('Image not uploaded!')
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await addDoc(docRef, {
                        productName: enterTitle,
                        shortDesc: enterShortDesc,
                        description: enterDescription,
                        category: enterCategory,
                        // price: enterPrice,
                        imgUrl: downloadURL
                    })
                })
            })
            setLoading(false)
            toast.success("Product successfully added")
            setTimeout(() => {
                navigate("/dashboard/all-products")
             }, 2000)
        } catch (err) {
            setLoading(false)
            toast.error("Product not added, please check again!")
        }
    }

    return <section>
        <Container>
            <Row>
                <Col lg="12">
                    {
                        loading ? <h4 className="py-5">Loading ......</h4> : <>

                            <h4 className="mb-5">Add Product</h4>
                            <Form onSubmit={addProduct}>
                                <FormGroup className="form__group">
                                    <span>Product name</span>
                                    <input type="text" placeholder="Double sofa" value={enterTitle} onChange={e => setEnterTitle(e.target.value)} required />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <span>Short description</span>
                                    <input type="text" placeholder="Lorem" value={enterShortDesc} onChange={e => setEnterShortDesc(e.target.value)} />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <span>Description</span>
                                    <input type="text" placeholder="Lorem" value={enterDescription} onChange={e => setEnterDescription(e.target.value)} />
                                </FormGroup>
                                <div className="d-flex align-items-center gap-5 justify-content-between">
                                    <FormGroup className="form__group w-50">
                                        <span>Price</span>
                                        <p>Liên hệ với chúng tôi</p>
                                        {/* <input type="text" placeholder="10000" value={enterPrice} onChange={e => setEnterPrice(e.target.value)} /> */}
                                    </FormGroup>
                                    <FormGroup className="form__group w-50">
                                        <span>Category</span>
                                        <select className="w-100 p-2" value={enterCategory} onChange={e => setEnterCategory(e.target.value)}>
                                            <option>Select category</option>
                                            <option value="Tao">Táo</option>
                                            <option value="Quyt">Quýt</option>
                                            <option value="Dau">Dâu</option>
                                            <option value="Kiwi">Kiwi</option>
                                            <option value="Cam">Cam</option>
                                            <option value="Cherry">Cherry</option>
                                            <option value="Quat">Quất</option>
                                            <option value="Dua">Dưa</option>
                                            <option value="Le">Lê</option>
                                            <option value="Luu">Lựu</option>
                                            <option value="Me">Me</option>
                                            <option value="Nho">Nho</option>
                                        </select>
                                    </FormGroup>
                                </div>
                                <FormGroup className="form__group">
                                    <span>Product Image</span>
                                    <input type="file"
                                        onChange={e => setEnterProductImg(e.target.files[0])}
                                    />
                                </FormGroup>
                                <button className="buy__btn" type="submit">Add Product</button>
                            </Form>
                        </>
                    }
                </Col>
            </Row>
        </Container>
    </section>
}
export default AddProducts