document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('header');

  // Scroll mượt + active
  links.forEach(link =>
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    })
  );

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        current = sec.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });

    header.classList.toggle('sticky', window.scrollY > 80);
  });

  // Toggle about
  const btn = document.getElementById('btnAboutMore');
  const box = document.getElementById('aboutMore');
  if (btn && box) {
    btn.addEventListener('click', () => {
      const isOpen = box.classList.contains('show');
      box.classList.toggle('show');
      btn.textContent = isOpen ? 'Xem thêm' : 'Thu gọn';
    });
  }

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
// Thêm lựa chọn gói dịch vụ theo loại dịch vụ
const serviceType = document.getElementById('serviceType');
const packageGroup = document.getElementById('servicePackageGroup');
const servicePackage = document.getElementById('servicePackage');

const servicePackages = {
  wash: [
    { value: 'basic_wash', text: 'Rửa nhanh' },
    { value: 'standard_wash', text: 'Rửa kỹ' },
    { value: 'premium_wash', text: 'Gói cao cấp'},
  ],
  repair: [
    { value: 'basic_repair', text: 'Sửa chữa cơ bản'},
    { value: 'standard_repair', text: 'Sửa chữa chuyên sâu' },
  ],
  maintenance: [
    { value: 'basic_maintenance', text: 'Bảo dưỡng định kỳ cơ bản' },
    { value: 'premium_maintenance', text: 'Bảo dưỡng cao cấp' },
    { value: 'vip_maintenance', text: 'Bảo dưỡng toàn diện' }
  ]
};

serviceType.addEventListener('change', function() {
  const selectedService = this.value;
  
  // Xóa các option cũ
  servicePackage.innerHTML = '';
  
  if (selectedService && servicePackages[selectedService]) {
    // Hiển thị nhóm gói dịch vụ
    packageGroup.style.display = 'block';
    
    // Thêm các option mới
    servicePackages[selectedService].forEach(pkg => {
      const option = document.createElement('option');
      option.value = pkg.value;
      option.textContent = pkg.text;
      servicePackage.appendChild(option);
    });
  } else {
    // Ẩn nhóm gói dịch vụ nếu không phù hợp
    packageGroup.style.display = 'none';
  }
});
