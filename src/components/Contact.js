import React from 'react'

export default function Contact() {
  return (
    <div>
      <div class="container contact-form mt-5">
        <form method="post">
          <h3>Contact Me</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
              </div>
              <div class="form-group">
                <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
              </div>
              <div class="form-group">
                <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
              </div>
              <div class="form-group">
                <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea name="txtMsg" class="form-control" placeholder="Your Message *" ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
