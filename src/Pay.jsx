import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//Stripe public key
const _STRIPEKEY =
  'pk_test_51MIwgjBPdAWTyE9zgZD0zxyz5cvokiCZD7chUoqsGuUNRWdqxGR3NsdvKxOlxqN1bZboMCXyODqqVILQpm3CoyaJ006BIcsOts';

const Pay = () => {
  // State
  const [stripeToken, setStripeToken] = useState(null);
  //Navigate aka History
  const navigate = useNavigate();

  //Stripe token function
  const onToken = (token) => {
    setStripeToken(token);
  };
  //useEffect for request
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          'http://localhost:5000/api/checkout/payment',
          { tokenId: stripeToken.id, amount: 7500 }
        );
        navigate('/success'); //using to redirect to success page
      } catch (err) {
        console.log(err);
      }
    };

    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {stripeToken ? (
        <span>Processing...</span>
      ) : (
        <StripeCheckout
          name='SHOP.'
          image='https://avatars.githubusercontent.com/u/36012294?v=4'
          billingAddress
          shippingAddress
          description='Your total is $75'
          amount={7500}
          token={onToken}
          stripeKey={_STRIPEKEY}
        >
          <button
            style={{
              border: 'none',
              width: 120,
              borderRadius: 5,
              padding: '20px',
              backgroundColor: 'black',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
