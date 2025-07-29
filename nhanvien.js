/* ========== DATA ========== */
// Define staff data for nhanvien.html (Page 1)
const staffData1 = {
    nv1: {name:'Nguyễn Văn A', job:'Trưởng nhóm Rửa xe', age:'30 tuổi', char:'Chuyên nghiệp, tỉ mỉ', hobby:'Đá bóng, du lịch', img:'https://tse4.mm.bing.net/th/id/OIP.evxNSEISPS491aS8jm2mXQHaE8?pid=Api&P=0&h=180'},
    nv2: {name:'Trần Thị B', job:'Nhân viên Rửa xe cơ bản', age:'25 tuổi', char:'Nhanh nhẹn, nhiệt tình', hobby:'Nấu ăn, chụp ảnh', img:'https://tse3.mm.bing.net/th/id/OIP.UvnvZxv2Q7VAhfq0-jimbgHaEK?pid=Api&P=0&h=180'},
    nv3: {name:'Lê Văn C', job:'Nhân viên Rửa khoang máy', age:'28 tuổi', char:'Cẩn thận, sạch sẽ', hobby:'Đọc sách, câu cá', img:'https://watermark.lovepik.com/photo/20211208/large/lovepik-image-of-car-mechanic-holding-a-wrench-picture_501689617.jpg'},
    nv4: {name:'Phạm Thị D', job:'Nhân viên Hút bụi & Dọn nội thất', age:'26 tuổi', char:'Chi tiết, chu đáo', hobby:'Xem phim, làm vườn', img:'https://tse4.mm.bing.net/th/id/OIP.Yu9Ef8SFFMLC4enelXxv8AHaE7?pid=Api&P=0&h=180'},
    nv5: {name:'Hoàng Văn E', job:'Nhân viên Vệ sinh kính', age:'24 tuổi', char:'Năng động, nhanh nhẹn', hobby:'Chơi game, bơi lội', img:'https://tse2.mm.bing.net/th/id/OIP.3o45ll6LvPOmMc5FM75uyAHaEw?pid=Api&P=0&h=180'},
    nv6: {name:'Nguyễn Thị F', job:'Kiểm tra & Bàn giao xe', age:'29 tuổi', char:'Trung thực, giao tiếp tốt', hobby:'Nghe nhạc, đọc báo', img:'https://tse4.mm.bing.net/th/id/OIP.fOvIH7eiVHPrCTjnPOGA7gHaE8?pid=Api&P=0&h=180'},
};

// Define staff data for nhanvien2.html (Nhân viên sửa xe - 6 người)
const staffData2 = {
    nv7: {name:'Vũ Đình G', job:'Chuyên viên Sửa động cơ', age:'35 tuổi', char:'Kinh nghiệm, chuẩn xác', hobby:'Sửa chữa điện tử, câu cá', img:'https://tse4.mm.bing.net/th/id/OIP.BgVRtg99qnRRw5sagJjZjgAAAA?pid=Api&P=0&h=180'},
    nv8: {name:'Đỗ Hoàng H', job:'Kỹ thuật viên Sửa gầm & khung xe', age:'32 tuổi', char:'Chắc chắn, cẩn trọng', hobby:'Đọc sách, đi bộ đường dài', img:'https://tse2.mm.bing.net/th/id/OIP.45jSEj8RQ0fYEYbzTnh3ywHaEM?pid=Api&P=0&h=180'},
    nv9: {name:'Bùi Minh I', job:'Chuyên gia Điện - Điện lạnh ô tô', age:'38 tuổi', char:'Tư duy logic, giải quyết vấn đề', hobby:'Chơi cờ, nghe podcast', img:'https://tse1.mm.bing.net/th/id/OIP.9O05MSMnZGJSwQ1GD7rHpwHaE8?pid=Api&P=0&h=180'},
    nv10: {name:'Trịnh Lan K', job:'Kỹ thuật viên Sửa hệ thống phanh', age:'27 tuổi', char:'Cẩn thận, chính xác', hobby:'Nấu ăn, tập yoga', img:'https://tse3.mm.bing.net/th/id/OIP.MSHfXkRMoK6bFumQCrS8HwHaE8?pid=Api&P=0&h=180'},
    nv11: {name:'Ngô Quang L', job:'Thợ sơn & đồng sơn', age:'30 tuổi', char:'Khéo léo, tỉ mỉ', hobby:'Vẽ tranh, chơi nhạc cụ', img:'https://tse1.mm.bing.net/th/id/OIP.wmO1ThK2-IiGFUi56dMKpgHaFj?pid=Api&P=0&h=180'},
    nv12: {name:'Lý Thúy M', job:'Hỗ trợ kỹ thuật & chuẩn đoán lỗi', age:'26 tuổi', char:'Nhiệt tình, ham học hỏi', hobby:'Chơi game, đọc truyện', img:'https://tse4.mm.bing.net/th/id/OIP.sIFlhR5Ujg9Ry47Nw6YQpAHaE7?pid=Api&P=0&h=180'},
};

// Define staff data for nhanvien3.html (Nhân viên bảo dưỡng - 6 người)
const staffData3 = {
    nv13: {name:'Đặng Văn N', job:'Chuyên viên Bảo dưỡng định kỳ', age:'40 tuổi', char:'Giàu kinh nghiệm, trách nhiệm', hobby:'Câu cá, đọc báo', img:'https://tse3.mm.bing.net/th/id/OIP.ygfTgu1aaqEH5pM9Ez-aHgHaE8?pid=Api&P=0&h=180'},
    nv14: {name:'Cao Vương O', job:'Kỹ thuật viên Bảo dưỡng lốp & mâm', age:'28 tuổi', char:'Tỉ mỉ, cẩn thận', hobby:'Chụp ảnh, làm đồ handmade', img:'https://tse2.mm.bing.net/th/id/OIP.zEH5jMw2qFa4BI5-I-pTxgHaFD?pid=Api&P=0&h=180'},
    nv15: {name:'Trương Quốc P', job:'Chuyên viên Bảo dưỡng hệ thống treo', age:'33 tuổi', char:'Chuẩn xác, có hệ thống', hobby:'Chơi thể thao, nghe nhạc', img:'https://tse3.mm.bing.net/th/id/OIP.NxJnE6TegM7pbl-iSXVw-gHaFj?pid=Api&P=0&h=180'},
    nv16: {name:'Chu Toàn Q', job:'Nhân viên Kiểm tra & Châm dung dịch', age:'24 tuổi', char:'Cẩn thận, nhanh nhẹn', hobby:'Làm bánh, xem phim', img:'https://tse3.mm.bing.net/th/id/OIP.9XxctKFQhrBnW7eP-kKTpAHaEK?pid=Api&P=0&h=180'},
    nv17: {name:'Phan Văn R', job:'Kỹ thuật viên Chăm sóc nội thất chuyên sâu', age:'31 tuổi', char:'Tinh tế, sáng tạo', hobby:'Đọc sách, cắm trại', img:'https://tse2.mm.bing.net/th/id/OIP.S7lL8rv6Dp_LIbcd6OuKgQHaE7?pid=Api&P=0&h=1800'},
    nv18: {name:'Phan Phú S', job:'Chuyên viên Phủ ceramic & Bảo vệ sơn', age:'29 tuổi', char:'Kiên nhẫn, tỉ mỉ', hobby:'Đi du lịch, nấu ăn', img:'https://tse4.mm.bing.net/th/id/OIP.M-64NWMPSA8DSX8mBtXjDQHaE8?pid=Api&P=0&h=180'},
};

// Define staff data for nhanvien4.html (Nhân viên cứu trợ & đặc biệt - 4 người)
const staffData4 = {
    nv19: {name:'Lê Văn T', job:'Đội trưởng Cứu hộ giao thông', age:'45 tuổi', char:'Bình tĩnh, quyết đoán', hobby:'Lái xe đường dài, chơi cờ', img:'https://tse2.explicit.bing.net/th/id/OIP.N6Xqe4pCqZ5CSDCSJUbpUgHaKQ?pid=Api&P=0&h=180'},
    nv20: {name:'Võ Thị U', job:'Nhân viên Cứu hộ khẩn cấp', age:'33 tuổi', char:'Nhanh nhạy, linh hoạt', hobby:'Tập gym, leo núi', img:'https://tse2.mm.bing.net/th/id/OIP.Nil4uzR0uS2H83kGTYemKgHaE7?pid=Api&P=0&h=180'},
    nv21: {name:'Trần Văn V', job:'Chuyên viên Tư vấn kỹ thuật từ xa', age:'38 tuổi', char:'Kiến thức rộng, giao tiếp tốt', hobby:'Nghiên cứu công nghệ, đọc sách', img:'https://tse1.explicit.bing.net/th/id/OIP._GjC_qTRlKL_xSW_92oqiwHaHx?pid=Api&P=0&h=180'},
    nv22: {name:'Đinh Thị X', job:'Điều phối viên tổng đài', age:'27 tuổi', char:'Thân thiện, sắp xếp tốt', hobby:'Nghe nhạc, làm thủ công', img:'https://tse1.mm.bing.net/th/id/OIP.7xp6xRsedsV9Am_YAI0c0AHaHZ?pid=Api&P=0&h=180'},
};


// Determine which staff data to use based on the body's data-page attribute
let staffData;
const bodyElement = document.body;
const pageType = bodyElement.dataset.page;

switch (pageType) {
    case 'nhanvien1':
        staffData = staffData1;
        break;
    case 'nhanvien2':
        staffData = staffData2;
        break;
    case 'nhanvien3':
        staffData = staffData3;
        break;
    case 'nhanvien4':
        staffData = staffData4;
        break;
    default:
        // Default to staffData1 if no specific page type is found
        staffData = staffData1;
}

/* ========== LOCAL STORAGE ========== */
let reviews = JSON.parse(localStorage.getItem('staffReviews')) || {};
function saveReviews(){
    localStorage.setItem('staffReviews', JSON.stringify(reviews));
}

/* ========== RENDER FUNCTIONS ========== */
const staffGrid = document.getElementById('staffGrid');

// Function to render staff cards
function renderStaffCards() {
    staffGrid.innerHTML = ''; // Clear existing cards
    for (const id in staffData) { // Use the dynamically selected staffData
        const s = staffData[id];
        const staffCard = document.createElement('div');
        staffCard.className = 'staff-card';
        staffCard.dataset.id = id;
        staffCard.innerHTML = `
            <img src="${s.img}" alt="${s.name}">
            <div class="staff-info">
                <h3>${s.name}</h3>
                <p>${s.job}</p>
                <div class="avg">
                    <i class="fas fa-star"></i>
                    <span class="avg-score">0</span> (<span class="count">0</span> đánh giá)
                </div>
            </div>
        `;
        staffGrid.appendChild(staffCard);
    }
    // Attach event listeners after cards are rendered
    document.querySelectorAll('.staff-card').forEach(c => {
        c.addEventListener('click', () => openModal(c.dataset.id));
    });
    // Update averages for all staff after rendering cards
    Object.keys(staffData).forEach(updateAvg); // Use the dynamically selected staffData
}

function renderReviews(id){
    const list = document.getElementById('reviewList');
    list.innerHTML='';
    const arr = reviews[id] || [];
    arr.forEach(r=>{
        const div=document.createElement('div');
        div.className='review-item';
        div.innerHTML=`<div class="stars">${'★'.repeat(r.star)}</div>${r.text}`;
        list.appendChild(div);
    });
    updateAvg(id);
}

function updateAvg(id){
    const arr=reviews[id] || [];
    const staffCardEl = document.querySelector(`.staff-card[data-id="${id}"]`);
    if (!staffCardEl) return; // Ensure the card element exists

    const avgEl=staffCardEl.querySelector('.avg-score');
    const cntEl=staffCardEl.querySelector('.count');

    if(!arr.length){
        avgEl.textContent='0.0'; // Display 0.0 for no reviews
        cntEl.textContent='0';
        return;
    }
    const avg=(arr.reduce((a,b)=>a+b.star,0)/arr.length).toFixed(1);
    avgEl.textContent=avg;
    cntEl.textContent=arr.length;
}

/* ========== MODAL ========== */
const modal=document.getElementById('reviewModal');
const closeBtn=document.querySelector('.close');
let currentId='';

function openModal(id){
    currentId=id;
    const s=staffData[id]; // Use the dynamically selected staffData
    document.getElementById('modalImg').src=s.img;
    document.getElementById('modalName').textContent=s.name;
    document.getElementById('modalJob').textContent=s.job;
    document.getElementById('modalAge').textContent=s.age;
    document.getElementById('modalChar').textContent=s.char;
    document.getElementById('modalHobby').textContent=s.hobby;
    renderReviews(id);
    modal.style.display='flex';

    // Reset star selection when modal opens
    selectedStar = 0;
    stars.forEach(s => s.classList.remove('active'));
}

closeBtn.onclick=()=>modal.style.display='none';
window.onclick=e=>{if(e.target===modal)modal.style.display='none';};

/* ========== REVIEW FORM INTERACTION ========== */
let selectedStar=0;
const starSelect=document.getElementById('starSelect');
const stars=starSelect.querySelectorAll('i');

stars.forEach(star=>{
  star.addEventListener('click',()=>{
    selectedStar=+star.dataset.star;
    stars.forEach((s,i)=>s.classList.toggle('active',i<selectedStar));
  });
});

starSelect.addEventListener('mouseover',e=>{
  if(!e.target.dataset.star)return;
  const h=+e.target.dataset.star;
  stars.forEach((s,i)=>s.classList.toggle('active',i<h));
});

starSelect.addEventListener('mouseleave',()=>{
  stars.forEach((s,i)=>s.classList.toggle('active',i<selectedStar));
});

document.getElementById('submitReview').addEventListener('click',()=>{
  const text=document.getElementById('reviewText').value.trim();
  if(!selectedStar || !text){
      alert('Vui lòng chọn sao và nhập bình luận!');
      return;
  }
  if(!reviews[currentId])reviews[currentId]=[];
  reviews[currentId].push({star:selectedStar,text});
  saveReviews();
  renderReviews(currentId);
  document.getElementById('reviewText').value='';
  selectedStar=0;
  stars.forEach(s=>s.classList.remove('active'));
});

/* ========== INITIALIZATION ========== */
document.addEventListener('DOMContentLoaded', () => {
    renderStaffCards(); // Render staff cards when DOM is ready
    // Sticky header functionality
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});