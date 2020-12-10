import React from 'react';
import PicGender from './PicGender';
import JamieJade from './JJ';

export default function Portfolio1() {
  return (
    <div>
      <div class="row mb-4 mt-4">
        <div class="col-lg-6 col-sm-12">
          <div class="card bg-dark text-light" style="width: 18rem;">
            <PicGender/>
              <div class="card-body">
                <p class="card-text text-center">
                  I have had JJ, since she was 6 weeks old. She has been with me for everything. All my ups and downs. She teaches me what unconditional love is everyday.
                        </p>
              </div>
                </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="card bg-dark text-light" style="width: 18rem;">
              <JamieJade />
                <div class="card-body">
                  <p class="card-text text-center">
                    This was our gender reveal. As you can see on the floor, one reveal happened, which was a boy and as you can see the second reveal was also a boy. Using my first sports bike, '06 Yamaha R6'. One of my best days of life.
                        </p>
                </div>
                </div>
            </div>
          </div>
    </div>
  )
}
