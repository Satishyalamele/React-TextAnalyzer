import React from "react";
import Image from '../My-photo.png'
import Icons from '../Components/Icons'
function Developer() {
  return (
    <>
      <div className="container my-5">
        <div className="row text-center">
          <h4>Developer</h4>
          <div className="text-center py-4">
            <img alt="developer"  src={Image} style={{width:"308px", height:'308px'}} />
            <h4 className="my-2">Satish Yalamele</h4>
            <p>
              Content Writer for Blogging || WordPress Expert || MERN Stack
              Developer || UI/UX Designer || Java & Python Programmer
            </p>
            <Icons />
          </div>
        </div>
      </div>
    </>
  );
}

export default Developer;
