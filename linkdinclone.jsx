import React, { useState } from "react";
import "../components/linkdinclone.css";

export function LinkdinClone() {
    const [showProfile, setShowProfile] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [submittedQuery, setSubmittedQuery] = useState(""); 
    const [profileDetails, setProfileDetails] = useState({
        name: "KASIREDDY KISHORE",
        bio: "Welcome to your profile page. Here you can view and edit your details."
    });
    const [showMessageModal, setShowMessageModal] = useState(false); 
    const [message, setMessage] = useState(""); 
    const [isProfileClicked, setIsProfileClicked ] = useState(false); 
    const handleProfileClick = () => {
        setShowProfile(true);
        setIsProfileClicked(true); 
       
    };
    
    const handleProfileDoubleClick = () => {
        setShowProfile(false); // Close the profile page on double click
        setIsProfileClicked(false);
    };
    

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileDetails({ ...profileDetails, [name]: value });
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSubmittedQuery(searchQuery.toLowerCase());
    };

    const handleSendMessageClick = () => {
        setShowMessageModal(true); 
    };

    const handleCloseModal = () => {
        setShowMessageModal(false); 
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value); 
    };

    const handleSendMessage = () => {
        console.log("Message sent:", message);
        setMessage(""); 
        setShowMessageModal(false); 
    };

    const ProfilePage = () => (
        <div className="container mt-4 ">
            <img
                src="https://tse2.mm.bing.net/th?id=OIP.Z306v3XdxhOaxBFGfHku7wHaHw&pid=Api&P=0&h=180"
                alt=""
                className="profile2"
            />
            {isEditing ? (
                <div >
                    <input
                        type="text"
                        name="name"
                        value={profileDetails.name}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        name="bio"
                        value={profileDetails.bio}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                    />
                </div>
            ) : (
                <div  >
                    <h2>{profileDetails.name}</h2>
                    <p>{profileDetails.bio}</p>
                </div>
            )}
            <button className="btn btn-primary" onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </div>
    );

    const AdditionalNavBar = () => (
        <ul className="navbar-nav">
            <li className="nav-item">
                <button className="btn btn-outline-secondary m-3">People</button>
            </li>
            <li className="nav-item">
                <button className="btn btn-outline-secondary m-3">Companies</button>
            </li>
            <li className="nav-item">
                <button className="btn btn-outline-secondary m-3">Jobs</button>
            </li>
            <li className="nav-item">
                <button className="btn btn-outline-secondary m-3">Posts</button>
            </li>
            <li className="nav-item">
                <button className="btn btn-outline-secondary m-3">Events</button>
            </li>
            <li className="nav-item">
                <button className="btn btn-outline-secondary m-3">Groups</button>
            </li>
            <li className="nav-item">
                <button className="btn btn-outline-secondary m-3">Schools</button>
            </li>
            <li className="nav-item">
                <button className="btn btn-outline-secondary m-3">Courses</button>
            </li>
            <li className="nav-item">
                <button className="btn btn-outline-secondary m-3">Products</button>
            </li>
            <li className="nav-item">
                <button className="btn btn-outline-secondary m-3">Services</button>
            </li>
            <li className="nav-item">
                <button className="btn btn-outline-secondary m-3">All Filters</button>
            </li>
        </ul>
    );

    const DefaultNavBar = () => (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <span className="nav-link bi bi-house-fill">Home</span>
            </li>
            <li className="nav-item">
                <span className="nav-link bi bi-people-fill">My Network</span>
            </li>
            <li className="nav-item">
                <span className="nav-link bi bi-bag-fill">Jobs</span>
            </li>
            <li className="nav-item">
                <span className="nav-link bi bi-chat-fill">Messaging</span>
            </li>
            <li className="nav-item">
                <span className="nav-link bi bi-bell-fill">Notifications</span>
            </li>
            <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleProfileClick}
                onDoubleClick={handleProfileDoubleClick}>
                    <img
                        src="https://tse2.mm.bing.net/th?id=OIP.Z306v3XdxhOaxBFGfHku7wHaHw&pid=Api&P=0&h=180"
                        alt=""
                        className="rounded-circle profile"
                    />
                </button>
            </li>
        </ul>
    );

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <img
                        className="logo"
                        src="https://tse1.mm.bing.net/th?id=OIP.7nI0m_Lek0Q2oVvrM8EFAAHaHw&pid=Api&P=0&h=180"
                        alt="logo"
                    />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon h-25"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <form className="d-flex me-auto" onSubmit={handleSearchSubmit}>
                            <input
                                className="form-control me-2 m-2 w-100"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <button className="btn btn-primary bi bi-search searchicon" type="submit"></button>
                        </form>
                        <DefaultNavBar />
                    </div>
                </div>
            </nav>

            {/* Conditionally render the additional navbar */}
            {!isProfileClicked && submittedQuery === "naresh it" && (
                <div>
                    <div className="additional-navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <AdditionalNavBar />
                        </div>
                    </div>
                    <div className="container1">
                        <div className="container5">
                            <h3>on this page</h3>
                            <li className="m-2">people</li>
                            <li className="m-2">Post</li>
                            <li className="m-2">Events</li>
                            <li className="m-2">Companies</li>
                            <li className="m-2">Groups</li>
                            <li className="m-2">More People</li>

                        </div>
                    <div className="container2">
                        <div className="info">
                            <img
                                src="https://i.vimeocdn.com/portrait/16950543_640x640"
                                alt=""
                                className="nareshitimg"
                            />
                        </div>
                        <div className="image">
                            <h2>NARESH IT</h2>
                            <p>Ameerpet, Telangana</p>
                            <p className="bi bi-people-fill">1k followers</p>
                            <button className="btn btn-primary m-2">+Follow</button>
                            <button
                                className="btn btn-outline-primary m-2 bi bi-send-fill"
                                onClick={handleSendMessageClick}
                            >
                                Message
                            </button>
                        </div>
                    </div>
                    <div className="container4">
                        <img  className ="image3"src="https://tse2.mm.bing.net/th?id=OIP.I6h6p4onR_wF8GLwGXWRLwHaH_&pid=Api&P=0&h=180"alt=""/>
                    </div>
                    </div>
                    <div className="container3">
                        <h4>People</h4> 
                        <button className="btn btn-outline-secondary m-3 btns">1st</button>
                        <button className="btn btn-outline-secondary m-3 btns">2nd</button>
                        <button className="btn btn-outline-secondary m-3 btns">3rd+</button> 
                        <div className="subcon">
                        <div className="info">
                            <img
                                src="https://tse1.mm.bing.net/th?id=OIP.aHAjN4VvTURmOfMr1tOx3QHaFi&pid=Api&P=0&h=180"
                                alt=""
                                className="nareshitimg rounded-circle"
                            />
                        </div>
                        <div className="image">
                            <h2>Linkdin Member</h2>
                            <p>UI Full stack developer</p>
                            <p className="bi bi-geo">Hydrabad</p>
                           
                        </div>
                        </div>
                        <div className="subcon">
                        <div className="info">
                            <img
                                src="https://tse4.mm.bing.net/th?id=OIF.lxl8oWSvmEtQJ%2fVhrvVlAA&pid=Api&P=0&h=180"
                                alt=""
                                className="nareshitimg  rounded-circle"
                            />
                        </div>
                        <div className="image">
                            <h2>Linkdin Member</h2>
                            <p>java developer</p>
                            <p className="bi bi-geo">Hydrabad</p>
                           
                        </div>
                            </div>
                            <div className="subcon">
                            <div className="info">
                            <img
                                src="https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2023/02/Ritika-Nayak-30.jpg"
                                alt=""
                                className="nareshitimg rounded-circle"
                            />
                        </div>
                        <div className="image">
                            <h2>Linkdin Member</h2>
                            <p>react developer at anedium</p>
                            <p className="bi bi-geo">Hydrabad</p>
                           
                        </div>
                            </div>
                    </div>
                    
                </div>
                
            )}

            {showProfile && <ProfilePage />}

            {/* Message Modal */}
            {showMessageModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Send a Message</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    placeholder="Type your message here..."
                                    value={message}
                                    onChange={handleMessageChange}
                                ></textarea>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleCloseModal}
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleSendMessage}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
