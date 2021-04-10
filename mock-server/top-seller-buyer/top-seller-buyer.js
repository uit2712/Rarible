

Array.from(document.querySelectorAll(".sc-bdnylx .cPoHFM")[1].querySelectorAll(".sc-bdnylx .bQiBKA")).map(el => {
    const index = Number(el.querySelector(".sc-bdnylx .jooBkH > span")?.innerText);
    const imgSrc = el.querySelector("a img").src;
    const name = el.querySelector("a span").innerText; 
    const total = el.querySelector(".sc-bdnylx .hUMjpW > span").innerText;
    return {
        index: index,
        imgSrc: imgSrc,
        name: name,
        total: total,
    }
})



// EXPERIMENTAL
Array.from(document.querySelectorAll(".sc-bdnylx .cPoHFM")[1]?.children).map(el => {
    const indexs = Array.from(el.querySelectorAll(".sc-gtssRu .dFrygW")).map(idx => Number(idx.innerText));
    const imgSrcs = Array.from(el.querySelectorAll("a img")).map(elImg => elImg.src);
    const names = Array.from(el.querySelectorAll("a span")).map(name => name.innerText); 
    const totals = Array.from(el.querySelectorAll(".sc-bdnylx .hUMjpW span")).map(total => Number(total?.innerText));
    return ([
        {
            index: indexs[0],
            imgSrc: imgSrcs[0],
            name: names[0],
            total: totals[0],
        },
        {
            index: indexs[1],
            imgSrc: imgSrcs[1],
            name: names[1],
            total: totals[1],
        },
        {
            index: indexs[2],
            imgSrc: imgSrcs[2],
            name: names[2],
            total: totals[2],
        }
    ])
})