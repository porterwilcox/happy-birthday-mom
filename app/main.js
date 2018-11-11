let isMobile = window.matchMedia("(hover: none)")

!isMobile.matches ? document.querySelector(".container-fluid").innerHTML = `
    <h1 class="text-white">Sorry this site is only viewable on mobile.</h1>
    <h4 class="text-muted">Save - https://porterwilcox.github.io/happy-birthday-mom - in order to view on mobile later.</h4> 
` : document.querySelector(".container-fluid").innerHTML

class CaroItem {
    constructor(img, title, description) {
        this.img = img
        this.title = title || ''
        this.description = description || ''
    }
}

let caros = [
    new CaroItem('assets/biking.jpg', 'Mountain biking together!'),
    new CaroItem('assets/baileymom&i.JPG', 'Good times together!'),
    new CaroItem('assets/b&mom-at-forest.jpg', 'Forest Fun'),
    new CaroItem('assets/mom&i-in-thailand.jpg', 'Exploring Thailand\'s waterfalls on Koh Samui.'),
    new CaroItem('assets/moms40th.jpg', 'Who are you!? ...Gentry! No Way!!'),
    new CaroItem('assets/mom&elephant.jpg', 'Hugging the elephants!'),
    new CaroItem('assets/progression-of-crazy.jpg', 'I just wanted to say HAPPY BIRTHDAY!'),
]

let t = ''
caros.forEach((c, i) => {
    let active
    !i ? active = 'active' : ''
    t+= `
    <div class="carousel-item ${active}">
        <div class="slide-img border border-secondary" style="background-image: url('${c.img}')"></div>
        <div class="text-center text-secondary">
            <h5 class="mt-3">${c.title}</h5>
        </div>
    </div>
    `
})

document.getElementById('slides').innerHTML = t;