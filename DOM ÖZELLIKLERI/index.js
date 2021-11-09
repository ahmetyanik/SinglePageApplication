const pList1 = document.getElementsByTagName('p');
console.log(pList1);

const pList2 = document.querySelectorAll('p');
console.log(pList2);

const section = document.querySelector('section');

const children1 = section.children;
console.log("children", children1);

console.log("children length", children1.length);

const children2 = section.childNodes;
console.log("childNodes", children2);

console.log("childNodes length", children2.length);

const sitemap = document.getElementById('sitemap');

children2.forEach(node => {
  const li = document.createElement('li');
  li.innerText = node.nodeName;
  sitemap.appendChild(li);
});

const onlyElements = document.querySelector('#only-elements');

for (let i = 0; i < children1.length; i++) {
  const li = document.createElement('li');
  li.innerText = children1[i].nodeName;
  onlyElements.appendChild(li);
}

const highlighted = document.querySelector('.highlighted');
highlighted.style.color = 'green';
console.log(highlighted);

const parentFromHighlighted = highlighted.parentElement;
parentFromHighlighted.style.backgroundColor = 'yellow';
console.log(parentFromHighlighted);

const parentNodeFromHightlighted = highlighted.parentNode;
console.log(parentNodeFromHightlighted);

const html = document.querySelector('html');
console.log(html.parentElement);
console.log(html.parentNode);

const nexthigher = highlighted.closest('.foo');
console.log("closest", nexthigher);

const domian = document.querySelector('#domian');
const carla = domian.previousElementSibling;
console.log("element sibling", carla);
carla.style.color = 'red';

const carlaSister = domian.previousSibling;
console.log("sibling", carlaSister);
// carlaSister.style.color = 'pink';

const eike = domian.nextElementSibling;
console.log("element sibling", eike);
eike.style.color = 'blue';

const all = document.querySelectorAll('*');
console.log("all", all)
all.forEach(node => {
  if (node.matches('.foo')) {
    console.log("matches .foo", node);
  }
});
