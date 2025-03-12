import React from 'react';
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";

const ChangePassword = () => {
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-soft btn-primary font-extrabold" onClick={() => document.getElementById('my_modal_3').showModal()}>Change Password</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-extrabold text-lg mb-4">Change Password</h3>
                    <form action="" className='flex flex-col gap-2'>
                        <label className='input input-bordered rounded flex items-center gap-2'>
                            <FaUser />
                            <input
                                type='text'
                                className='grow'
                                placeholder='username'
                                name='username'
                           
                            />
                        </label>

                        <label className='input input-bordered rounded flex items-center gap-2'>
                            <MdPassword />
                            <input
                                type='password'
                                className='grow'
                                placeholder='Current Password'
                                name='password'
                               
                            />
                        </label>

                        <label className='input input-bordered rounded flex items-center gap-2'>
                            <MdPassword />
                            <input
                                type='password'
                                className='grow'
                                placeholder='New Password'
                                name='password'
                               
                            />
                        </label>
                        <button className="btn btn-soft btn-primary font-extrabold" onClick={(e) => {
                            e.preventDefault();
                            window.alert("New Password Updated")}}>Update Password</button>
                    </form>
                </div>
            </dialog></>
    )
}

export default ChangePassword;
