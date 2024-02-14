document.getElementById('pizzaForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  let orderDetails = '';
  for (const [name, value] of formData) {
      orderDetails += `${name}: ${value}, `;
  }
  alert(`Your order: ${orderDetails}`);
});

document.getElementById('deliveryForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  let deliveryDetails = '';
  for (const [name, value] of formData) {
      deliveryDetails += `${name}: ${value}, `;
  }
  alert(`Delivery information: ${deliveryDetails}Delivery will be made within 5 minutes.`);
});
