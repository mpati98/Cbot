// Product cards
import productcardImg01 from "../images/card_Autumn_Glory.png";
import productcardImg02 from "../images/card_Ambrosia.png";
import productcardImg03 from "../images/card_Quyt_uc.png";

import productcardImg04 from "../images/card_Dau_Joy.png";
import productcardImg05 from "../images/card_Kiwi_Vang.png";
import productcardImg06 from "../images/card_Cam_Uc.png";
import productcardImg07 from "../images/card_Cherry_do_Uc.png";

import productcardImg08 from "../images/card_Dau_HQ.png";
import productcardImg09 from "../images/card_Kim_Quat_China.png";
import productcardImg10 from "../images/card_Dua_luoi_DL.png";
import productcardImg11 from "../images/card_Le_HQ.png";

import productcardImg12 from "../images/card_Luu_Tunisian_China.png";
import productcardImg13 from "../images/card_Me_TL.png";
import productcardImg14 from "../images/card_Nho_den_My.png";
import productcardImg15 from "../images/card_Nho_mau_don_HQ.png";
import productcardImg16 from "../images/card_Nho_xanh_Chile.png";

import productcardImg17 from "../images/card_Tao_Envy_NZ.png";
import productcardImg18 from "../images/card_Tao_Evercrisp_my.png";
import productcardImg19 from "../images/card_Tao_Fuji_Red_NP.png";
import productcardImg20 from "../images/card_Tao_Gala_NZ.png";

import productcardImg21 from "../images/card_Tao_Queen_NZ.png";

import productcardImg22 from "../images/card_Tao_Tau_China.png";
import productcardImg23 from "../images/card_Tao_xanh_my.png";

const products = [
  // Trending products
  {
    id: "01",
    productName: "Táo Autumn Glory Mỹ",
    imgUrl: productcardImg01,
    category: "Tao",
    type: 'trending',
    price: 0,
    shortDesc:
      "Sản phẩm độc quyền tại Việt Nam",
    description:
      "Sở hữu hương vị Ngọt ngào và sắc nét với hương caramel và chút quế tinh tế.\nTáo Autumn Glory® rất ngọt ngào và giòn với chút hương quế và hương caramel tinh tế. Một số mô tả nó có vị giống nước sốt táo trong khi những người khác nói rằng nó khiến họ nhớ đến rượu táo; bất kể bạn mô tả nó như thế nào, táo Mùa thu có hương vị sẽ khiến bạn hồi tưởng về mùa thu.\nVới hương vị caramel và quế, Autumn Glory rất linh hoạt trong nhiều ứng dụng ẩm thực. Loại táo ngon ngọt này đặc biệt ngon khi ăn tươi mà còn có thể bổ sung tốt vào các món mặn và món ngọt. Hương caramel ngọt ngào kết hợp tốt với hương vị thơm ngon như các loại thảo mộc tươi (đặc biệt là húng tây, hương thảo, cây xô thơm và húng quế), thịt lợn và các loại hạt (đặc biệt là hạnh nhân và đậu phộng).\nJuicing Autumn Glory tạo ra một loại cocktail lý tưởng và kết hợp tốt với rượu rum, whisky và rượu vang trắng (dành cho sangria).",
    reviews: [
      {
        rating: 4.7,
        text: "Táo ngon, đóng gói cẩn thận",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Táo Ambrosia Mỹ",
    imgUrl: productcardImg02,
    category: "Tao",
    type: "trending",
    price: 0,
    shortDesc:
      "Vị ngọt của Ambrosia không đậm, mà là vị ngọt nhẹ nhàng, tự nhiên, rất dễ chịu cho vị giác. Vì thế giống táo này được mệnh danh là “vị ngọt từ thiên nhiên”.",
    description:
      "Đặc điểm nổi bật:\nVị ngọt của Ambrosia không đậm, mà là vị ngọt nhẹ nhàng, tự nhiên, rất dễ chịu cho vị giác. Vì thế giống táo này được mệnh danh là “vị ngọt từ thiên nhiên”.\nĐặc biệt, ruột táo có thể giữ được màu trắng tinh khôi khi để ngoài không khí nhiều giờ liền mà không bị ố vàng như các loại táo khác.\nThông tin dinh dưỡng:\nTrung bình một quả táo cung cấp cho cơ thể khoảng 100 kcal. Trong đó chất xơ chiếm 17%, hỗ trợ tốt cho hệ tiêu hóa, tạo cảm giác no hỗ trợ giảm cân hiệu quả.\nĂn một quả táo mỗi ngày cũng cung cấp 14% vitamin C, tăng cường sức đề kháng cho cơ thể.\nNhờ lượng dồi dào phytonutrient (kaempferol và quercetin), thêm một quả táo Ambrosia vào thực đơn mỗi ngày sẽ góp phần làm chậm sự phát triển của tế bào có hại, ngăn ngừa nguy cơ mắc bệnh ung thư.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  // Best sale product
  {
    id: "03",
    productName: "Quýt Úc",
    imgUrl: productcardImg03,
    category: "Quyt",
    type:"best_sale",
    price: 0,
    shortDesc:
      "Quýt phát triển ở những khu vực khí hậu nhiệt đới, và cận nhiệt đới ấm nóng. Hiện nay, Quýt được trồng rộng rãi ở khu vực Nam Úc, đặc biệt là tiểu bang Queensland. Quýt Úc ngoài vỏ màu vàng tươi, vị ngọt, mọng nước, có hạt và dễ bóc vỏ.",
    description:
      "Dinh dưỡng trong quýt Úc vô cùng phong phú, nếu đặt lên bàn so sánh với một số loại quả khác: trong 100gr quýt cơ thể hấp thụ, có hàm lượng protein của quýt Úc cao gấp 9 lần quả lê, hàm lượng canxi gấp 5 lần, hàm lượng photpho gấp 5,5 lần; vitamin B1 cao gấp 8 lần, vitamin B2 cao gấp 3 lần và vitamin C cũng cao gấp 10 lần quả lê.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  //new arrival
  {
    id: "04",
    productName: "Dâu Joy Farm Hàn Quốc",
    imgUrl: productcardImg04,
    category: "Dau",
    type: "new_arrival",
    price: 0,
    shortDesc:
      "Dâu tây được trồng trong nhà kính thông minh, được chăm sóc hoàn toàn tự động. Dâu Hàn trở thành thương hiệu được yêu thích trên toàn thế giới.",
    description:
      "Dâu tây được trồng trong nhà kính thông minh, được chăm sóc hoàn toàn tự động. Dâu Hàn trở thành thương hiệu được yêu thích trên toàn thế giới.\nDâu tây là loại trái cây phổ biến chứa hàm lượng cao các vitamin, chất chống oxy hóa và các thành phần dinh dưỡng quan trọng khác.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  // Popular in Category
  {
    id: "05",
    productName: "Kiwi Vàng New Zealand",
    imgUrl: productcardImg05,
    category: "Kiwi",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Được mệnh danh là “siêu trái cây” bởi Kiwi chứa một lượng lớn các vitamin và dưỡng chất. Kiwi của New Zealand là loại trái cây rất được yêu thích bởi hương vị mới lạ hoàn hảo, mọng nước và công dụng chữa nhiều bệnh.",
    description:
      "Kiwi của Newzealand ngon số 1 thế giới. Toàn bộ quy trình từ trồng, chăm bón đến thu, hái, vận chuyển đều được chính phủ Newzealand kiểm soát rất chặt chẽ để đảm bảo trái Kiwi Newzealand luôn đồng đều và đạt tiêu chuẩn cao nhất.\nĐặc điểm: Quả kiwi này có ruột bên trong màu vàng, có vỏ mượt, màu đồng, ở đầu quả có đài giống như vương miện. Quả kiwi vàng có thể ăn được ngay khi mua, vì vậy bạn có thể ngay lập tức thưởng thức được vị ngọt ngào của nó.\nMùa vụ: từ tháng 5 đến tháng 1",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Cam Úc",
    imgUrl: productcardImg06,
    category: "Cam",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "07",
    productName: "Cherry Đỏ Úc",
    imgUrl: productcardImg07,
    category: "Cherry",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Cherry Úc có vỏ giòn, màu hơi đỏ tím và nhìn không bóng bẩy như Cherry New Zealand. Cherry úc có vị ngọt và mùi thơm đặc trưng, để lại ấn tượng sâu sắc với bất cứ ai thưởng thức.",
    description:
      "Cherry Úc hay quả anh đào là trái cây nhập khẩu rất được ưa chuộng ở nước ta, được các gia đình Việt vô cùng yêu thích. Loại quả này không chỉ ngon mà còn đem lại những lợi ích tuyệt vời cho sức khỏe con người.\nTrong Cherry Úc có chứa vitamin E, vitamin C, các khoáng chất thiết yếu, chất chống oxy hóa và các hợp chất kháng viêm. Bên trong Cherry Úc còn chứa các flavonoid cùng các hợp chất làm chậm hoặc ức chế sự phát triển của tế bào ung thư cùng nhiều chất dinh dưỡng như canxi, mangan, đồng, magie, kali,…",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Dâu Hàn Quốc",
    imgUrl: productcardImg08,
    category: "Dau",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Dâu tây Hàn Quốc sở hữu màu đỏ tươi quyến rũ, quả rất to, thịt dày, vị ngọt thanh, mọng nước, chỉ cần cắn một miếng thôi cũng đủ nhớ mãi hương thơm dịu dàng của loại quả đỏ mọng.",
    description:
      "– Dâu tây là một chi thực vật hạt kín và loài thực vật có hoa thuộc họ Hoa hồng.\n– Mặc dù dâu tây có nguồn gốc từ Châu Mỹ nhưng với ngoại hình bắt mắt, độ đậm vị đặc trưng nên Dâu Tây Hàn dường như được mọi người săn đón hơn cả.\n– Kích thước quả thường khá lớn, mềm và mọng nước. Khi thưởng thức sẽ cảm nhận rõ được độ ngọt đậm vị tự nhiên, xen thanh chua tạo điểm nhấn.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Kim Quất China",
    imgUrl: productcardImg09,
    category: "Quat",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "Dưa Lưới Đài Loan",
    imgUrl: productcardImg10,
    category: "Dua",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "11",
    productName: "Lê Hàn Quốc",
    imgUrl: productcardImg11,
    category: "Le",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Theo Đông y, trái lê ( quả lê ) là loại trái cây có vị ngọt, hơi chua, tính mát có tác dụng tạo nước bọt, nhuận táo, thanh nhiệt, tiêu đờm nên chữa được các chứng khát nước, nước bọt ít do nhiệt, ho do nhiệt, kinh sợ do đàm nhiệt, bí tiện…",
    description:
      "Theo Đông y, trái lê ( quả lê ) là loại trái cây có vị ngọt, hơi chua, tính mát có tác dụng tạo nước bọt, nhuận táo, thanh nhiệt, tiêu đờm nên chữa được các chứng khát nước, nước bọt ít do nhiệt, ho do nhiệt, kinh sợ do đàm nhiệt, bí tiện…\nY học hiện đại nghiên cứu về trái lê ( quả lê ) cũng ghi nhận lê có tác dụng hạ huyết áp, bệnh tim, chữa chứng hoa mắt, chóng mặt, ù tai, tim đập nhanh có thể dẫn đến loạn nhịp.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "12",
    productName: "Lựu Tunisian China",
    imgUrl: productcardImg12,
    category: "Luu",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "Me Thái Lan",
    imgUrl: productcardImg13,
    category: "Me",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "14",
    productName: "Nho Đen Mỹ Bravante",
    imgUrl: productcardImg14,
    category: "Nho",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Nho Mẫu Đơn Hàn Quốc",
    imgUrl: productcardImg15,
    category: "Nho",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productName: "Nho xanh Autumn Crips Chile",
    imgUrl: productcardImg16,
    category: "Nho",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Nho xanh autumn Chile được trồng tại các trang trại lớn của Chile bởi người bản địa theo phương pháp canh tác thuận tự nhiên. Nho có quả to, thuôn dài, vỏ màu xanh hổ phách. Thịt giòn, mọng nước, vị ngọt thơm đậm, không hạt.",
    description:
      "Nho xanh autumn Chile được trồng tại các trang trại lớn của Chile bởi người bản địa theo phương pháp canh tác thuận tự nhiên. Nho có quả to, thuôn dài, vỏ màu xanh hổ phách. Thịt giòn, mọng nước, vị ngọt thơm đậm, không hạt.\n– Nho chứa vitamin C, chất xơ, kali và chất chống oxy hóa. Resveratrol và axit ellagic có thể được tìm thấy trong vỏ (nho đỏ) và hạt nho. Cả hai chất này đều là chất chống oxy hóa mà theo Viện Nghiên cứu Ung thư Hoa Kỳ, có thể ngăn ngừa, đảo ngược và làm chậm các đột biến gen thường gây ung thư.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "17",
    productName: "Táo Envy New Zealand",
    imgUrl: productcardImg17,
    category: "Tao",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "18",
    productName: "Táo EverCrisp Mỹ",
    imgUrl: productcardImg18,
    category: "Tao",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Táo Fuji Red Nam Phi",
    imgUrl: productcardImg19,
    category: "Tao",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productName: "Táo Gala New Zealand",
    imgUrl: productcardImg20,
    category: "Tao",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "21",
    productName: "Táo Queen New Zealand",
    imgUrl: productcardImg21,
    category: "Tao",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "22",
    productName: "Táo tàu China",
    imgUrl: productcardImg22,
    category: "Tao",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "23",
    productName: "Táo Xanh Mỹ",
    imgUrl: productcardImg23,
    category: "Tao",
    type: "popular_in_category",
    price: 0,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  }
];

export default products;
