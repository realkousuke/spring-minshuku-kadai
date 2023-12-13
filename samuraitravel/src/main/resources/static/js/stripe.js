const stripe = Stripe('pk_test_51OLIkfCQUPdue0pucRwjiyC0FSiaYiIeI0xcwLYo1dVEha7TmCEOaNR7cHXCLPBdCtgoXR0JtSvoAH71oajOP1P600BbEUIzeU');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });
