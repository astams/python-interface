const winston = require("winston");
const rpc = require('json-rpc2');
 
const client = rpc.Client.$create(59870, 'localhost');

const mzData = [
568.241,
603.553,
666.158,
682.259,
757.62,
761.134,
876.964,
892.867,
1046.523,
1047.52,
1048.541,
1233.616,
1296.713,
1297.698,
1298.708,
1347.743,
1348.772,
1349.75,
1350.779,
1363.738,
1364.747,
1365.757,
1366.741,
1385.716,
1386.707,
1619.749,
1620.736,
1635.777,
1636.741,
1759.9,
1760.811,
1782.784,
1830.373,
2094.048,
2303.011,
2394.803,
2408.52,
2449.797,
2466.135,
2480.665,
2488.138,
2504.292,
2526.562
];

const iData = [
3039.063,
2859.375,
3562.5,
2800.781,
2265.625,
2898.438,
2960.938,
2410.156,
42371.094,
27281.25,
10652.344,
5675.781,
31449.219,
24406.25,
10714.844,
57121.094,
51101.563,
28371.094,
9441.406,
56699.219,
51152.344,
28496.094,
8726.563,
7851.563,
6687.5,
6296.875,
7160.156,
4816.406,
5660.156,
31539.063,
37117.188,
3121.094,
13589.844,
1417.969,
2078.125,
3089.844,
1812.5,
1960.938,
78921.875,
1527.344,
10050.781,
4468.75,
2277.344
]

console.log(mzData.length, iData.length);

// Call add function on the server
client.call('monoIso', [mzData, iData], function(err, result) {
  if(err) {
      winston.error("error:", err);
  } else {
    for (i=0; i<mzData.length; i++) {
      winston.info(`[${i}]:${mzData[i]},${iData[i]}:${result[i]}`);
    }
  }
});

