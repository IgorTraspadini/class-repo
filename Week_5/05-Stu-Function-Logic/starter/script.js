// Write Your Code Below

function check_equal(val_1, val_2) {
  if (val_1 === val_2) {
    return console.log(`(${typeof(val_1)}: ${val_1} - ${typeof(val_2)}: ${val_2}): equal in both value and type`);
  }
  else if (val_1 == val_2) {
    return console.log(`(${typeof(val_1)}: ${val_1} - ${typeof(val_2)}: ${val_2}): equal in value not in type`);
  }
  else {
    return console.log(`(${typeof(val_1)}: ${val_1} - ${typeof(val_2)}: ${val_2}): not equal in any way.`);
  }
}

console.log(check_equal(1, 1));
console.log(check_equal("1", 1));
console.log(check_equal(1, 2));

var check_ = function check_array(var_1) {
  for (let i in var_1) {
    if (i <= 10) {
    console.log(`${i}: is less than 10`);
    }
    else {
    console.log(`${i}: isn't less than or equal to 10`);      
    }
  }
}

console.log(check_([1,2,3,4,5,6,7,8,9,10,11,12,13]));