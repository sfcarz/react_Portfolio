import React, { Component } from 'react'
import ProfilePicture from './ProfilePicture';

export default class AboutMe extends Component {
  render() {
    return (
      <div className='mb-4'>
      <div>
        <div class="row border-bottom border-white mr-2 ml-2">
          <div class="col-7 offset-1 text-light mt-3">
            <h4>
              About Me
                </h4>
          </div>
        </div>
      </div>

      <div class="row mt-3">
          <div class="col-lg-4 offset-lg-1 col-md-6 offset-md-1 col-sm-12">
            <ProfilePicture/>
          </div>
            <div class="col-lg-7 col-md-12 col-sm-12 text-light">
                <p class="nomerge">
              The past 10years I have worked for a venue activation firm named NPU Inc. We have opened and produced events in the most unexpected locations of San Francisco. I ran the bar program for each event. We had to understand the clients view, theme, ideas to help create the desire look the clients envision, while being practical for the bartenders. I have thoroughly enjoyed working for NPU and I don't foresee leaving anytime soon. 
              I want to help elevate NPU in any way I can. I am taking UC Berkely extension program, "Full Stack Web Development" hoping to learn lots of new ideas to incorporate to NPU. 
                </p>
            </div>
        </div>
        <div class="row mt-3">
          <div class="col-lg-10 col-md-6 col-sm-12 text-light offset-1">
            <p>
              Last year was a big year for me. My wife gave me the best news, she got pregnant. When we did the first ultra-sound, we were blessed to find out we were having twins. My jaw dropped, as much shock and love I felt, having twins was something I forever will feel blessed.
                </p> <br/>
            </div>
          </div>
      </div>

      
    )
  }
}
