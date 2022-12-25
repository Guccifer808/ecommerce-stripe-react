import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

//Stripe public key
const _STRIPEKEY =
  'pk_test_51MIwgjBPdAWTyE9zgZD0zxyz5cvokiCZD7chUoqsGuUNRWdqxGR3NsdvKxOlxqN1bZboMCXyODqqVILQpm3CoyaJ006BIcsOts';

const Pay = () => {
  // State
  const [stripeToken, setStripeToken] = useState(null);

  //Stripe token function
  const onToken = (token) => {
    setStripeToken(token);
  };
  //
  useEffect(() => {
    const makeRequest = async () => {
      try {
      } catch (err) {
        console.log(err);
      }
    };
    return () => {
      cleanup;
    };
  }, [stripeToken]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
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
    </div>
  );
};

export default Pay;
