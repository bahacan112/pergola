const productDOM = document.querySelector('#products');
const productMobileDOM = document.querySelector('#productsMobile');
productDOM.classList.add("text-blue-600","font-bold");
productDOM.classList.toggle("text-gray-400");
productMobileDOM.classList.add("bg-blue-50","text-blue-600");
productMobileDOM.classList.toggle('text-gray-400');