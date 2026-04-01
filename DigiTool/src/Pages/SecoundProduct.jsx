import React from "react";
import check from '../assets/check.png'

const SecoundProduct = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-6">Simple, Transpaarent Pricing</h1>
      <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

      <div className="cards flex">
        <div className="card bg-yellow-50 p-32">
          <h1>Starter</h1>
          <p>Perfect for getting started</p>

          <h2>$0/Month</h2>
          <p>
            <img src={check} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecoundProduct;
