import React from "react";

interface IError{
    rowIndex: number,
    columnIndex: number
}

interface IHint{
    row: number,
    column: number,
}

interface ITable {
    matrix: number[][];
    onChange: (event: React.ChangeEvent<HTMLInputElement>, rowIndex: number, columnIndex: number) => void
    error: IError[]
    checked: boolean
    won: boolean
    hint: IHint
}

export default function Table ({matrix, onChange, error, checked, won, hint}:ITable) {

    let nc = "";
    if(won) nc = "YellowCell"

    let rows = new Set(error.map((err) => err.rowIndex));
    let columns = new Set(error.map((err) => err.columnIndex));

    console.log(rows)
    console.log(columns)

    return (
        <table>
            <tbody>
            {matrix.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((value, columnIndex) => {

                        if(checked) {
                            return(
                                <td key={Math.random()}>{
                                    <input className={rows.has(rowIndex) || columns.has(columnIndex)  ? "RedCell" : nc}
                                           onChange={(event => onChange(event, rowIndex, columnIndex))} pattern={"[1-9]"}
                                           value={value > 0 ? value : ""}/>
                                }
                                </td>)
                        }
                        return(
                            <td key={Math.random()}>{
                                <input className={(hint.row === rowIndex && hint.column === columnIndex) ? "GreenCell" : nc} pattern={"[1-9]"}
                                       onChange={(event => onChange(event, rowIndex, columnIndex))}
                                       value={value > 0 ? value : ""}/>
                            }
                            </td>)
                    })}
                </tr>
            ))}
            </tbody>
        </table>
    );
};