// ===== Modal logic =====
const modal = document.getElementById('serviceModal');
const cards = document.querySelectorAll('.service-card');
const closeBtn = document.querySelector('.close');

// Dữ liệu chi tiết
const serviceData = {
  wash: {
    img: 'https://aothundepsg.com/wp-content/uploads/2021/08/nhan-vien-nu-xinh-dep-rua-xe-trung-tam-anycar.jpg',
    title: 'Rửa xe máy / ô tô tận nơi',
    desc: `
      <ul>
        <li>Gói rửa nhanh: 50.000₫ / xe máy – 150.000₫ / ô tô</li>
        <li>Gói rửa kỹ: 80.000₫ / xe máy – 250.000₫ / ô tô</li>
        <li>Phủ sáp, phủ nano, rửa gầm – tùy chọn thêm</li>
        <li>Không cần chờ – phục vụ tận nơi theo giờ hẹn</li>
      </ul>
    `,
    price: 'Từ 50.000₫',
    highlights: ['Nhanh chóng', 'Làm sạch toàn diện', 'Có phủ bóng nano', 'Phù hợp mọi loại xe'],
    link: 'dv1.html' // Thêm link cho dịch vụ rửa xe
  },
  repair: {
    img: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/10/15/1105357/311215881_4781739976.jpg',
    title: 'Sửa chữa thông dụng',
    desc: `
      <ul>
        <li>Thay dầu, lốp, bugi, dây cu-roa, đèn, còi...</li>
        <li>Sửa phanh, sửa điện, hệ thống khởi động</li>
        <li>Miễn phí kiểm tra tổng quát trước khi sửa</li>
        <li>Hỗ trợ tận nơi nếu xe hư giữa đường</li>
      </ul>
    `,
    price: 'Từ 80.000₫',
    highlights: ['Chẩn đoán nhanh', 'Chi phí minh bạch', 'Thợ kinh nghiệm', 'Có mặt 30 phút'],
    link: 'dv2.html' // Thêm link cho dịch vụ sửa chữa
  },
  maintenance: {
    img: 'https://lopmanhdung.com/wp-content/uploads/2022/12/LCW08023-1-scaled.jpg',
    title: 'Bảo dưỡng định kỳ',
    desc: `
      <ul>
        <li>Kiểm tra định kỳ mỗi 3.000 – 10.000 km</li>
        <li>Thay lọc dầu, lọc gió, bugi, nước làm mát</li>
        <li>Vệ sinh kim phun, bướm ga, má phanh</li>
        <li>Theo tiêu chuẩn của Honda, Yamaha, KIA...</li>
      </ul>
    `,
    price: 'Từ 200.000₫',
    highlights: ['Chuyên nghiệp', 'Phụ tùng chính hãng', 'Giá hợp lý', 'Tiết kiệm chi phí lâu dài'],
    link: 'dv3.html' // Thêm link cho dịch vụ bảo dưỡng
  },
  battery: {
    img: 'https://cuuhonhanh24h.com/wp-content/uploads/2023/04/cuu-ho-ac-quy-o-to.jpg',
    title: 'Cứu hộ ắc-quy',
    desc: `
      <ul>
        <li>Hỗ trợ 24/7 khi xe không nổ máy</li>
        <li>Test bình miễn phí tại chỗ</li>
        <li>Thay mới ắc-quy chỉ trong 15 phút</li>
        <li>Bảo hành bình mới lên tới 18 tháng</li>
      </ul>
    `,
    price: 'Từ 300.000₫',
    highlights: ['Có mặt 24/7', 'Nhanh gọn lẹ', 'Giá tốt', 'Bảo hành dài lâu'],
    link: 'dv4.html' // Thêm link cho dịch vụ cứu hộ ắc-quy
  }
};


// Mở modal
cards.forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.service;
    const data = serviceData[key];
    document.getElementById('modalImg').src = data.img;
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalDesc').innerHTML = data.desc;
    document.getElementById('modalPrice').innerText = data.price;
    
    // Thêm nút "Xem chi tiết" và gán link
    const detailBtn = document.getElementById('modalDetailBtn');
    if (detailBtn) {
      detailBtn.onclick = () => window.location.href = data.link;
    }
    
    modal.style.display = 'flex';
  });
});

// Đóng modal
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick   = e => { if (e.target === modal) modal.style.display = 'none'; }