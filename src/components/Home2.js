import React from 'react'
import './Home.css'
import './Home2.css'
import i1 from './i1.png'
import i2 from './i2.png'
import i3 from './i3.png'
import i4 from './i4.png'
import i5 from './i5.png'
import i6 from './i6.png'
import i7 from './i7.png'
import i8 from './i8.png'
import i9 from './i9.png'
import i10 from './i10.jpeg'
import i11 from './i11.png'
import i12 from './i12.jpeg'
import i13 from './i13.jpg.png'
import gpt from './gpt.png'
import { useState } from 'react'
export default function Home2() {
  // Handle right-click event
  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent the default right-click menu
    setMenuPosition({ x: event.pageX, y: event.pageY });
    setMenuVisible(true);
  };
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  // Hide menu when clicking elsewhere
  const handleClick = () => {
    setMenuVisible(false);
  };
  return (
    <div> 
      <div className='h-box'>
      <div className='h-box1'>
      <div className='h-i'>
      <img src ={i2} className='i2'></img>
      <img src = {i3}></img> </div>
      <div className='h-t1'>
      <p className='h-st1'>PREVIOUS 5 DAYS</p> 
      <div className='htt' onClick={handleClick}>
      <div className='h-st2' onContextMenu={handleContextMenu}>Emma and Hans argue over </div>
      {menuVisible && (
        <ul
          style={{
            position: 'absolute',
            // top: `${menuPosition.y}px`,
            top : "0px",
            left: `${menuPosition.x}px`,
            backgroundColor: 'white',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
            listStyle: 'none',
            margin: 0,
            borderRadius: '9px',
            height: '130px', 
            padding: '0.5rem',
            
          }}
        >
          <li style={{ padding: '5px 8px', cursor: 'pointer' , fontSize: '13px',color: 'gray' }} className='li-1'><img src ={i10} className='i10'></img>Share</li>
          <li style={{ padding: '5px 8px', cursor: 'pointer', fontSize: '13px',color: 'gray' }} className='li-1'> <img src ={i11} className='i10'></img>Rename</li>
          <li style={{ padding: '5px 8px', cursor: 'pointer', fontSize: '13px',color: 'gray' }} className='li-1'><img src ={i12} className='i10'></img>Archive</li>
          <li style={{ padding: '5px 8px', cursor: 'pointer', fontSize: '13px',color: 'red' }} className='li-1'><img src ={i13} className='i10'></img>Delete</li>
        </ul>
      )}
      </div>
      <p className='h-st2'>Werner visits the CSSD and</p>
      <p className='h-st2'>Inge laughs with Emma about</p>
      </div>
      <div className='h-t2'>
      <p className='h-st1'>PREVIOUS 30 DAYS</p>
      <p className='h-st2'>Emma and Hans argue over a
      
      </p>
      <p className='h-st2'>Werner visits the CSSD and</p>
      <p className='h-st2'>Inge laughs with Emma about</p>
      <div className='h-t3'><p className='h-st3'>
        <img src = {i6} className='i6'></img>Andreas Elisch</p>
      <p className='h-st4'><img src ={i7} className='i6'></img>Invite People to Team</p>
      </div>
      </div>
    </div>
    
    <div className='h2-box2'>
      <img src ={gpt} className='gpt'></img>
    <div className='h2-blank'>
      <img src = {i5} className='i5'></img>
      <img src ={i4} className='i4' ></img>
        <input type="text" placeholder='Message a new illustration instruction' className='h-i1' >
        </input>
        <p className='h-b1'>20/100 Credits left</p>
      </div>
      </div>
    </div>
    </div>
  )
}