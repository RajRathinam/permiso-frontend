import React from 'react';
import ThemeController from "../../components/common/ThemeController";

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
                <span></span>
                <h1 className='text-3xl font-semibold text-center'>Profile</h1>
                <ThemeController />
            </div>
            <hr className="border-t-2 border-slate-500/50 mb-3 mt-2"></hr>
            <div className="avatar justify-center">
                <div className="w-[75%] rounded">
                    <img src="../../../public/raj.png" />
                </div>
            </div>
            <hr className="border-t-2 border-slate-500/50 mt-3"></hr>
            <div className="bg-base-300  grid place-items-start px-2 py-2">Full Name : {data.fullName}</div>
            <hr className="border-t-2 border-slate-500/50"></hr>
            <div className="bg-base-300 grid place-items-start px-2 py-2">Register Number : {data.registerNumber}</div>
            <hr className="border-t-2 border-slate-500/50"></hr>
            <div className="bg-base-300 grid place-items-start px-2 py-2">Date of Birth : {data.dateOfBirth}</div>
            <hr className="border-t-2 border-slate-500/50"></hr>
            <div className="bg-base-300 grid place-items-start px-2 py-2">Class & Section : {data.classSection}</div>
            <hr className="border-t-2 border-slate-500/50"></hr>
            <div className="bg-base-300 grid place-items-start px-2 py-2">Department : {data.department}</div>
            <hr className="border-t-2 border-slate-500/50"></hr>
            <div className="bg-base-300 grid place-items-start px-2 py-2">E-mail : {data.contactInfo.email}</div>
            <hr className="border-t-2 border-slate-500/50"></hr>
            <div className="bg-base-300 grid place-items-start px-2 py-2">Phone Number : {data.contactInfo.phone}</div>
        </div>
    )
}

export default ProfileContent
