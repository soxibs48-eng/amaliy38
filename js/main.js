/**
 * UJJO — 38-Amaliy Ish
 * Interaktiv JavaScript moduli: Xarid, Savat va Animatsiyalar
 */

document.addEventListener('DOMContentLoaded', () => {
  initCart();
  initNewsletter();
});

let cartCount = 0;

function initCart() {
  const buyBtns = document.querySelectorAll('.buy-btn');
  const cartBtn = document.getElementById('ujjoCartBtn');

  buyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-product');
      const price = btn.getAttribute('data-price');
      cartCount += 1;
      if (cartBtn) {
        cartBtn.textContent = `SAVAT (${cartCount})`;
      }
      alert(`Olovli tanlov! "${title}" ($${price}) savatga qo'shildi. Qahvangiz bugun har kungidanda o'zgacha bo'ladi!`);
    });
  });

  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      if (cartCount === 0) {
        alert("Savatingiz bo'sh. Qahvangiz uchun Ujjo sousini tanlang!");
      } else {
        alert(`Savatingizda ${cartCount} ta Ujjo sousi mavjud. Buyurtma rasmiylashtirishga o'tilmoqda!`);
      }
    });
  }
}

function initNewsletter() {
  const form = document.getElementById('ujjoNewsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    alert(`Rahmat! ${email} manziliga eng qaynoq retseptlar va maxsus chegirmalar yuborildi!`);
    form.reset();
  });
}

