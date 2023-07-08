import React from "react";
import Icons from './Icons'
function Footer() {
  return (
    <>
      <div class="container-fluid  bg-secondary text-dark py-2">
        <div class="row">
          <div class="col-md-4 text-center">
          <b> &copy; TextAnalyzer | Developed By Satish Yalamele </b>
          </div>
          <div class="col-md-4 offset-md-4 text-center">
           <Icons/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
