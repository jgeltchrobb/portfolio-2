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

// function scrollTo(to, duration) {
//     if (document.body.scrollTop == to) return;
//     var diff = to - document.body.scrollTop;
//     var scrollStep = Math.PI / (duration / 10);
//     var count = 0, currPos;
//     start = element.scrollTop;
//     scrollInterval = setInterval(function(){
//         if (document.body.scrollTop != to) {
//             count = count + 1;
//             currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
//             document.body.scrollTop = currPos;
//         }
//         else { clearInterval(scrollInterval); }
//     },10);
// }

// function test(elID)
// {
//     var dest = document.getElementById(elID);
//     scrollTo(dest.offsetTop, 500);
// }