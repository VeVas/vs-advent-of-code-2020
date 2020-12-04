import React from 'react';
import {data} from '../data/day1_data';

let answer_part_one = 0;
let factor_one_part_one = 0;
let factor_two_part_one = 0;
let answer_part_two = 0;
let factor_one_part_two = 0;
let factor_two_part_two = 0;
let factor_three_part_two = 0;

//Part one
for (let index = 0; index < data.length; index++) {
    const element = data[index];
    for (let index2 = 0; index2 < data.length; index2++) {
        if ((element+data[index2]) === 2020) {
            answer_part_one =  element*data[index2];
            factor_one_part_one = element;
            factor_two_part_one = data[index2];
            console.log('The answer to the first part is: '+element+' times '+data[index2]+' is '+answer_part_one);
            break;
        }
        if(answer_part_one !== 0) { break; }
    }
    if(answer_part_one !== 0) { break; }
}

//Part two
for (let index = 0; index < data.length; index++) {
    const element = data[index];
    for (let index2 = 0; index2 < data.length; index2++) {
        const element2 = data[index2];
        for (let index3 = 0; index3 < data.length; index3++) {
            if ((element+element2+data[index3]) === 2020) {
                answer_part_two =  element*element2*data[index3];
                factor_one_part_two = element;
                factor_two_part_two = element2;
                factor_three_part_two = data[index3];
                console.log('The answer to the second part is: '+element+' times '+element2+' times '+data[index3]+' is '+answer_part_two);
                break;
            }
            if(answer_part_two !== 0) { break; }
        }
        if(answer_part_two !== 0) { break; }
    }
    if(answer_part_two !== 0) { break; }
}


const First = () => {
    return (
       <div>
            <h1>1. December</h1>
            <h3 style={{marginBottom:  '0'}}>Part one</h3>
            <p>The answer is: <strong>{factor_one_part_one} </strong> times <strong>{factor_two_part_one}</strong> is <strong>{answer_part_one}</strong></p>
            <h3>Part two</h3>
            <p>The answer is: <strong>{factor_one_part_two} </strong> times <strong>{factor_two_part_two}</strong> times <strong>{factor_three_part_two}</strong> is <strong>{answer_part_two}</strong></p>
       </div>
    );
}
 
export default First;