var nums = process.argv.slice(2);
var answer = 0;

for(var key in nums){
answer+= Number(nums[key]);
};

console.log(answer);
