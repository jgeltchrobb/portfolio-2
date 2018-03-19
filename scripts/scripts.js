var version = detectIE();

if (version === false) {
    alert("Using IE")
//   document.getElementById('result').innerHTML = '<s>IE/Edge</s>';
}

function port_flip() {
    document.getElementById('portfolio').classList.toggle('port_flipped'); 
    if (about_me.classList.contains("about_flipped")) {
        about_me.classList.remove("about_flipped");
    }
    
    if ((about_me.classList.contains("about_flipped")) || (portfolio.classList.contains("port_flipped"))) {
        document.getElementById('cover').classList.add('dim');

    } else (document.getElementById('cover').classList.remove('dim'));

};

function about_flip() {
    document.getElementById('about_me').classList.toggle('about_flipped'); 

    if (portfolio.classList.contains("port_flipped")) {
        portfolio.classList.remove("port_flipped");
    }
    
    if ((portfolio.classList.contains("port_flipped")) || (about_me.classList.contains("about_flipped"))) {
        document.getElementById('cover').classList.add('dim');
   
    } else (document.getElementById('cover').classList.remove('dim'));

};

function port_overlay() {
    document.getElementById('top_page').classList.toggle('background-content1');
    document.getElementById('top_portfolio').classList.toggle('overlay1');
    document.getElementById('overlay-content').classList.toggle('overlay-content1');
    document.getElementById('my_name').classList.toggle('words_blur');
    document.getElementById('full_stack').classList.toggle('words_blur');   
    
};