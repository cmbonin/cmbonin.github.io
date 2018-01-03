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
    content: 'B',
    rowIndex: 1,
    colIndex: 9
  },
  {
    content: 'Developer',
    rowIndex: 3,
    colIndex: 2,
    classes: 'dark'
  },
];

const createGrid = () => {
  let grid = '';
  for (let r = 0;r<rowCount; r++) {
    for (let c = 0;c<colCount; c++) {
      const char = getChar(r, c);
      const odd = r%2 === 0 ? 'even' : 'odd';
      const className = `r${r} c${c} ${odd}`;
      grid += `<span class='hex ${className}'>${char}</span>`;
    }
  }
  return grid;
}

const getChar = (rIndex, cIndex) => {
  let char = '';
  const position = colCount * rIndex  + cIndex;
  const rows = content.filter(item => item.rowIndex === rIndex);
  let className = '';
  if (rows.length >= 1) {
    rows.forEach(row => {
      const contentColIndex = row.colIndex;
      if (cIndex >= contentColIndex && row.content[cIndex - contentColIndex]){
        className = row.classes || '';
        char = row.content[cIndex - contentColIndex];
      }
    });
  }
  const html = `<span class='${className}'>${char}</span>`;
  return  html;
}

export function honeycomb(selector) {
  const contents = createGrid();
  const element = document.getElementById(selector);
  element.innerHTML = contents;
}
