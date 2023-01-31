import React from 'react'
import { FiInstagram } from 'react-icons/fi';
import {AiOutlineYoutube,AiOutlineGlobal} from 'react-icons/ai';


const Footer = () => {
  return (
    <>
         {/* footer */}
    
          <footer class="footer" style={{ backgroundColor: 'rgb(171,109,132)', marginTop:'30px' }}>
            <div class="container-fluid">
              <div class="container text-center container-fluid">
                <div class="col">
                  <br></br>
                  <div class="heading">
                    <div class="first">Tripple</div>
                    <div class="last">N</div>
                  </div>
                </div>
                <div class="col">
                  <b style={{ color: "white" }}>Please click on the link below if you need us</b>
                </div>
                <div class="col">
                  <div class="container text-center">
                    <div class="row align-items-start">
                      <div class="col">
                        <div class="social">
                          <br></br>
                          <a href="https://smktelkom-mlg.sch.id/"><AiOutlineGlobal/></a>
                          <a href="https://www.instagram.com/smktelkommalang/" ><FiInstagram/></a>
                          <a href="https://www.youtube.com/c/smktelkommalang" ><AiOutlineYoutube/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="copyright">
                    <b style={{ color: "rgb(205, 188, 188) " }}>Copyright © 2023 TrippleN designed by kelompok 7</b>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          
    

    </>
  )
}

export default Footer