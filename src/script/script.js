const datacards = document.getElementById('callcards');
const fetchdata = (await(await fetch(`src/data.json`)).json());
console.log(fetchdata.map((d)=>console.log(d.title)))

const data = fetchdata.map((item, index) => {
    index++
    return `<h3>${item.title}</h3><iframe width="400px" height="400px" src="./src/challanges/day${index}/day${index}.html" frameborder="0"></iframe>`
})
console.log(data);
data.forEach(Element => {
    datacards.innerHTML =Element
});