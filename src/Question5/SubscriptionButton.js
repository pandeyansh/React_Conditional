import React, { useState } from 'react';
function SubscriptionButton() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleButtonClick = () => {
    setIsSubscribed(!isSubscribed);
  };
  return (
    <div>
      <h2>Subscription Example</h2>
      {isSubscribed ? (
        <button onClick={handleButtonClick}>Unsubscribe</button>
      ) : (
        <button onClick={handleButtonClick}>Subscribe</button>
      )}
    </div>
  );
}
export default SubscriptionButton;