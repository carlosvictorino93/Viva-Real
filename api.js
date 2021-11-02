searchInAPI = async (term) => {
    const url = `https://private-9e061d-piweb.apiary-mock.com/venda?state=${term.state}&city=${term.city}`;
    const dataAPI = await fetch(url);
    const data = await dataAPI.json();
    return data;
}