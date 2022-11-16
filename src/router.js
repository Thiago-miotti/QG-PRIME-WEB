import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";

import UserLoginPage from './pages/user/login-page';
import UserFormPage from './pages/user/register-page';
import UserQRCodePage from './pages/user/qrcode-page';
import PromoterQrCodeReaderPage from "./pages/promoter/qrcode_reader-page";
import PromoterStandSelection from './pages/promoter/stand-selection-page';
import PromoterSuccessPage from './pages/promoter/success-page';
import PromoterConfirmationAccess from './pages/promoter/confirmation-access-page';

function Router() {
  return (
        <Routes>
            <Route path="user/login" element={<UserLoginPage />} />
            <Route path="user/register" element={<UserFormPage />} />
            <Route path="user/qrcode/:id/:name" element={<UserQRCodePage />} />

            <Route path="promoter/reader/:standId/:standName" element={<PromoterQrCodeReaderPage />} />
            <Route path="promoter/stands" element={<PromoterStandSelection />} />
            <Route path="promoter/success" element={<PromoterSuccessPage />} />
            <Route path="promoter/confirmation/:userId/:standId" element={<PromoterConfirmationAccess />} />
        </Routes>
  )
}

export default Router;
