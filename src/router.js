import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";

import UserLoginPage from './pages/user/login-page';
// import UserFormPage from './pages/user/register-page';
import UserQRCodePage from './pages/user/qrcode-page';
import UserQuestionsPage from './pages/user/questions-page';
import PromoterQrCodeReaderPage from "./pages/promoter/qrcode-reader-page";
import PromoterStandSelection from './pages/promoter/stand-selection-page';
import PromoterSuccessPage from './pages/promoter/success-page';
import PromoterConfirmationAccess from './pages/promoter/confirmation-access-page';

function Router() {
  return (
        <Routes>
            <Route path="/" element={<UserLoginPage />} />
            {/*<Route path="user/register" element={<UserFormPage />} />*/}
            <Route path="user/:id/questions" element={<UserQuestionsPage />} />
            <Route path="user/qrcode/:id" element={<UserQRCodePage />} />

            <Route path="promoter/reader/:standId/:standName" element={<PromoterQrCodeReaderPage />} />
            <Route path="promoter/stands" element={<PromoterStandSelection />} />
            <Route path="promoter/success" element={<PromoterSuccessPage />} />
            <Route path="promoter/confirmation/:userId/:standId" element={<PromoterConfirmationAccess />} />
        </Routes>
  )
}

export default Router;
