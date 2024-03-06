import "./Offers.css";
import exclusive_image from "../../Assets/exclusive_image.png";
import ButtonStyle1 from "../ButtonStyle1/ButtonStyle1";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <ButtonStyle1>Check Now</ButtonStyle1>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
