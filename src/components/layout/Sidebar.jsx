import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUsersViewfinder } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { BsChatDots } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { MdOutlinePowerSettingsNew } from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar px-3">
        <div className="sidebar-brand text-align-center">
          <h5>Travel Partner</h5>
        </div>
        <div className="sidebar-items">
          <div className="sidebar-item active d-flex align-items-center gap-3 p-2">
            <MdDashboard />
            <Link className="sidebar-link" to="/home">
              Home
            </Link>
          </div>
          <div className="sidebar-item d-flex align-items-center gap-3 p-2">
            <FaUsersViewfinder />
            <Link className="sidebar-link" to="/findbuddy">
              Find Buddy
            </Link>
          </div>
          <div className="sidebar-item d-flex align-items-center gap-3 p-2">
            <GrFavorite />
            <Link className="sidebar-link" to="/favorite">
              Favorite
            </Link>
          </div>
          <div className="sidebar-item d-flex align-items-center gap-3 p-2">
            <BsChatDots />
            <Link className="sidebar-link" to="/message">
              Messages
            </Link>
          </div>
          <div className="sidebar-item d-flex align-items-center gap-3 p-2">
            <CgProfile />
            <Link className="sidebar-link" to="/profile">
              Profile
            </Link>
          </div>
          <div className="sidebar-item d-flex align-items-center gap-3 p-2">
            <IoMdSettings />
            <Link className="sidebar-link" to="/settings">
              Settings
            </Link>
          </div>
          <div className="sidebar-item d-flex align-items-center gap-3 p-2">
            <MdOutlinePowerSettingsNew />
            <Link className="sidebar-link" to="/logout">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
