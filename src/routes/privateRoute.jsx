import React from "react";
import { authService } from "../configs/auth/auth.js";
import { Outlet } from "react-router-dom";
import { Unauthorized } from "../pages/Unauthorized.jsx";

export function PrivateRoute() {
  if (authService.isAuthorized())
    return (
      <>
        <Outlet />
      </>
    );

  return <Unauthorized />;
}
