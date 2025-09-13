async function shortenUrl() {
    const url = document.getElementById("urlInput").value;
    if (!url) return alert("Please enter a URL");

    try {
        const response = await fetch("http://localhost:8000/shorten", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url })
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`Server error: ${response.status} - ${text}`);
        }

        const data = await response.json();
        const result = document.getElementById("result");

        if (data.error) {
            result.innerText = data.error;
        } else {
            result.innerHTML = `Shortened URL: <a href="${data.url}" target="_blank">${data.url}</a>`;
        }
    } catch (err) {
        console.error(err);
        document.getElementById("result").innerText = "Something went wrong!";
    }
}