capFirstLetter = (str) => {
    const arr = str.toLowerCase().split("_");
    arr.forEach((e, i) => {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    });
    return arr.join(" ");
}
formatCurrency = (num) => {
    return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}