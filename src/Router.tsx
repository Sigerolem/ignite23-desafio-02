import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./pages/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";

export function Router() {
  return (
    <Routes >
      <Route path="/ignite23-desafio-02/" element={<DefaultLayout />} >

        <Route path="" element={<Home />} />

        <Route path="checkout" element={<Outlet />} >
          <Route index element={<Checkout />} />
          <Route path="success" element={<Success />} />
        </Route>

      </Route>
    </Routes>
  )
}