import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  ProductList,
  ProductDetail,
  Admin,
  PageNotFound,
  Contact,
  ContactPh,
  ContactEu,
  ContactUs,
} from "../pages/index";

export const AllRoutes = () => {
  const user = false;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="contact" element={<Contact />}>
          <Route path="ph" element={<ContactPh />} />
          <Route path="eu" element={<ContactEu />} />
          <Route path="us" element={<ContactUs />} />
          <Route path="*" element={<ContactUs />} />
        </Route>
        <Route
          path="admin"
          element={user ? <Admin /> : <Navigate to="/products" />}
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
};
