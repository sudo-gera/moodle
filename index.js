fetch(
    (
        window.location.href.includes("localhost")
    ?
        ""
    :
        "https://gitlab.com/sudo-gera/moodle/-/raw/main/"
    )+'main.js?'+new Date().getTime()+Math.random()
).then(e=>e.text().then(e=>eval(e)));
