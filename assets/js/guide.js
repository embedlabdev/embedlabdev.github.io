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

function submitOrder(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const txid  = document.getElementById('txid').value.trim();

  if (!email || !txid) return;

  // Build mailto link — opens user's email client
  // Replace YOUR_EMAIL_HERE with your real email in the HTML
  const to      = document.querySelector('.buy-note a').getAttribute('href').replace('mailto:', '');
  const subject = encodeURIComponent('STM32 I2S Quickstart — Order');
  const body    = encodeURIComponent(
    `Hi,\n\nI just purchased the STM32 I2S Quickstart guide.\n\nEmail: ${email}\nTxID: ${txid}\n\nPlease send the files. Thanks!`
  );

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

  document.querySelector('.purchase-form').style.display = 'none';
  document.getElementById('successMsg').style.display = 'block';
}
