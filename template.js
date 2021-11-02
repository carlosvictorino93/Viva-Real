clearChildren = (id) => {
    const element = document.querySelector(id);
    let child = element?.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}
insert404 = () => {
    const summary = document.querySelector("#summary");
    const msgs = ['OOOOPS!', 'ALGO DEU ERRADO NA SUA BUSCA.', 'status 500', 'POR FAVOR, TENTE NOVAMENTE.'];
    msgs.forEach(m => {
        const tag = createElement(m === 'status 500' ? 'h3' : 'h2', ['inline-block', 'bold', m !== 'status 500' ? 'strong' : 'red']);
        const div = createElement('div', []);
        div.appendChild(tag).innerText = m;
        summary.appendChild(div);
    })
}
insertSummary = (totalCount, term) => {
    const summary = document.querySelector("#summary");
    const div = createElement('div', ['text-left', 'mt-2', 'mb-2', 'pl-2']);
    summary.appendChild(div);
    const h4 = createElement('h4', ['inline-block', 'bold']);
    div.appendChild(h4).innerText = `${totalCount}`;
    const h5 = createElement('h5', ['inline-block', 'ml-2']);
    div.appendChild(h5).innerText = `Imóveis à venda em ${term.name} - ${term.state.toUpperCase()}`;
}
insertCityTag = (term) => {
    let city = document.querySelector("#city-tag");
    let div = createElement('button', ['city-tag', 'mb-3', 'ml-2']);
    city.appendChild(div).innerText = `${term.name} - ${term.state.toUpperCase()}   ×`;
    city = document.querySelector("#searchTerm");
    let span = createElement('span', []);
    city.appendChild(span).innerText = `${term.name} - ${term.state.toUpperCase()}`
    btn = createElement('btn', ['search-term-btn', 'text-left', 'mb-3', 'ml-2']);
    city.appendChild(btn).innerText  = '×';
}
insertCard = (element, term) => {
    const address = element.link.data;
    const cardName = element.link.name;
    const size = element.listing.usableAreas[0];
    const bedrooms = element.listing.bedrooms[0];
    const bathrooms = element.listing.bathrooms[0];
    const amenities = element.listing.amenities;
    const parkSpaces = element.listing.parkingSpaces[0];
    let condoPrice = element.listing.pricingInfos[0]?.monthlyCondoFee;
    condoPrice = condoPrice === undefined ? '-' : 'R$ ' + formatCurrency(condoPrice);
    let iptu = element.listing.pricingInfos[0]?.yearlyIptu;
    iptu = iptu === undefined ? '-' : 'R$ ' + formatCurrency(iptu);
    let price = element.listing.pricingInfos[0]?.price;
    price = price === undefined ? '-' : 'R$ ' + formatCurrency(price);
    const pic = element.medias[0].url;
    const unitType = element.listing.unitTypes[0];

    const cards = document.querySelector("#cards");
    const card = createElement('div', ['card', 'mt-2']);

    const row1 = createElement('div', ['row']);
    const col1 = createElement('div', ['col', 'col-5', 'no-padd']);
    const img = createElement('img', ['card-pic']);
    img.setAttribute('src', pic);
    col1.appendChild(img);
    const col2 = createElement('div', ['col', 'col-7', 'no-padd']);
    let p = createElement('p', ['mt-2', 'text-left', 'address']);
    const addr = `${address.street}, ${address.streetNumber} - ${address.neighborhood}, ${address.city} - ${term.state.toUpperCase()}`;
    col2.appendChild(p).innerText = addr;
    let h5 = createElement('h5', ['text-left', 'title']);
    col2.appendChild(h5).innerText = cardName;

    const ul1 = createElement('ul', ['nav', 'mt-4']);
    const characts = [`${size} m²`, `${bedrooms} Quartos`, `${bathrooms} Banheiros`, `${parkSpaces} Vagas`];
    characts.forEach(a => {
        let li = createElement('li', ['nav-item', 'charact', 'info', 'mr-2']);
        ul1.appendChild(li).innerText = `${a}`;
    });

    const ul2 = createElement('ul', ['nav', 'mt-2']);
    amenities.forEach((a, i) => {
        li = createElement('li', ['nav-item', 'mr-2', 'amenity']);
        if (i <= 2) {
            ul2.appendChild(li).innerText = `${capFirstLetter(a)}`
        } else if (i === 3) {
            ul2.appendChild(li).innerText = `...`;
        }
    });

    const row2 = createElement('div', ['row', 'mt-5']);
    const col3 = createElement('div', ['col', 'col-4']);
    h5 = createElement('h5', ['info', 'no-margin', 'text-left']);
    col3.appendChild(h5).innerText = `${price}`;
    if (unitType === 'APARTMENT' || unitType === 'CONDOMINIUM') {
        p = createElement('p', ['info', 'text-left', 'c-price']);
        p.innerText = 'Condomínio: ';
        const span = createElement('span', []);
        p.appendChild(span).innerText = condoPrice;
        col3.appendChild(p);
    }
    const col4 = createElement('div', ['col', 'col-8', 'btn-section', 'justify-content-end']);
    const btnTexts = ['TELEFONE', 'ENVIAR MENSAGEM'];
    btnTexts.forEach(b => {
        const button = createElement('button', ['btn', 'btn-card']);
        col4.appendChild(button).innerText = b;
    })

    row2.appendChild(col3);
    row2.appendChild(col4);
    col2.appendChild(ul1);
    col2.appendChild(ul2);
    col2.appendChild(row2);
    row1.appendChild(col1);
    row1.appendChild(col2);
    card.appendChild(row1);
    cards.appendChild(card);
}
createElement = (tag, classes) => {
    const element = document.createElement(tag);
    classes.forEach(c => element.classList.add(c));
    return element;
}
