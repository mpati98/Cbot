import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatbotReview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: '',
            address: '',
            phone: '',
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { quantity, address, phone } = steps;

        this.setState({ quantity, address, phone });
    }

    render() {
        const { quantity, address, phone } = this.state;
        return (
            <div style={{ width: '100%' }}>
                <h3>Đơn hàng của bạn</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Số lượng</td>
                            <td>: {quantity.value}</td>
                        </tr>
                        <tr>
                            <td>Địa chỉ</td>
                            <td>: {address.message}</td>
                        </tr>
                        <tr>
                            <td>Số điện thoại liên hệ</td>
                            <td>: {phone.value}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
ChatbotReview.propTypes = {
    steps: PropTypes.object,
};

ChatbotReview.defaultProps = {
    steps: undefined,
};

export {ChatbotReview}