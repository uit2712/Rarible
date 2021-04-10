Array.from(document.querySelector(".ReactVirtualized__Grid__innerScrollContainer")?.children).map(el => {
    const listImg = Array.from(el.querySelector(".sc-carGAA.sc-JsfGe.dpbdIG.dzcLqc").querySelectorAll("a img")).map(imgEl => imgEl.src);
    const avatarUrl = el.querySelector(".sc-carGAA.sc-jlQhLH.sc-iXqwbG.dpbdIG.fYQCFi.jFXzrz .sc-bdnylx img")?.src;
    const title = el.querySelector(".sc-carGAA.sc-jlQhLH.dpbdIG.fYQCFi:not(.sc-iXqwbG) a").innerText;
    const price = Number(el.querySelector(".sc-carGAA.sc-ecQjpJ.dpbdIG.llyEoq .sc-bdnylx.jvgRQA span.sc-gtssRu.izNbhn").dataset.price);
    const priceUnit = el.querySelector(".sc-carGAA.sc-ecQjpJ.dpbdIG.llyEoq .sc-bdnylx.jvgRQA span.sc-gtssRu.izNbhn").dataset.currencySymbol;
    const currentStock = Number(el.querySelector(".sc-carGAA.sc-ecQjpJ.dpbdIG.llyEoq .sc-gtssRu.HymoY span.sc-gtssRu.fnyloc").dataset.stock);
    const currentSupply = Number(el.querySelector(".sc-carGAA.sc-ecQjpJ.dpbdIG.llyEoq .sc-gtssRu.HymoY span.sc-gtssRu.fnyloc").dataset.supply);
    const bidPrice = Number(el.querySelector(".sc-carGAA.sc-ecQjpJ.dpbdIG.llyEoq .sc-gtssRu.sc-oefIU.gWFzdQ.gFPhXg span.sc-gtssRu.fnyloc")?.dataset?.price);
    const bidUnit = el.querySelector(".sc-carGAA.sc-ecQjpJ.dpbdIG.llyEoq .sc-gtssRu.sc-oefIU.gWFzdQ.gFPhXg span.sc-gtssRu.fnyloc")?.dataset?.currencySymbol;
    const totalLike = Number(el.querySelector(".sc-carGAA.sc-ecQjpJ.dpbdIG.llyEoq .sc-carGAA.sc-jhGSUB.dpbdIG.dPxVtN span.sc-gtssRu.gWFzdQ")?.dataset?.value);
    return {
        title,
        price,
        priceUnit,
        avatarUrl,
        currentStock,
        currentSupply,
        bidPrice,
        bidUnit,
        totalLike,
        collection: {
            name: "Rarible",
            imageUrl: listImg[0],
        },
        owner: {
            name: "Svosemzen",
            imageUrl: listImg[1],
        },
        creator: {
            name: "DJ Many",
            imageUrl: listImg[2],
        }
    }
})
