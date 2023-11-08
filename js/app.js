//*Nusistatom kiek turesim nuotrauku
let cat_photos = 12;
//*Nusistatom kintamuosius - mygtukas show,mygtukas,shuffle ir galerija
let gallery = document.querySelector(".gallery");
let button_show_gallery = document.querySelector('#button_show_gallery');
let button_shuffle_gallery = document.querySelector('#button_shuffle_gallery');


//*Ciklas su eventlistener kuris paspaudus mygtuka sukurtu galerijos img failus ir parodytu juos
for (let i = 0; i < cat_photos; i++) {
    let img = document.createElement('img');
    img.src = `img/${i}.jpg`; //*Doleris pakeicia paterna nuo maziausio iki didziausio?
    gallery.appendChild(img);
};

//*Paspaudus galerijos buttona Imidzai turi sukristi i vienoda grida
button_show_gallery.addEventListener('click', (e) => {
    gallery.style.display = "grid";
    button_show_gallery.style.display = "none"; //Paspaudus nurodyta mygtuka jis dingsta
});

//Paspaudus shuffle mygtuka jis sumaiso nurodytus imidzus
button_shuffle_gallery.addEventListener('click', (e) => {
    for (let i = gallery.children.length; i >= 0; i--) {
        gallery.appendChild(gallery.children[Math.floor(Math.random() * i)]);
    }
});