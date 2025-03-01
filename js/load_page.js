var before_load_time = new Date().getTime();
window.onload = page_load_time;

function page_load_time() {
    document.getElementById("load_time").innerHTML =
        "Page load time is <b>" + (new Date().getTime() - before_load_time) / 1000 + "</b> seconds";
}