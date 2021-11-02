search = async (input) => {
    const term = getSearchTerm(input.value);
    const ids = ['#summary', '#city-tag', '#cards', '#searchTerm'];
    ids.forEach(id => clearChildren(id));
    if (term !== 404) {
        const data = await searchInAPI(term);
        const totalCount = data.search.totalCount;
        const listings = data.search.result.listings;
        insertSummary(totalCount, term);
        insertCityTag(term);
        listings.forEach(element => {
            insertCard(element, term);
        });
    } else {
        insert404();
    }
}
getSearchTerm = (str) => {
    if (str.replace(/[Ss]+.*[Pp]+.*/gm, `sao-paulo`) === 'sao-paulo') return { state: 'sp', city: 'sao-paulo', name: 'São Paulo' };
    if (str.replace(/[Rr]+.*[Jj]+.*/gm, `rio-de-janeiro`) === 'rio-de-janeiro') return { state: 'rj', city: 'rio-de-janeiro', name: 'Rio de Janeiro' };
    return 404;
}
