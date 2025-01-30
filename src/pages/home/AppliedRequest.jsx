import React from 'react'

const AppliedRequest = ({i}) => {
  return (
    <div className="p-4 rounded-lg shadow-md mt-6">
        <div className="flex justify-between">
            <span>On-Duty (01/10/2024)</span>
            {i%2!=0?<span className="text-green-600">Approved</span>:<span className="text-red-600">Rejected</span>}
        </div> 
</div>
  )
}

export default AppliedRequest
