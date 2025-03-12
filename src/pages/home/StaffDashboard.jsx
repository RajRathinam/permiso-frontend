import React from 'react';
import { Link } from 'react-router-dom';

const StaffDashboard = () => {

    const userData = [
        {
        id: 1,
        avatar: "../../../public/raj.png",
        name: "Raj Rathinam",
        studentId: "8208E22CSR082",
        department: "CSE",
        year: "B-III year",
        requestType: "Leave Request",
        date: "01/02/2025"
        },
        {
        id: 2,
        avatar: "../../../public/info.png",
        name: "Shathis Kumar",
        studentId: "8210E22CSR102",
        department: "ECE",
        year: "B-II year",
        requestType: "Project Request",
        date: "05/02/2025"
        },
        {
        id: 3,
        avatar: "../../../public/bahu.jpg",
        name: "Syed Bahu",
        studentId: "8220E22CSR122",
        department: "MECH",
        year: "B-IV year",
        requestType: "Internship Request",
        date: "10/02/2025"
        },
        {
        id: 4,
        avatar: "",
        name: "David Lee",
        studentId: "8230E22CSR142",
        department: "CIVIL",
        year: "B-I year",
        requestType: "Leave Request",
        date: "15/02/2025"
        },
        {
        id: 5,
        avatar: "",
        name: "Sophia Patel",
        studentId: "8240E22CSR162",
        department: "CHEM",
        year: "B-III year",
        requestType: "Project Request",
        date: "20/02/2025"
        }
        ]
        
    return (
        <div className="lg:p-6 lg:m-7 mb-10 mt-5">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='py-16'>
                        <tr>
                            <th><div className='text-[20px] font-extrabold text-center pb-5 border-b-2'>SI.NO</div></th>
                            <th><div className='text-[20px] font-extrabold text-center pb-5 border-b-2'>NAME & REGISTER NUMBER</div></th>
                            <th><div className='text-[20px] font-extrabold text-center pb-5 border-b-2'>DEPARTMENT & SECTION</div></th>
                            <th><div className='text-[20px] font-extrabold text-center pb-5 border-b-2'>REQUEST TYPE</div></th>
                            <th><div className='text-[20px] font-extrabold text-center pb-5 border-b-2'>UPLOADED DATE</div></th>
                            <th><div className='text-[20px] font-extrabold text-center pb-5 border-b-2'>DETAILS</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                     {userData && userData.map((user)=>{
                        return ( <tr key={user.id}>
                            <th className='text-center'>
                               {user.id}.
                            </th>
                            <td>
                                <div className="flex items-center ml-12 gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user.avatar || "../../../public/profileAvatar.jpeg"}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.name}</div>
                                        <div className="text-sm opacity-50">{user.studentId}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='text-center'>
                                    <div className="font-bold">{user.department}</div>
                                    <div className="text-sm opacity-50">{user.year}</div>
                                </div>
                            </td>
                            <td>
                                <div className='text-center'>{user.requestType}</div>
                            </td>
                            <td>
                                <div className='text-center'>{user.date}</div>
                            </td>
                            <th className='text-center'>
                              <Link to="/team-onduty">
                              <button className="py-2 px-4 rounded-lg bg-gradient-to-r from-slate-500/10 to-slate-700/20 hover:from-slate-200 hover:text-black hover:to-slate-400">Details</button>
                              </Link>
                            </th>
                        </tr>)
                     })
                          
                     }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StaffDashboard
