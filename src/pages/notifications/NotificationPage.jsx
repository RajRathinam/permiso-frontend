import React from 'react';
import { FiCheck } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const notifications = [
    { id: 1,status:"success", title: "On-Duty Request Approved", description: "Your on-duty request has been approved.", timestamp: "2025-01-15", read: false },
    { id: 2,status:"rejected", title: "Leave Request Rejected", description: "Your leave request has been rejected.", timestamp: "2025-01-14", read: true },
    { id: 3,status:"success", title: "On-Duty Request Approved", description: "Your on-duty request has been approved.", timestamp: "2025-01-15", read: false },
    { id: 4,status:"rejected", title: "Leave Request Rejected", description: "Your leave request has been rejected.", timestamp: "2025-01-14", read: true }

];

const NotificationPage = () => {
    return (
        <div className="flex flex-col items-center py-5 p-2">
            <h1 className="text-3xl font-bold mb-8">Notifications</h1>
            <div className="w-full max-w-lg space-y-4">
                {notifications.map((notif) => (
                    <div 
                        key={notif.id} 
                        className={`p-2 flex  hover:scale-110 duration-300 transition-all items-center gap-2 lg:gap-3 rounded-md shadow-lg ${notif.status==="success" ? ' border-l-4 border-green-600' : 'border-l-4 border-red-500'}`}
                    >
                        <span className={`w-17 h-17 p-1 lg:w-20 lg:h-20 text-4xl font-extrabold text-white flex justify-center items-center rounded-full ${notif.status==="success" ? ' bg-green-600' : 'bg-red-500'}`}>
                            {notif.status==="success" ? <FiCheck/>:<IoClose/>}
                        </span>
                       <div>
                       <h2 className="text-xl font-bold">{notif.status}</h2>
                        <p>{notif.title}</p>
                        <span className="text-sm">{notif.timestamp}</span>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationPage;
