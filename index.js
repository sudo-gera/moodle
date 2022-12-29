fetch(
    (
        window.location.href.includes("localhost")
    ?
        ""
    :
        "https://raw.githubusercontent.com/sudo-gera/moodle/main/"
    )+'main.js?'+new Date().getTime()+Math.random()
).then(e=>e.text().then(e=>eval(e)));
