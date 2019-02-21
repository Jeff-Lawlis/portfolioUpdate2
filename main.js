var about = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cum nulla aperiam fugiat velit modi soluta, saepe magni ad pariatur vitae optio atque. Tempore saepe illo rem, alias quis maiores?"

$(document).ready(function(){

var main = $("main")

$("#about").on("click", function() {
    renderAbout()
})
$("#projects").on("click", function() {
    renderProjects()
})
$("#contact").on("click", function() {
    renderContact()
})

function renderAbout() {
    main.empty()
    var subHead = $(`<h3> About Me </h3>`)
    var p = $(`<p> ${about} </p>`)
    main.append(subHead, p)
}
function renderProjects() {
    main.empty()
    var subHead = $(`<h3> Projects </h3>`)
    var list = $(`
    <ul>
        <li><img/></li>
        <li><img/></li>
        <li><img/></li>
        <li><img/></li>
    </ul>
    `
    )
    main.append(subHead, list)
}
function renderContact() {
    main.empty()
    var subHead = $(`<h3> Contact </h3>`)
    var contactForm = $(`
    <ul>
        <li>Email: jeffblawlis@gmail.com</li>
        <li><a href="https://github.com/Jeff-Lawlis">Github</a></li>
    </ul>
    `)
    main.append(subHead, contactForm)
}
renderAbout()


})