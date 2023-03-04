import { Outlet, Navigate } from "react-router-dom";

const StripeLayout = ({ stripeApiKey }) => {
  return stripeApiKey ? <Outlet /> : <Navigate to="/"/>;
};

export default StripeLayout;
