import React from 'react';
import ProfileContent from './ProfileContent';


const Profile = ({ profile, setProfile }) => {
  return (
    <div className="drawer z-20">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" defaultChecked={profile} />
      <div className="drawer-side">
        <label
          onClick={() => { setProfile((prev) => !prev) }}
          htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className='bg-base-300 text-base-content min-h-full w-[85%] lg:w-[25%] p-4'>
          <ProfileContent />
        </div>
      </div>
    </div>
  )
}

export default Profile
