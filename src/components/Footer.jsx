import React from 'react'
import App_Store from '../assets/img/logos/App_Store.webp'
import Play_Store from '../assets/img/logos/Play_Store.webp'

function Footer() {
    return (
        <footer class="pt-7 pt-lg-8">
            <div class="container">
                <div class="row gy-4 g-md-3 border-bottom pb-8 pb-lg-9 justify-content-center">
                    <div class="col-6 col-md-3">
                        <p class="mb-2 lh-lg ls-1">Company</p>
                        <ul class="list-unstyled text-1100">
                            <li class="mb-1"> <a class="ls-1 lh-xl" href="#about">About us</a></li>
                            <li class="mb-1"> <a class="ls-1 lh-xl" href="#contact"> Contact us</a></li>
                            <li class="mb-1"> <a class="ls-1 lh-xl" href="#!">Careers</a></li>
                            <li class="mb-1"> <a class="ls-1 lh-xl" href="#!">Press</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md-3">
                        <p class="mb-2 lh-lg">Product</p>
                        <ul class="list-unstyled text-1100">
                            <li class="mb-1"> <a class="ls-1 lh-xl" href="#!">Features</a></li>
                            <li class="mb-1"> <a class="ls-1 lh-xl" href="#!"> Pricing</a></li>
                            <li class="mb-1"> <a class="ls-1 lh-xl" href="#!"> News</a></li>
                            <li class="mb-1"> <a class="ls-1 lh-xl" href="#!"> Help desk</a></li>
                            <li class="mb-1"><a class="ls-1 lh-xl" href="#!"> Support</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md-3">
                        <p class="mb-2 lh-lg"> Legal</p>
                        <ul class="list-unstyled text-1100">
                            <li class="mb-1"> <a class="ls-1 lh-xl" href="#!">Privacy</a></li>
                            <li class="mb-1"> <a class="ls-1 lh-xl" href="#!"> Terms & Conditions</a></li>
                            <li class="mb-1"> <a class="ls-1 lh-xl" href="#!"> Return Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md-3 d-md-flex flex-column align-items-md-end pe-md-0">
                        <div>
                            <p class="mb-2 lh-lg"> Download Our App</p>
                            <div class="mb-1 mb-lg-2"> <a class="border-0 p-0 bg-transparent cursor-pointer rounded-1" href="#!"> <img class="img-fluid" src={App_Store} alt="assets/img/logos/App_Store.webp" /></a></div><a class="border-0 p-0 bg-transparent cursor-pointer rounded-1" href="#!"> <img class="img-fluid" src={Play_Store} alt="assets/img/logos/Play_Store.webp" /></a>
                        </div>
                    </div>
                </div>
                <div class="row gy-2 py-3 justify-content-center justify-content-md-between">
                    <div class="col-auto ps-0">
                        <p class="text-center text-md-start lh-xl text-1100"> © 2024 Copyright, All Right Reserved, Made by <a class="fw-semi-bold" href="">USer X </a>❤️</p>
                    </div>
                    <div class="col-auto pe-0"><a class="icons fs-8 me-3 me-md-0 ms-md-3 cursor-pointer" href="#!"><span class="uil uil-twitter"> </span></a><a class="icons fs-8 me-3 me-md-0 ms-md-3 cursor-pointer" href="#!"><span class="uil uil-instagram"></span></a><a class="icons fs-8 me-3 me-md-0 ms-md-3 cursor-pointer" href="#!"><span class="uil uil-linkedin"> </span></a></div>
                </div>
            </div>
        </footer>
  )
}

export default Footer