# Day 2


### Answer

**Part one**  
The answer is: 620 passwords


**Part two**  
The answer is: 727 passwords

### Solution  
        let passed_passwords_part_one = 0;
        let passed_passwords_part_two = 0;

        // Part One
        for (let index = 0; index < data.length; index++) {

            const element = data[index];
            let element_split = element.split(' ');

            //policy
            let min_max = element_split[0].split('-'),
                min = min_max[0],
                max = min_max[1],
                letter = element_split[1].charAt(0);

            //password
            let password = element_split[2];

            //check it!
            let count_char = password.split(letter).length  - 1;
            if(count_char >= min && count_char <= max) {
                passed_passwords_part_one++;
            }

        }


        // Part Two
        for (let index = 0; index < data.length; index++) {

            const element = data[index];
            let element_split = element.split(' ');

            //policy
            let positions = element_split[0].split('-');
            let first_position = parseInt(positions[0]) - 1; // no Index Zero
            let second_position = parseInt(positions[1]) - 1; // no Index Zero
            let letter = element_split[1].charAt(0);

            //password
            let password = element_split[2];
            
            //check it!
            if( (password.charAt(first_position) === letter && password.charAt(second_position) !== letter) || (password.charAt(first_position) !== letter && password.charAt(second_position) === letter) ) {
                passed_passwords_part_two++;
            }

        }
