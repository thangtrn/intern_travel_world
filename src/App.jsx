import React from "react";
import { Routes, Route } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import routes from "./routes";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
   return (
      <AppLayout>
         <Routes>
            {routes.map(({ path, element: Page }, index) => (
               <Route path={path} element={<Page />} key={index} />
            ))}
         </Routes>
      </AppLayout>
   );
};

export default App;
