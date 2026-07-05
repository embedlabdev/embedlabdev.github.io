function toggleGuideEmail() {
  const el = document.getElementById('guideEmailReveal');
  el.style.display = el.style.display === 'none' ? 'inline-flex' : 'none';
}

function copyGuideEmail() {
  const email = document.getElementById('guideEmailText').textContent.trim();
  navigator.clipboard.writeText(email).then(() => {
    const btn = document.querySelectorAll('.email-copy-btn')[document.querySelectorAll('.email-copy-btn').length - 1];
    const original = btn.textContent;
    btn.textContent = 'Copied ✓';
    setTimeout(() => { btn.textContent = original; }, 2000);
  });
}

function copyAddress() {
  const addr = document.getElementById('walletAddr').textContent.trim();
  navigator.clipboard.writeText(addr).then(() => {
    const btn = document.querySelector('.copy-btn');
    const original = btn.textContent;
    btn.textContent = 'Copied ✓';
    btn.style.color = 'var(--teal)';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.color = '';
    }, 2000);
  });
}

async function submitOrder(e) {
  e.preventDefault();

  const form = document.getElementById('orderForm');
  const btn  = document.getElementById('submitBtn');
  const email = document.getElementById('email').value.trim();
  const txid  = document.getElementById('txid').value.trim();

  if (!email || !txid) return;

  btn.disabled = true;
  btn.textContent = 'Sending...';

  const formData = new FormData(form);

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    });

    const result = await res.json();

    if (result.success) {
      form.style.display = 'none';
      document.getElementById('successMsg').style.display = 'block';
    } else {
      throw new Error(result.message || 'Submission failed');
    }
  } catch (err) {
    document.getElementById('errorMsg').style.display = 'block';
    btn.disabled = false;
    btn.textContent = 'Submit order';
  }
}
