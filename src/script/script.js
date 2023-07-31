const datacards = document.getElementById('callcards');
const fetchdata = (await(await fetch(`src/data.json`)).json());

const data = fetchdata.map((item, index) => {
    index++
    return `<div key='${index}' class='innercard'><h3>${item.day} ${item.title}</h3><iframe width="400px" height="400px" src="./src/challanges/day${item.index}/index.html" frameborder="0"></iframe></div>`
})
data.forEach(Element => {
    datacards.innerHTML +=Element 
});