const input = document.querySelector("#city");
input.addEventListener("change", async () => {
    if (input.value !== null) await search(input);
})
