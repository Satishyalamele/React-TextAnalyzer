import React from "react";
import Faqs from "../Components/Faqs";
const About = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-sm-12 col-xs-12">
            <h2 className="text-center my-5">About Us</h2>
            <p className="my-1">
              Welcome to TextAnalyzer, your go-to platform for analyzing and
              understanding written content. Whether you're a student,
              researcher, professional writer, or just curious about the
              intricacies of language, our website is designed to empower you
              with powerful text analysis tools and insights. With a
              user-friendly interface and a comprehensive suite of features,
              TextAnalyzer strives to make complex textual analysis accessible
              and beneficial for users of all backgrounds. At TextAnalyzer, we
              recognize the profound impact that language and written
              communication have on our lives. We believe that unlocking the
              potential of written text can lead to improved comprehension,
              enhanced productivity, and better decision-making. 
            </p>
          </div>
        </div>
      </div>
      <Faqs />
    </>
  );
};

export default About;
