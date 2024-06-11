// prompt("ta 1-7 hoorond too songoj oruulan uu !!!");

// let weeknumber = Number(prompt("ta 1-7 hoorond too songoj oruulan uu !!!"));
// let garigiinNer;

// if (weeknumber === 1) {
//   console.log("davaa");
// } else if (weeknumber === 2) {
//   garigiinNer = "myagmar";
// } else if (weeknumber === 3) {
//   garigiinNer = "lhkagvaa";
// } else if (weeknumber === 4) {
//   garigiinNer = "purev";
// } else if (weeknumber === 5) {
//   garigiinNer = "baasan";
// } else if (weeknumber === 6) {
//   garigiinNer = "baymba";
// } else if (weeknumber === 7) {
//   garigiinNer = "nyam";
// } else {
//   garigiinNer = "oldsonguie";
// }

// console.log("tanii oruulsan too", weeknumber);
// console.log("tanii oruulsan toond tohiroh ner", garigiinNer);

// let age = 20;
// let gender = "er";

// if (age >= 18 && gender === "er") {
//   console.log("ta nasand hursen eregtei bna");
// } else {
//   console.log("ta nasand hureegui esvel emegtei bn");
// }

// if (age >= 18 || gender === "er") {
//   console.log("ta nasand hursen esvel eregtei bna");
// } else {
//   console.log("ta nasand hureegui esvel emegtei bn");
// }

// switch (weeknumber) {
//   case 1: {
//     garigiinNer = "davaa";
//     break;
//   }
//   case 2: {
//     garigiinNer = "myagmar";
//     break;
//   }
//   case 3: {
//     garigiinNer = "lhkagva";
//     break;
//   }
//   case 4: {
//     garigiinNer = "purev";
//     break;
//   }
//   case 5: {
//     garigiinNer = "baasan";
//     break;
//   }
//   default: {
//     garigiinNer = "oldsonguie";
//   }
// }
// console.log("tanii oruulsan too", weeknumber);
// console.log("tanii oruulsan toond tohiroh ner", garigiinNer);

// let myAge = Number(prompt("ta nasaa oruulna uu"));

// // if (myAge <= 25) {
// //   console.log("tanii nas 25 doosh bn");
// // }
// // if (myAge >= 25) {
// //   console.log("tanii nas 25 deesh bn");
// }
// bodlogo 2
let n = 9;
if (n % 2 === 0) {
  console.log("tegshtoo", "event-number");
} else if (n % 2 === 1) {
  console.log("sondgoi too", "sondgoi");
}
// bodlogo 3
let d1 = 149,
  d2 = 130,
  d3 = 45;
if (d1 < d2 && d1 < d3) {
  console.log("hangiin bga too", d1);
} else if (d2 < d1 && d2 < d3) {
  console.log("hamgiin bga too", d2);
} else if (d3 < d1 && d3 < d2) {
  console.log("hamgiin bga too", d3);
}
// bodlogo 4
let h1 = 112,
  h2 = 30,
  h3 = 45;
if (h1 > h2 && h1 > h3) {
  console.log("hamgiin ih too ", h1);
} else if (h2 > h1 && h2 > h3) {
  console.log("hamgiin ih too ", h2);
} else if (h3 > h1 && h3 > h2) {
  console.log("hamgiin ih too", h3);
}
// bodlogo 5
let month = 6;
if (month === 1) {
  season = "winter";
} else if (month === 2) {
  season = "spring";
} else if (month === 3) {
  season = " spring";
} else if (month === 4) {
  season = "spring";
} else if (month === 5) {
  season = "summer";
} else if (month === 6) {
  season = "summer";
} else if (month === 7) {
  season = "summer";
} else if (month === 8) {
  season = "autumn";
} else if (month === 9) {
  season = "autumn";
} else if (month === 10) {
  season = "autumn";
} else if (month === 11) {
  season = "winter";
} else if (month === 12) {
  season = "winter";
}
console.log("uliral ", season);
// bodlogo 6
let r1 = 85,
  r2 = 75,
  r3 = 96,
  r4 = 69;

let sum = 0;

if (r1 >= 80) {
  sum = sum + r1;
}
if (r3 > 80) {
  sum = sum + r3;
}
console.log("sum", sum);
// bodlogo 7
let w1 = 3,
  w2 = 7,
  w3 = 2,
  w4 = 4;
let num = 1;
if (w1 <= 5) {
  num = num * w1;
}

if (w2 <= 5) {
  num = num * w2;
}
if (w3 <= 5) {
  num = num * w3;
}
if (w4 <= 5) {
  num = num * w4;
}
console.log("num", num);
// bodlogo 8
let name1 = "bat",
  name2 = "dorj",
  unelgee1 = "",
  unelgee2 = "";

let e1 = 67,
  e2 = 59;
if (e1 < 60) {
  unelgee1 = "mash muu";
} else if (60 < e1 < 70) {
  unelgee1 = "hangalttai";
} else if (70 < e1 < 80) {
  unelgee1 = "dund";
} else if (80 < e1 < 90) {
  unelgee1 = "B";
} else if (90 < e1 < 100) {
  unelgee1 = "A";
}
if (e2 < 60) {
  unelgee2 = "mash muu";
} else if (60 < e2 < 70) {
  unelgee2 = "hangalttai";
} else if (70 < e2 < 80) {
  unelgee2 = "dund";
} else if (80 < e2 < 90) {
  unelgee2 = "B";
} else if (90 < e2 < 100) {
  unelgee2 = "A";
}

console.log(name1, e1, unelgee1, name2, e2, unelgee2);
// bodlogo 9
let f1 = 120,
  f2 = 33,
  f3 = 10,
  f4 = 12;
if (f1 < f2 && f1 < f3 && f1 < f4) {
  console.log("hamgiin bga too", f1);
} else if (f2 < f1 && f2 < f3 && f2 < f4) {
  console.log("hmgiin bga too", f2);
} else if (f3 < f1 && f3 < f2 && f3 < f4) {
  console.log("hmgiin bga too", f3);
} else if (f4 < f1 && f4 < f3 && f2 < f4) {
  console.log("hmgiin bga too", f4);
}
// bodlogo 10
let x1 = 60,
  x2 = 108,
  x3 = 89;
let z1 = 88,
  z2 = 91,
  z3 = 1100;
let avg1 = (x1 + x2 + x3) / 3;
let avg2 = (z1 + z2 + z3) / 3;
if (avg1 >= 100) {
  if (avg1 > avg2) {
    console.log("yalagch team-1");
  }
} else console.log("team-1 100-baga onootoi");
if (avg2 >= 100) {
  if (avg2 > avg1) {
    console.log("yalagch team-2");
  }
} else console.log("team-2 100-baga onootoi");
// bodlogo 11
let age = 9,
  height = 140;
if (age >= 10) {
  if (height >= 140) {
    console.log("hasAdult");
  }
} else console.log("not allowed to ride");
// bodlogo 12
let y1 = 7,
  y2 = 22,
  y3 = 13,
  y4 = 30,
  dan = 0;

if (y1 % 11 !== 0) {
  dan = dan + y1;
}
if (y2 % 11 !== 0) {
  dan = dan + y2;
}
if (y3 % 11 !== 0) {
  dan = dan + y3;
}
if (y4 % 11 !== 0) {
  dan = dan + y4;
}
console.log("11/tooni niilber", dan);

let u1 = 39 % 5;
console.log(u1);
