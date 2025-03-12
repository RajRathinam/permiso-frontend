import React, { useRef } from 'react'
import QRCode from 'react-qr-code';

const SingleOnduty = () => {
  const date = new Date();
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

  const componentRef = useRef();
  const handlePrint = () => {
    const printContent = componentRef.current.innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();  // Reload to restore original state
  };

  return (<div className='lg:flex lg:flex-col lg:justify-center lg:items-center mb-10'>
    <div ref={componentRef} className="w-full sm:w-[210mm] h-auto text-black mx-auto mt-6 bg-white p-5 sm:p-10 shadow-lg border border-red-950">
      <h1 className="text-xl sm:text-2xl font-bold mb-2 text-center underline">E.G.S.PILLAY ENGINEERING COLLEGE</h1>
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center underline">ON-DUTY REQUISITION FORM</h1>
      <div className="flex flex-col sm:flex-row justify-between py-3">
        <h2 className="px-1"><b>Academic year</b> : {date.getFullYear()}-{date.getFullYear() + 1}</h2>
        <h2 className="px-1"><b>Date</b> : {date.toLocaleDateString()}</h2>
      </div>
      <div className='p-1 flex flex-col gap-4'>
        <div className='flex justify-between'>
       <div>
       <h1 className='font-bold'>From:</h1>
          <div className='pl-11 flex justify-between'>
            <div>
            <h1>{data.fullName},</h1>
            <h1>{data.registerNumber},</h1>
            <h1>{data.classSection},</h1>
            <h1>E.G.S.Pillay Engineering College,</h1>
            </div>
          </div>
       </div>
            <div>
              <img src="/raj.png" className="w-[130px] h-[150px] object-cover border border-gray-300" />
            </div>
        </div>
        <div>
          <h1 className='font-bold'>To:</h1>
          <div className='pl-11'>
            <h1>The Head of the Department,</h1>
            <h1>{data.department},</h1>
            <h1>E.G.S.Pillay Engineering College,</h1>
          </div>
        </div>
        <div className='flex gap-2'>
          <h1 className='font-bold'>Subject:</h1>
          <h1>Request for On-Duty Leave</h1>
        </div>
        <div>
          <h1 className='font-bold'>Respected Sir,</h1>
          <div className='mb-2 flex flex-col'>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm, {data.fullName},a student of {data.classSection}, with Register Number {data.registerNumber},kindly request on-duty leave for <input type='number' placeholder=' enter number of days' className='border-b-2 w-auto text-center focus:outline-none focus:ring-0 bg-white'/> on <>[ </><input type='date' className='border-b-2 bg-white'/>  to  <input type='date' className='border-b-2 focus:outline-none focus:ring-0 bg-white'/><> ]</> as I have to participate in <input type='text' placeholder=' enter event name' className='border-b-2 w-auto text-center focus:outline-none focus:ring-0 bg-white'/> at <input type='text' placeholder=' enter venue name' className='border-b-2 flex-1 text-center focus:outline-none focus:ring-0 bg-white'/>.
            </p>
          </div>
          <div className='mb-2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          I assure you that I will compensate for the missed academic sessions and complete all required coursework. I kindly request you to consider my application and grant me the on-duty leave for the mentioned date's.
          </div>
          <div className='mb-2'>Looking forward to your approval.</div>
          <div className='mb-2 text-center'>Thank you.</div>
        </div>
        <div>
          <h1 className='font-bold text-end'>Yours sincerely,</h1>
         <h1 className='text-end'>{data.fullName}</h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-between p-5 mb-2 border-2">
            <div className="w-full h-auto flex flex-wrap justify-center items-center">
              <div className="w-full sm:w-1/2 text-center flex flex-col"><span className="text-green-500">Accepted</span><b>Head of the Department</b></div>
              <div className="w-full sm:w-1/2 text-center flex flex-col"><span className="text-green-500">Accepted</span><b>Class In-Charge</b></div>
            </div>
            <div className="w-full sm:w-auto mt-4 sm:mt-0">
              <QRCode
                value="https://mern-chatsapp.onrender.com/"
                size={150}
                fgColor="black"
                bgColor="white"
                level="H"
              />
            </div>
          </div>
      </div>
    </div>
    <button onClick={handlePrint} className="btn btn-primary mx-auto my-5">Download PDF</button>
  </div>
  )
}

export default SingleOnduty
