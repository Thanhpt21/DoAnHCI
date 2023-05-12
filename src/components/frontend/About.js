import React from 'react';
import "../frontend/css/About.css";
import bannerabout from "../../assets/admin/assets/img/bannerabout.png";

function About() {
    return  (
        <div className='row container_about'>
            <div className='col-xs-12 col-sm-12 col-md-12'>
                <div>
                    <h3>Về chúng tôi</h3>
                </div>
                <div>
                    <p style={{textAlign: 'center'}}>
                        <img src={bannerabout} alt='' />
                    </p>
                    <p style={{margin: '0px', paddingBottom: '15px', color: 'rgb(59, 59, 59)', fontSize: '16px'}}>
                        SHOP JOHN HENRY - WEBSITE MUA SẮM HÀNG ĐẦU VỚI NHỮNG MẪU THỜI TRANG MỚI LẠ VÀ HIỆN ĐẠI
                    </p>
                    <p style={{margin: '0px', paddingBottom: '15px', color: 'rgb(59, 59, 59)', fontSize: '15px'}}>
                    BẠN ĐANG TÌM NHỮNG MẪU THỜI TRANG, QUẦN ÁO, TÚI XÁCH VÀ PHỤ KIỆN MỚI NHẤT TRÊN MẠNG? HÃY MUA SẮM NGAY HÔM NAY TẠI SHOP JOHN HENRY
SHOP JOHN HENRY sẽ mang lại cho khách hàng những trải nghiệm mua sắm thời trang với những mẫu thời trang mới lạ đi cùng xu hướng hiện đại từ các thương hiệu thời trang quốc tế, cam kết chất lượng phục vụ hàng đầu cùng với những bộ sưu tập thời trang theo mùa, quần áo, túi xách, giày dép, phụ kiện với những xu hướng thời trang mới nhất. Bạn có thể tìm thấy những bộ trang phục mình muốn từ những bộ đồ ở nhà thật thoải mái hay tự tin trong những bộ trang phục công sở phù hợp. Những trải nghiệm mới chỉ có ở trang mua sắm trực tuyến SHOP JOHN HENRY
                    </p>
                    <p style={{margin: '0px', paddingBottom: '15px', color: 'rgb(59, 59, 59)', fontSize: '16px', fontWeight: 'bold'}}>
                        SHOP JOHN HENRY - MÓN QUÀ TẶNG NGƯỜI THÂN THẬT Ý NGHĨA!
                    </p>
                    <p style={{margin: '0px', paddingBottom: '15px', color: 'rgb(59, 59, 59)', fontSize: '15px',}}>
                    SHOP JOHN HENRY sẽ gợi ý cho bạn những món quà thật ý nghĩa để tặng người thân, bạn bè. Chúng tôi sẽ làm bạn hài lòng với sự lựa chọn của mình bằng giá tốt nhất và chất lượng dịch vụ hoàn hảo.
                    </p>
                    <p style={{margin: '0px', paddingBottom: '15px', color: 'rgb(59, 59, 59)', fontSize: '16px', fontWeight: 'bold'}}>
                    MUA SẮM Ở SHOP JOHN HENRY - PHÙ HỢP VỚI TÚI TIỀN TỪ DOANH NHÂN, NHÂN VIÊN VĂN PHÒNG ĐẾN CÁC BẠN TRẺ
                    </p>
                    <p style={{margin: '0px', paddingBottom: '15px', color: 'rgb(59, 59, 59)', fontSize: '15px',}}>
                    SHOP JOHN HENRY luôn cập nhật những xu hướng thời trang phong cách nhất từ những hãng thời trang cao cấp trên thế giới, tất cả đều có ở SHOP JOHN HENRY. Đặc biệt, SHOP JOHN HENRY còn có nhiều đợt khuyến mãi, giảm giá đặc biệt với giá tốt nhất. Gía hợp lý trên hàng chất lượng. Đảm bảo uy tính và phục vụ nhiệt tình đến khách hàng chỉ có tại SHOP JOHN HENRY.
                    </p>
                    <p style={{margin: '0px', paddingBottom: '15px', color: 'rgb(59, 59, 59)', fontSize: '16px', fontWeight: 'bold'}}>
                    PHONG CÁCH MUA SẮM HIỆN ĐẠI - THUẬN TIỆN, THANH TOÁN AN TOÀN - DỄ DÀNG
                    </p>
                    <p style={{margin: '0px', paddingBottom: '15px', color: 'rgb(59, 59, 59)', fontSize: '15px',}}>
                    Bạn có thể mua sắm thoải mái trên SHOP JOHN HENRY mà không có bất kỳ lo lắng nào: đổi mẫu, size mà bạn ưng ý trong vòng 3 ngày kể từ ngày nhận hàng. Nếu bạn có bất kì câu hỏi nào về các sản phẩm của chúng tôi từ quần áo nữ, túi xách, phụ kiện ... hãy liên hệ với chúng tôi theo số hotline, hoặc fanpage của shop, để chúng tôi được phục vụ bạn tốt nhất.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
