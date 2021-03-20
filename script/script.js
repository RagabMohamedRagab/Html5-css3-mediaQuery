/*******Navbar*********** */
let display_element = document.querySelectorAll('.Icon'),
    display_list = document.querySelector('.metting_list');
console.log(display_element)
display_element[0].onclick = function () {
    if (display_list.style.display == 'none') {
        display_list.style.display = 'block';
        this.style.display = 'none';
        display_element[1].style.display = 'block';
    } else {
        display_list.style.display = 'none';
        this.style.display = 'none';
        display_element[0].style.display = 'block'
    }
}
display_element[1].onclick = function () {
    if (display_list.style.display == 'block') {
        display_list.style.display = 'none';
        this.style.display = 'none';
        display_element[0].style.display = 'block';
    }
}
/********Home*********** */
let home = document.querySelector('.home'),
    home_image = new Array(
       "url('./Image/image1.jpg')",
        "url('./Image/image2.jpg')",
        "url('./Image/image3.jpg')",
    );


    setInterval(function () {
        round_Image = Math.floor(Math.random() * home_image.length);
        home.style. backgroundImage=home_image[round_Image];
    },3000);
    /********Scalable********* */
    