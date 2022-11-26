import { render } from "@testing-library/react";
import React from "react";
import Slider from "./Slider";
import $ from 'jquery';
const Presentation = function() {
      
    $(document).ready(function(){
        $('#pres__title-1').on('click', function(){
        $('#pres__title-1').toggleClass('active__button');
        $('.pres__name_title').removeClass('active__button');
        $('pres__title-1').addClass('active__button');
        });
      
        $('#pres__title-2').on('click', function(){
        $('#pres__title-2').toggleClass('active__button');
        $('.pres__name_title').removeClass('active__button');
        $('pres__title-2').addClass('active__button');
        });
      
        $('#pres__title-3').on('click', function(){
        $('#pres__title-3').toggleClass('active__button');
        $('.pres__name_title').removeClass('active__button');
        $('pres__title-3').addClass('active__button');
        });
      }
      );
      
      $(document).ready(function(){
        $('#pres__title-1').on('click', function(){
        $('#pres__title-1').toggleClass('active__button');
        $('.slide__item').removeClass('active');
        $('#slide__1').addClass('active');
        });
      
        $('#pres__title-2').on('click', function(){
        $('#pres__title-2').toggleClass('active__button');
        $('.slide__item').removeClass('active');
        $('#slide__2').addClass('active');
        });
      
        $('#pres__title-3').on('click', function(){
        $('#pres__title-3').toggleClass('active__button');
        $('.slide__item').removeClass('active');
        $('#slide__3').addClass('active');
        });
      }
      );
     

    return (
      
<div class="pres">
     <div class="container">
            <div class="pres__icon"><img src="/img/icon__up.png" alt="" srcset=""/></div>
                <div class="pres__title"><h1>Our work is the presentation 
            of our capabilities.
            </h1></div>
        <div class="pres__text regular"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>

        <p class="semi">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></div>
        <div class="pres__slider">
            <div class="pres__name">
                <ol>
                <li className="pres__name_title active__button" id="pres__title-1">Simple </li>
                <li class="pres__name_title" id="pres__title-2">Transparent</li>
                <li class="pres__name_title" id="pres__title-3">Collaborative</li>
            </ol>
            </div>
            <Slider/>
        </div>
     </div>
    </div>
    );
}

export default Presentation;