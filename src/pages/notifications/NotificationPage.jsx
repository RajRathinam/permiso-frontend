import React from 'react';

const notifications = [
    { id: 1, title: "On-Duty Request Approved", description: "Your on-duty request has been approved.", timestamp: "2025-01-15", read: false },
    { id: 2, title: "Leave Request Rejected", description: "Your leave request has been rejected.", timestamp: "2025-01-14", read: true }
];

const NotificationPage = () => {
    return (
        <div className=" bg-gray-100 flex flex-col items-center py-10">
            <h1 className="text-3xl font-bold mb-8">Notifications</h1>
            <div className="w-full max-w-lg space-y-4">
                {notifications.map((notif) => (
                    <div 
                        key={notif.id} 
                        className={`p-4 rounded-lg shadow-md ${notif.read ? 'bg-white' : 'bg-blue-100 border-l-4 border-blue-500'}`}
                    >
                        <h2 className="text-xl font-semibold">{notif.title}</h2>
                        <p className="text-gray-700">{notif.description}</p>
                        <span className="text-sm text-gray-500">{notif.timestamp}</span>
                    </div>
                ))}
            </div>
            <div className="w-full max-w-lg space-y-4">
                {notifications.map((notif) => (
                    <div 
                        key={notif.id} 
                        className={`p-4 rounded-lg shadow-md ${notif.read ? 'bg-white' : 'bg-blue-100 border-l-4 border-blue-500'}`}
                    >
                        <h2 className="text-xl font-semibold">{notif.title}</h2>
                        <p className="text-gray-700">{notif.description}</p>
                        <span className="text-sm text-gray-500">{notif.timestamp}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationPage;
