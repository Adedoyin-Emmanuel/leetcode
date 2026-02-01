// Last updated: 2/1/2026, 8:42:38 PM
function nextGreatestLetter(letters: string[], target: string): string {  

    //brute-force method, I will use binary search later 

    let result = letters[0];

    

    

    
    for(let i = 0; i < letters.length; i++){
        if(letters[i] > target){
            result = letters[i]
            break;
        }
    }



    return result;

};