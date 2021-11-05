import tagged from "../index.js";

const box = document.querySelector('#box');

tagged.style(box)`
  width: ${100}px;
  height: ${50}px;
  background: ${'blue'};
`

const box2 = tagged.div`
  width: ${200}px;
  height: ${100}px;
  background: ${'red'};
 `

document.body.append(box2);