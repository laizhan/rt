import * as React from 'react';
import './hello.css'

export interface IProps {
    name: string;
    enthusiasmLevel?: number;
}

function getExclamationMards(numChars: number) {
    return Array(numChars + 1).join('!');
}

function Hello({ name, enthusiasmLevel = 1 }: IProps) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }
    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMards(enthusiasmLevel)}
            </div>
        </div>
    )
}
export default Hello;