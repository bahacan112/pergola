import {
    Carousel,
    initTWE,
  } from "tw-elements";
  
initTWE({ Carousel });

const homeDOM = document.querySelector('#home');
const homeMobileDOM = document.querySelector('#homeMobile');
const navDOM = document.querySelector('.header nav');
const headerDOM = document.querySelector('.header');

homeDOM.classList.add("text-blue-600","font-bold");
homeDOM.classList.toggle("text-gray-400");
homeMobileDOM.classList.add("bg-blue-50","text-blue-600");
homeMobileDOM.classList.toggle('text-gray-400');

headerDOM.classList.toggle('bg-white');
headerDOM.classList.toggle('sticky');
headerDOM.classList.add('fixed','w-full');

