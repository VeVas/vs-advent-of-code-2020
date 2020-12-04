# Day 1


### Answer

**Part one**  
The answer is: 631 times 1389 is 876459


**Part two**  
The answer is: 708 times 140 times 1172 is 116168640

### Solution  
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
                        break;
                    }
                    if(answer_part_two !== 0) { break; }
                }
                if(answer_part_two !== 0) { break; }
            }
            if(answer_part_two !== 0) { break; }
        }

