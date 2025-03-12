import React from 'react';
import ThemeController from "../../components/common/ThemeController";
import ChangePassword from './ChangePassword';

const ProfileContent = () => {

    const data = {
        "fullName": "Raj Rathinam S",
        "registerNumber": "8208E22CSR082",
        "dateOfBirth": "19-06-2005",
        "classSection": "III - CSE A",
        "department": "CSE",
        "contactInfo": {
            "email": "rajrathinam2005@gmail.com",
            "phone": "+91 9876543210"
        }
    }


    return (
        <div className="flex w-full flex-col">
            <div className='flex justify-between'>
                <h1 className='text-3xl font-semibold text-center flex justify-center items-center'>Profile</h1>
                <ThemeController />
            </div>
            <hr className="border-t-2 border-slate-500/50 mb-3 mt-2"></hr>
            <div className="avatar justify-center -z-20">
                <div className="w-[75%] rounded">
                    <img src="../../../public/raj.png" />
                </div>
            </div>
            <hr className="border-t-2 border-slate-500/50 mt-3"></hr>
            <div className="bg-base-300  grid place-items-start px-2 py-2"><b>Full Name : {data.fullName}</b></div>
            <hr className="border-t-2 border-slate-500/50"></hr>
            <div className="bg-base-300 grid place-items-start px-2 py-2"><b>Register Number : {data.registerNumber}</b></div>
            <hr className="border-t-2 border-slate-500/50"></hr>
            <div className="bg-base-300 grid place-items-start px-2 py-2"><b>Date of Birth : {data.dateOfBirth}</b></div>
            <hr className="border-t-2 border-slate-500/50"></hr>
            <div className="bg-base-300 grid place-items-start px-2 py-2"><b>Class & Section : {data.classSection}</b></div>
            <hr className="border-t-2 border-slate-500/50"></hr>
            <div className="bg-base-300 grid place-items-start px-2 py-2"><b>Department : {data.department}</b></div>
            <hr className="border-t-2 border-slate-500/50"></hr>
            <div className="bg-base-300 grid place-items-start px-2 py-2"><b>E-mail : {data.contactInfo.email}</b></div>
            <hr className="border-t-2 border-slate-500/50"></hr>
            <div className="bg-base-300 grid place-items-start px-2 py-2"><b>Phone Number : {data.contactInfo.phone}</b></div>
            <hr className="border-t-2 mb-2 border-slate-500/50"></hr>
           <ChangePassword/>
        </div>
    )
}

export default ProfileContent
