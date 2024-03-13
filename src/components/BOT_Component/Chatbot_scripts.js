import {ChatbotReview} from './ChatbotReview'

export const ChatbotScript = [
  {
    id: '0',
    message: "AI Táo xin chào quý khách, quý khách cần Táo giúp gì không ạ?",
    trigger: "help_menu"
  },
  {
    id: "help_menu",
    options: [
      { value: 'muaTao', label: 'Mua táo', trigger: '2' },
      { value: 'moreInfor', label: 'Cho biết thông tin về Táo Autumn', trigger: '3' },
      { value: 'contact', label: 'Liên hệ người bán', trigger: '4' },
    ],
  },
  {
    id: '1',
    message: "Bạn còn cần AI Táo giúp gì nữa không ạ?",
    trigger: "help_menu"
  },
  {
    id: '2',
    message: 'Bạn muốn mua mấy cân táo?',
    trigger: 'quantity',
  },
  {
    id: '3',
    message: 'Táo Autumn Glory có hương vị ngọt ngào, giòn tan cùng một chút hương quế và hương caramel tinh tế.',
    trigger: '1',
  },
  {
    id: '4',
    message: 'Bạn có thể liên hệ chúng tôi ngay qua số: 012345667',
    trigger: '1',
  },
  {
    id: 'quantity',
    user: true,
    trigger: '5',
    validator: (value) => {
      if (isNaN(value)) {
        return 'value must be a number';
      } else if (value < 0) {
        return 'value must be positive';
      } else if (value > 120) {
        return `${value}? Come on!`;
      }
      return true;
    },
  },
  {
    id: '5',
    message: 'Bạn muốn mua {previousValue} ký táo, Cho tôi biết thêm thông tin để giao hàng nhé!',
    trigger: '6',
  },
  {
    id: '6',
    message: 'Địa chỉ nhận hàng của bạn là:',
    trigger: 'address',
  },
  {
    id: 'address',
    user: true,
    trigger: "7"
  },
  {
    id: '7',
    message: 'Số điện thoại nhận hàng là:',
    trigger: 'phone',
  },
  {
    id: 'phone',
    user: true,
    trigger: '8',
  },
  {
    id: '8',
    message: 'OK, thông tin đơn hàng của bạn là:',
    trigger: 'review',
  },
  {
    id: 'review',
    component: <ChatbotReview />,
    asMessage: true,
    trigger: 'update',
  },
  {
    id: 'update',
    message: 'Bạn có muốn thay đổi thông tin gì không?',
    trigger: 'update-question',
  },
  {
    id: 'update-question',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'update-yes' },
      { value: 'no', label: 'No', trigger: 'end-message' },
    ],
  },
  {
    id: 'update-yes',
    message: 'Bạn muốn thay đổi thông tin gì nào?',
    trigger: 'update-fields',
  },
  {
    id: 'update-fields',
    options: [
      { value: 'quantity', label: 'Số lượng', trigger: '9' },
      { value: 'address', label: 'Địa chỉ', trigger: '10' },
      { value: 'phone', label: 'Số điện thoại', trigger: '11' },
    ],
  },
  {
    id: '9',
    message: "Số lượng: ",
    trigger: "update-quantity"
  },
  {
    id: 'update-quantity',
    update: 'quantity',
    trigger: '8',
  },
  {
    id: '10',
    message: "Địa chỉ nhận hàng: ",
    trigger: "update-address"
  },
  {
    id: 'update-address',
    update: 'address',
    trigger: '8',
  },
  {
    id: '11',
    message: "Số điện thoại nhận hàng:",
    trigger: "update-phone"
  },
  {
    id: 'update-phone',
    update: 'phone',
    trigger: '8',
  },
  {
    id: 'end-message',
    message: 'Cảm ơn bạn đã đặt hàng, chúng tôi sẽ liên hệ lại ngay khi có thể nhé!',
    end: true,
  },
];