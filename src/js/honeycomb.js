import '../styles/honeycomb.scss';

const colCount = 12;
const rowCount = 10;
const content = [
  {
    content: 'Celine',
    rowIndex: 1,
    colIndex: 2,
    classes: 'dark'
  },
  {
    content: 'Bonin',
    rowIndex: 2,
    colIndex: 5
  },
  {
    content: 'Developer',
    rowIndex: 4,
    colIndex: 2,
    classes: 'dark'
  },
];

const createGrid = () => {
  let grid = '';
  for (let r = 0;r<rowCount; r++) {
    for (let c = 0;c<colCount; c++) {
      const char = getChar(r, c);
      grid += `<span class='hex'>${char}</span>`;
    }
  }
  return grid;
}

const getChar = (rIndex, cIndex) => {
  let char = '';
  const position = colCount * rIndex  + cIndex;
  const rowContent = content.find(item => item.rowIndex === rIndex);
  let className = '';
  if (rowContent && rowContent.content) {
    const contentColIndex = rowContent.colIndex;
    className = rowContent.classes || '';
    char = (cIndex >= contentColIndex) ?  rowContent.content[cIndex - contentColIndex] : false;
  }
  const html = (char) ? `<span class='${className}'>${char}</span>` : '';
  return  html;
}

export function honeycomb(selector) {
  const contents = createGrid();
  const element = document.getElementById(selector);
  element.innerHTML = contents;
}
