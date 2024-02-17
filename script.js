document.addEventListener("DOMContentLoaded", function(event) {
    function toggleImage(imgElement, initialSrc, replacementSrc, soundId, description) {
        if (imgElement.getAttribute('data-current-src') === initialSrc) {
            imgElement.src = replacementSrc;
            imgElement.setAttribute('data-current-src', replacementSrc);
            if (soundId) {
                document.getElementById(soundId).play();
            }
            document.getElementById("description").innerText = description; 
        } else {
            imgElement.src = initialSrc;
            imgElement.setAttribute('data-current-src', initialSrc);
            document.getElementById("description").innerText = "Click on images for light."; 
        }
    }

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const img4 = document.getElementById('img4');
    const img5 = document.getElementById('img5');
    const img6 = document.getElementById('img6');
    const img7 = document.getElementById('img7');
    const img8 = document.getElementById('img8');
    const img9 = document.getElementById('img9');

    img1.addEventListener('click', function() {
        toggleImage(img1, 'img1.png', 'img1replace.png', 'sound1', 'Late night snack huh?');
    });

    img2.addEventListener('click', function() {
        toggleImage(img2, 'img2.png', 'img2replace.png', 'sound2', 'Are pool lights safe?');
    });

    img3.addEventListener('click', function() {
        toggleImage(img3, 'img3.png', 'img3replace.png', 'sound3', 'SPIDER!');
    });

    img4.addEventListener('click', function() {
        toggleImage(img4, 'img4.png', 'img4replace.png', 'sound4', 'My Grandma still sleeps with a nightlight.');
    });

    img5.addEventListener('click', function() {
        toggleImage(img5, 'img5.png', 'img5replace.png', null, 'Exit signs are always on, buddy.');
    });

    img6.addEventListener('click', function() {
        toggleImage(img6, 'img6.png', 'img6replace.png','sound6', 'I miss that tingling sensation from old TVs.');
    });

    img7.addEventListener('click', function() {
        toggleImage(img7, 'img7.png', 'img7replace.png', 'sound7', 'I wonder what\'s behind that door...');
    });

    img8.addEventListener('click', function() {
        toggleImage(img8, 'img8.png', 'img8replace.png','sound8', 'To be great, study late.' );
    });

    img9.addEventListener('click', function() {
        toggleImage(img9, 'img9.png', 'img9replace.png', 'sound9', 'Don\'t hit the deer!');
    });
});
