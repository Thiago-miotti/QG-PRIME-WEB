import React from 'react'
import './App.css';
import {
    Routes,
    Route,
} from "react-router-dom";

import UserLoginPage from '../user/user_loginPage';
import UserFormPage from '../user/user_formPage';
import UserQRCodePage from '../user/user_qrcode';
import PromoterQrCodeReaderPage from "../promoter/qrcode_reader";
import PromoterStandSelection from '../promoter/Stand_Selection';
import PromoterSuccessPage from '../promoter/SuccessPage';
import PromoterConfirmationAccess from '../promoter/confirmationAccess';


function App() {
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

export default App;
