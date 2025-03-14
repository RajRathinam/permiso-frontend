import React, { useRef } from 'react'
import QRCode from 'react-qr-code';


const Onduty = () => {

    const date = new Date();
    const data = [
        { id: 1, name: 'Raj Rathinam' },
        { id: 2, name: 'user1' },
        { id: 3, name: 'user2' },
        { id: 4, name: 'Anna Blue' },
        { id: 5, name: 'Tom Brown' },
        { id: 6, name: 'Lucy Black' },
        { id: 7, name: 'Michael White' },
        { id: 8, name: 'Olivia Gray' },
        { id: 9, name: 'Jack Red' },
        { id: 10, name: 'Sophia Violet' },
        { id: 11, name: 'Liam Orange' },
        { id: 12, name: 'Ethan Purple' },
        { id: 13, name: 'Isabella Pink' },
        { id: 14, name: 'Charlotte Brown' },
        { id: 15, name: 'Mason Yellow' },
        { id: 16, name: 'Amelia Gold' },
    ];
    const componentRef = useRef();
    const handlePrint = () => {
        const printContent = componentRef.current.innerHTML;
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;
        window.location.reload();  // Reload to restore original state
    };
    const left = data.length >= 1 ? data.slice(0, 10) : 0;
    const right = data.length >= 10 ? data.slice(10) : 0;
    return (<div className='lg:flex lg:flex-col lg:justify-center lg:items-center mb-10'>
        <div ref={componentRef} className="w-full lg:w-[210mm] h-auto text-black lg:mx-auto lg:mt-6 bg-white p-5 sm:p-10 shadow-lg border border-red-950">
          <h1 className="lg:text-2xl text-sm font-bold mb-2 text-center underline">E.G.S.PILLAY ENGINEERING COLLEGE</h1>
          <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center underline">TEAM OD REQUISITION FORM</h1>
          <div className="flex flex-col sm:flex-row justify-between border-b-2 py-1">
            <h2 className="px-1 text-sm"><b>Academic year</b> : {date.getFullYear()}-{date.getFullYear() + 1}</h2>
            <h2 className="px-1"><b>Date</b> : {date.toLocaleDateString()}</h2>
          </div>
          <div className="flex flex-col sm:flex-row border-b-2">
            <h2 className="w-full sm:w-[50%] border-l-2 border-r-2 p-1 flex"><b className="pr-1">Reason</b> :
              <select className="pl-1 w-full bg-white outline-none appearance-none">
                <option value="">Select...</option>
                <option value="">Industrial Visit (IV)</option>
                <option value="">Project/Research Work</option>
                <option value="">Technical Competitions</option>
                <option value="">Conference Presentation</option>
                <option value="">Workshop Participation</option>
                <option value="">Seminar Participation</option>
                <option value="">Paper Presentation</option>
                <option value="">Lab Sessions in Other Institutions</option>
                <option value="">Practical Sessions in Other Institutions</option>
                <option value="">Sports Events</option>
                <option value="">Cultural Fest Participation</option>
                <option value="">Club Activities & Social Service</option>
                <option value="">Event Organizing Committee</option>
                <option value="">Placement Drive</option>
                <option value="">Higher Studies Admission Process</option>
              </select>
            </h2>
            <h2 className="w-full sm:flex-1 border-r-2 p-1"><b>Date</b> : <input type='date' className='text-start bg-white outline-none' /><b> - </b><input type='date' className='text-start bg-white  outline-none' /></h2>
          </div>
          <div className="flex flex-col sm:flex-row border-b-2">
            <h2 className="w-full sm:w-[50%] border-l-2 border-r-2 p-1"><b>Event</b> : <input type='text' placeholder='enter event name' className='focus:outline-none focus:ring-0 bg-white' /></h2>
            <h2 className="w-full sm:flex-1 border-r-2 p-1"><b>Venue</b> : <input type='text' placeholder='enter venue name' className='focus:outline-none focus:ring-0 bg-white' /></h2>
          </div>
          <div className="flex flex-col sm:flex-row border-b-2 mb-2">
            <h2 className="w-full border-l-2 border-r-2 p-1"><b>Number Of Participants</b> : <input type='number' placeholder=' enter number of days' className='w-auto focus:outline-none focus:ring-0 bg-white' /></h2>
          </div>
          <div className="flex flex-col sm:flex-row border-y-2 mb-3">
            <div className="w-full sm:w-[13%] border-l-2 border-r-2 p-1 flex justify-center items-center"><h2><b>On-Duty </b>:</h2></div>
            <div className="flex-1 sm:border-r-2">
              <div className="flex flex-col sm:flex-row border-b-2">
                <div className="w-full sm:w-1/2 flex">
                  <div className="w-full sm:w-1/2 text-center border-r-2"><h2><b>From</b></h2></div>
                  <div className="w-full sm:w-1/2 text-center border-r-2"><h2><b>To</b></h2></div>
                </div>
                <div className="w-full sm:w-1/2 text-center"><h2><b>Time</b></h2></div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 flex">
                  <div className="w-full sm:w-1/2 text-center border-r-2"><input type='date' className='text-center bg-white outline-none' /></div>
                  <div className="w-full sm:w-1/2 text-center border-r-2"><input type='date' className='text-center bg-white outline-none' /></div>
                </div>
                <div className="w-full sm:w-1/2 flex">
                  <div className="w-full sm:w-1/2 text-center border-r-2"><input type="time" /></div>
                  <div className="w-full sm:w-1/2 text-center"><input type="time" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <textarea
              className="w-full bg-white p-1 border border-gray-300 resize-none outline-none"
              rows="3"
              placeholder="Enter your remarks here..."
            />
          </div>
          <div className="flex flex-col sm:flex-row space-x-4 mb-2">
            {/* Left Table (First 10 rows) */}
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300">S.no</th>
                    <th className="border border-gray-300">Name</th>
                    <th className="border border-gray-300">Year/Dept</th>
                  </tr>
                </thead>
                <tbody>
                  {left && left.map((person) => (
                    <tr key={person.id}>
                      <td className="border border-gray-300 text-center">{person.id}</td>
                      <td className="border border-gray-300 p-1 text-center">{person.name}</td>
                      <td className="border border-gray-300 p-1 text-center">III/CSE</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Right Table (Next 10 rows) */}
            <div className="w-full sm:w-1/2">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300">S.no</th>
                    <th className="border border-gray-300">Name</th>
                    <th className="border border-gray-300">Year/Dept</th>
                  </tr>
                </thead>
                <tbody>
                  {right && right.map((person) => (
                    <tr key={person.id}>
                      <td className="border border-gray-300 text-center">{person.id}</td>
                      <td className="border border-gray-300 p-1 text-center">{person.name}</td>
                      <td className="border border-gray-300 p-1 text-center">III/CSE</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between border-2 p-5 mb-2">
            <div className="w-full sm:w-2/3 flex flex-wrap justify-evenly">
              <div className="w-full sm:w-1/2 text-center flex flex-col"><span className="text-green-500">Accepted</span><b>Physical Director</b></div>
              <div className="w-full sm:w-1/2 text-center flex flex-col"><span className="text-green-500">Accepted</span><b>Principal</b></div>
              <div className="w-full sm:w-1/2 text-center flex flex-col"><span className="text-red-500">Rejected</span><b>Administration Head</b></div>
              <div className="w-full sm:w-1/2 text-center flex flex-col"><span className="text-red-500">Rejected</span><b>Joint Secretary</b></div>
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
          <div className="text-center border-2 p-3">
            On-Duty for the Above Students
          </div>
        </div>
        {/* <button onClick={handlePrint} className="btn btn-primary mx-auto my-5">Download PDF</button> */}
      </div>
      )
}

export default Onduty
