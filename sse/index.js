const app = require('express')();

app.get("/", (req, res) => {
    res.send("hello");
})


app.get("/stream", (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');

    fetchContinuosLiveFeed(0, res);
})

function fetchContinuosLiveFeed(i, res) {
    res.write("data: " + `hello!${i}\n\n`);
    ++i;
    setTimeout(() => fetchContinuosLiveFeed(i, res), 3000);
}

app.listen(8080, () => console.log(`server connected to port 8080`));