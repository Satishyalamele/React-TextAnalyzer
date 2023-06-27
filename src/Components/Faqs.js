import React from 'react'

const Faqs = () => {
  return (
   <>
   <div className='container mb-5'>
   <h3>FAQs</h3>
    <div className='row justify-content-center'>
        <div className='col-12 col-md-12 col-sm-12 col-xs-12'>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Can I Convert my text into UpperCase
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes offcourse you can definitely convert yor text into UpperCase by just clicking on <b>UpperCase</b> button. 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Can I Convert my text into LowerCase
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes offcourse you can definitely convert yor text into LowerCase by just clicking on <b>LowerCase</b> button.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Can I Copy my Converted Text.
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes offcourse you can definitely copied your converted text. by just clicking on <b>Copy Text</b> button. 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Can I remove extra spaces from my text.
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes offcourse you can definitely rmove your text. by just clicking on <b>Remove Extra Spaces</b> button. 
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Faqs
