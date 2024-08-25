import React, { useState, useRef } from "react";
import "./Home.css";
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import i4 from "./i4.png";
import i5 from "./i5.png";
import i6 from "./i6.png";
import i7 from "./i7.png";
import i8 from "./i8.png";
import i9 from "./i9.png";
import i10 from "./i10.jpeg";
import i11 from "./i11.png";
import i12 from "./i12.jpeg";
import i13 from "./i13.jpg.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [menuTarget, setMenuTarget] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [renameMode, setRenameMode] = useState(false);
  const [newName, setNewName] = useState("");
  const [renameTarget, setRenameTarget] = useState(null);
  const fileInputRef = useRef(null);
  const renameRef = useRef(null);
  
  const handleShare = () => {
    const url = window.location.href;
  
    if (navigator.share) {
      navigator.share({
        title: 'Check this out!',
        text: 'Here’s something interesting:',
        url: url,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback mechanism
      const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent('Check this out! ' + url)}`;
      window.open(shareUrl, '_blank');
    }
  };
  

  // Handle right-click event
  const handleContextMenu = (event, target) => {
    event.preventDefault(); // Prevent the default right-click menu
    setMenuPosition({ x: event.pageX, y: event.pageY });
    setMenuTarget(target);
    setMenuVisible(true);
    if (target === "i5") {
      setRenameMode(false);
      setNewName(renameRef.current.innerHTML);
    }
  };

  // Hide menu when clicking elsewhere
  const handleClick = () => {
    setMenuVisible(false);
  };

  // Attach event listener to hide menu when clicking outside
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger file input click
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // Handle input change
  const handleInputChange = (event) => {
    // Navigate to /home2 when user starts typing
    navigate("/home2");
  };

  // Handle rename input change
  const handleRenameInputChange = (event) => {
    setNewName(event.target.value);
  };

  // Handle rename submit
  const handleRenameSubmit = () => {
    // Here you can add logic to update the name of the item
    // For example, if you have a list of items, you can update the name of the specific item
    if (renameTarget === "i5") {
      // Update the image's name or any related state
      setRenameMode(false);
    }
  };

  return (
    <div>
      <div className='h-box'>
        <div className='h-box1'>
          <div className='h-i'>
            <img src={i2} className='i2' alt='i2' />
            <img src={i3} alt='i3' className="i3"/>
          </div>
          <div className='h-t1'>
            <p className='h-st1'>PREVIOUS 5 DAYS</p>
            <div className='htt' onClick={handleClick}>
              {!renameMode && (
                <div
                  className='h-st2'
                  onContextMenu={(e) => handleContextMenu(e, "h-st2")}
                  ref={renameRef}
                >
                  {newName === "" ? "Emma and Hans argue over" : newName}
                </div>
              )}

              {renameMode && renameTarget === "i5" && (
                <form
                  onSubmit={handleRenameSubmit}
                  id='rename-container'
                  className='h-st2'
                >
                  <input
                    type='text'
                    value={newName}
                    onChange={handleRenameInputChange}
                    placeholder='Enter new name'
                  />
                </form>
              )}

              {menuVisible && menuTarget === "h-st2" && (
                <ul
                  style={{
                    position: "absolute",

                    left: `${menuPosition.x}px`,
                    backgroundColor: "white",
                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                    listStyle: "none",
                    margin: 0,
                    borderRadius: "9px",
                    height: "130px",
                    padding: "0.5rem",
                    zIndex: "9999",
                  }}
                >
                  <li
          style={{
            padding: '5px 8px',
            cursor: 'pointer',
            fontSize: '13px',
            color: 'gray',
          }}
          className='li-1'
          onClick={handleShare}
        >
          <img src={i10} className='i10' alt='i10' />
          Share
        </li>
                  <li
                    style={{
                      padding: "5px 8px",
                      cursor: "pointer",
                      fontSize: "13px",
                      color: "gray",
                    }}
                    className='li-1'
                    onClick={() => {
                      setRenameMode(true);
                      setRenameTarget("i5");
                    }}
                  >
                    <img src={i11} className='i10' alt='i11' />
                    Rename
                  </li>
                  <li
                    style={{
                      padding: "5px 8px",
                      cursor: "pointer",
                      fontSize: "13px",
                      color: "gray",
                    }}
                    className='li-1'
                  >
                    <img src={i12} className='i10' alt='i12' />
                    Archive
                  </li>
                  <li
                    style={{
                      padding: "5px 8px",
                      cursor: "pointer",
                      fontSize: "13px",
                      color: "red",
                    }}
                    className='li-1'
                  >
                    <img src={i13} className='i10' alt='i13' />
                    Delete
                  </li>
                </ul>
              )}
            </div>
            <p className='h-st2'>Werner visits the CSSD and</p>
            <p className='h-st2'>Inge laughs with Emma about</p>
          </div>
          <div className='h-t2'>
            <p className='h-st1'>PREVIOUS 30 DAYS</p>
            <p className='h-st2'>Emma and Hans argue over a</p>
            <p className='h-st2'>Werner visits the CSSD and</p>
            <p className='h-st2'>Inge laughs with Emma about</p>
            <div className='h-t3'>
              <p className='h-st3'>
                <img src={i6} className='i6' alt='i6' />
                Andreas Elisch
              </p>
              <p className='h-st4'>
                <img src={i7} className='i6' alt='i7' />
                Invite People to Team
              </p>
            </div>
          </div>
        </div>
        <div className='h-box2'>
          <button className='h-but1'>Smart Multireader</button>
          <div className='h-c1'>
            <img src={i1} alt='i1' />
            <p className='h-st5'>
              Smart Character Content Creator{" "}
              <img src={i9} className='i9' alt='i9' />
            </p>
            <p className='h-st6'>
              Maintained by Elon Musk, Donald Trump, and Andrew Huberman{" "}
              <img src={i8} className='i8' alt='i8' />
            </p>
            <p className='h-st7'>
              The »Smart Smart Multi-Robot Storyboard Creator« knows four
              characters so far:
              <br />
              Jack <i>(Production Assistant)</i>, Andy <i>(Artist)</i>, Lora{" "}
              <i>(Admin Manager)</i>, Donna{" "}
              <i>
                (Stack
                <br />
                Representative)
              </i>
              , Rosy <i>(Director)</i>, Tyring <i>(Head of CDFI)</i>, Derya{" "}
              <i>(Head of Action)</i>,<br />
              and Louis Litt <i>(Legal Employee)</i>.
            </p>
            <div className='h-t4'>
              <p className='h-st8'>
                Jack and Andy argue over a patient's file.
              </p>
              <p className='h-st8'>Rosy and Tyring meet in the hallway.</p>
              <p className='h-st8'>Derya and Litt clean the CSSD after work.</p>
              <p className='h-st8'>
                Illustrate Mauricio, Derya and Hans hav...
              </p>
            </div>
          </div>
          <div className='h-blank'>
            <img
              src={selectedImage || i5}
              className='i5'
              alt='i5'
              onClick={handleImageClick}
              onContextMenu={(e) => handleContextMenu(e, "i5")}
            />
            <img src={i4} className='i4' alt='i4' />
            <input
              type='text'
              placeholder='Message a new illustration instruction'
              className='h-i1'
              onChange={handleInputChange}
            />
            <input
              type='file'
              accept='image/*'
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: "none" }} // Hide the file input
            />
            <p className='h-b1'>20/100 Credits left</p>
          </div>
        </div>
      </div>
    </div>
  );
}
