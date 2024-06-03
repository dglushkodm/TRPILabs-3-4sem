import React, {useState} from 'react';
import './App.css';
import Button from "./Button";
import Table from "./Table";
import {GlobalHotKeys} from "react-hotkeys";

function checkAllSquares(matrix: number[][]) : boolean {
    return checkSmallSquare(matrix, 0,0,2,2) &&
        checkSmallSquare(matrix, 0,3,2,5) &&
        checkSmallSquare(matrix, 0,6,2,8) &&
        checkSmallSquare(matrix, 3,0,5,2) &&
        checkSmallSquare(matrix, 6,0,8,2) &&
        checkSmallSquare(matrix, 3,3,5,5) &&
        checkSmallSquare(matrix, 3,6,5,8) &&
        checkSmallSquare(matrix, 6,3,8,5) &&
        checkSmallSquare(matrix, 6,6,8,8)
}

function checkOneSquare(matrix: number[][], row: number, column: number) : boolean {
    switch (row) {
        case 0:
        case 1:
        case 2:
            switch (column) {
                case 0:
                case 1:
                case 2:
                    return checkSmallSquare(matrix, 0, 0, 2, 2)
                case 3:
                case 4:
                case 5:
                    return checkSmallSquare(matrix, 0, 3, 2, 5)
                case 6:
                case 7:
                case 8:
                    return checkSmallSquare(matrix, 0, 5, 2, 8)
            }
            break;
        case 3:
        case 4:
        case 5:
            switch (column) {
                case 0:
                case 1:
                case 2:
                    return checkSmallSquare(matrix, 3, 0, 5, 2)
                case 3:
                case 4:
                case 5:
                    return checkSmallSquare(matrix, 3, 3, 5, 5)
                case 6:
                case 7:
                case 8:
                    return checkSmallSquare(matrix, 3, 6, 5, 8)
            }
            break;
        case 6:
        case 7:
        case 8:
            switch (column) {
                case 0:
                case 1:
                case 2:
                    return checkSmallSquare(matrix, 6, 0, 8, 2)
                case 3:
                case 4:
                case 5:
                    return checkSmallSquare(matrix, 6, 3, 8, 5)
                case 6:
                case 7:
                case 8:
                    return checkSmallSquare(matrix, 6, 6, 8, 8)
            }
            break;
    }
    return false;
}

function fillRandomCells(matrix: number[][], numCells: number) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const availableCells: [number, number][] = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      availableCells.push([i, j]);
    }
  }

  for (let i = 0; i < numCells; i++) {
    if (availableCells.length === 0) {
      break;
    }

    const randomIndex = Math.floor(Math.random() * availableCells.length);
    const [row, col] = availableCells[randomIndex];
    matrix[row][col] = getRandomNumberWithoutConflict(matrix, row, col);

    availableCells.splice(randomIndex, 1);
  }
  return matrix;
}

function checkSmallSquare(matrix: number[][], rowStart:number, columnStart:number, rowEnd: number, colEnd: number ) : boolean {
    let set = new Set();
    let array = [];

    for (let i = rowStart; i <= rowEnd; i++){
        for (let j = columnStart; j <= colEnd; j++){

            if(matrix[i][j] !== 0) {
                set.add(matrix[i][j]);
                array.push(matrix[i][j])
            }
        }
    }
    return set.size === array.length;
}

function getRandomNumberWithoutConflict(matrix: number[][], row: number, col: number): number {
  const rowValues = matrix[row];
  const colValues = matrix.map((row) => row[col]);

  const usedValues = new Set([
    ...rowValues,
    ...colValues,
  ]);

  const availableNumbers = Array.from({ length: 9 }, (_, index) => index + 1);

  const availableNumbersWithoutConflict = availableNumbers.filter(
      (number) => !usedValues.has(number)
  );

  const randomIndex = Math.floor(Math.random() * availableNumbersWithoutConflict.length);
  return availableNumbersWithoutConflict[randomIndex];
}

function check(matrix: number[][], row: number, col: number, num: number) {
  const rowValues = matrix[row];
  const colValues = matrix.map((row) => row[col]);

  const usedValues = new Set([
    ...rowValues,
    ...colValues,
  ]);

  return {isValid: !usedValues.has(num), row: row, column: col};
}

function App(){
  let matrix: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0));
  let m = fillRandomCells(matrix, 20);
  const [error, setError] = useState([{rowIndex: -1, columnIndex: -1}]);

  const [checked, setChecked] = useState(false);
  const [isWon, setWon] = useState(false);

  while (!checkAllSquares(m)){
        let matrix: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0));
        m = fillRandomCells(matrix, 20);
  }

  const [newMatrix, setMatrix] = useState(m);

  const handleFillRandomCells = () => {
      let matrix: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0));
      m = fillRandomCells(matrix, 20);
      while (!checkAllSquares(m)){
          let matrix: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0));
          m = fillRandomCells(matrix, 20);
      }
      setMatrix(m);
      setError([{rowIndex: -1, columnIndex: -1}])
      setChecked(false)
      setWon(false)
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, rowIndex: number, columnIndex: number) => {
      setChecked(false);
      setWon(false);

      setHint({row: -1, column: -1})

      let value = event.target.value;

      if(value === ""){
          setError(prevState => prevState.filter((cell) =>
              cell.columnIndex !== columnIndex || cell.rowIndex !== rowIndex))
          setMatrix(prevState => {
              let m = prevState.slice(0, prevState.length);
              m[rowIndex][columnIndex] = Number(value);
              return m;
          })
          return;
      }


      let checkRes = check(newMatrix, rowIndex, columnIndex, Number(value));

      if (!checkRes.isValid && value !== "0") {
          setError([...error, {rowIndex, columnIndex}])
      }
      else {
          setError(prevState => prevState.filter((cell) =>
              cell.columnIndex !== columnIndex || cell.rowIndex !== rowIndex))


          m = newMatrix.slice(0, newMatrix.length)

          m[rowIndex][columnIndex] = Number(value);

          if(!checkOneSquare(m, rowIndex, columnIndex)){
              setError([...error, {rowIndex, columnIndex}])
          }
      }

      setMatrix(prevState => {
          let m = prevState.slice(0, prevState.length);
          m[rowIndex][columnIndex] = Number(value);
          return m;
      })

  }



    const checkOnClick = () => {
        let found = false;
        for (let i = 0; i < 9; i++){
            for (let j = 0; j < 9; j++){
                found = newMatrix[i][j] === 0;
                if(found) break;
            }
            if(found) break;
        }

        setChecked(true);

        if(found) return;

        let rows = new Set(error.map((err) => err.rowIndex));
        let columns = new Set(error.map((err) => err.columnIndex));

        if(rows.size === 1 && columns.size === 1)
            setWon(true)
        else{
            setWon(false)
        }
    }

    const [hint, setHint] = useState({row: -1, column: -1})

    const getHint = () => {
      m = newMatrix;
      while (true){
          if(hint.column !== -1) break;
          let r1 = Math.floor(Math.random()*9);
          let r2 = Math.floor(Math.random()*9);
          if(m[r1][r2] == 0){
              m[r1][r2] = getRandomNumberWithoutConflict(m, r1, r2);
              setMatrix(m);
              setHint({row: r1, column: r2})
              break;
          }
      }
    }

    const keyMap = {
        RESET: ['r', 'к'],
        HINT: ['h', 'р'],
        CHECK: ['c','с']
    }

    const handlers = {
        RESET: handleFillRandomCells,
        HINT: getHint,
        CHECK: checkOnClick
    }

    return (
      <div className={"App"}>
          <GlobalHotKeys keyMap={keyMap} handlers={handlers} allowChanges={true}/>
          <h1>Судоку</h1>
          <div className={"fd"}></div>
          <div className={"sd"}></div>
          <div className={"td"}></div>
          <div className={"frd"}></div>
          <Table matrix={newMatrix} onChange={onChange} error={error} checked={checked} won={isWon} hint={hint}/>
          <Button title='Новая игра' onClick={handleFillRandomCells}/>
          <Button title='Проверить' onClick={checkOnClick}/>
      </div>
  );
}

export default App;
