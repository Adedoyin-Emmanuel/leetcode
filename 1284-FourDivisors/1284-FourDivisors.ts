// Last updated: 1/8/2026, 12:13:57 AM
function sumFourDivisors(nums: number[]): number {
    /**
        This one is quite straightforward but still a bit technical 

        so in my understanding, we have an array of numbers,

        and in that arary of numbers, we should retunr the sum of divisors of 

        the integers in that array that have exactly four divisors, if there

        isn't such in the array, we should return 0

        So the first hint is saying I should find the divisors of each element 

        in the array

        The second hint is saying I only need to loop to the square root of a 

        number to find its divisors.


        Things I had to look up:

        As a pure  nerd, first things first, let me look up the meaning of divisor

        So a divisor is a number that divides another number to produce a result

        So now the next question is how do I get the divisors for a particular

        number. And hint 2 is telling me I only need to loop to the square root 

        of a number to find its divisors.

        So I think this sould be relatively simple, the hint has helped me

        discover a trick lol. So this is what we've to do.


        First, we declare a set that holds the divisors of the currrent iteration
        
        value.

        Now how do we find the divisors of the current iteration value? The hint
        
        already told us we have to loop to the square root of that number and then

        check if the number is divisible by the index of the loop and then store

        the result and the divisor in the set. We can then plug in our submission 

        logic to see which of the numbers have exactly 4 divisors and then just 

        return the sum of the divisors.
     */

     
    let sum = 0;

     for(let i = 0; i < nums.length; i ++){
        const currentNumber = nums[i];
        const divisorsSet = new Set<number>();
        const squareRoot = Math.floor(Math.sqrt(nums[i]));

        for(let j = 1; j <= squareRoot; j++){

          
            /**
                Check if the curent number can be divided by the current index

                If set, store the divisor and the quotient too.
             */
            if(currentNumber % j == 0){

               

                /**
                    Let's take into consideration perfect squares. 
                    My Set handles this but let's just do it with the logic
                 */

                 if(j * j === currentNumber){
                    divisorsSet.add(j);
                 }else{
                    const quotient = currentNumber  / j;
                    divisorsSet.add(quotient);
                    divisorsSet.add(j);
                 }
                
                if(divisorsSet.size > 4) break;
            }

        }

        /**
            We can then check if the divisorSet size if 4 and then return the
            sum
         */
        if(divisorsSet.size === 4){
            for(const n of divisorsSet){
                sum += n;
            }
        }
 
     }

     return sum;
};