import React from "react";
import Cards from "react-credit-cards";
import toastOptions from "hooks/toast";
import { toast } from "react-toastify";
import "react-credit-cards/es/styles-compiled.css";
import CardWrapper from "../styled";

function CreditCard() {
  const data = {
    cvc: "",
    expiry: "",
    focus: "" || undefined,
    name: "",
    number: "",
  };

  const [cardDetails, setCardDetails] = React.useState(data);

  const handleInputFocus = (e: { target: { name: any } }) => {
    setCardDetails({ ...cardDetails, focus: e.target.name });
  };

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const cardNumberCheck = () => {
    if (cardDetails.number.length < 16) {
      return toast.error(
        "Your card number is less than 16-digits",
        toastOptions,
      );
    }
    if (cardDetails.number.length > 16) {
      return toast.error(
        "Your card number is greater than 16-digits",
        toastOptions,
      );
    }
    return null;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    cardNumberCheck();
  };

  return (
    <CardWrapper>
      <div className="cardContainer">
        <Cards
          cvc={cardDetails.cvc}
          expiry={cardDetails.expiry}
          focused={cardDetails.focus}
          name={cardDetails.name}
          number={cardDetails.number}
        />
        <div>
          <form className="cardForm" onSubmit={handleSubmit}>
            <input
              type="number"
              name="number"
              placeholder="Card Number"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={cardDetails.number}
              maxLength={16}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={cardDetails.name}
            />
            <div className="bottom">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY Expiry"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                value={cardDetails.expiry}
              />
              <input
                type="tel"
                name="cvc"
                placeholder="CVC"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                value={cardDetails.cvc}
                maxLength={3}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </CardWrapper>
  );
}

export default CreditCard;
