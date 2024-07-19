// 7 tetris shapes (tetromino, check from wiki)
// I, O, T, J/L, S/Z
const Z = [
  [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
  ],
  [
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 0]
  ],
  [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 1]
  ],
  [
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0]
  ]
]
//                var col = 3;
//                var row = 0;
//                for (var r = 0; r < 3; r++) {
//                    for (var c = 0; c < 3; c++) {
//                        if (Z[0][r][c]) {
//                            drawBlock(row + r, col + c, 'red');
//                        }
//                    }
//                }

const O = [
  [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
  ]
];

const I = [
  [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
  ],
  [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
  ],
  [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
  ],
  [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
  ]
];

const J = [
  [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
  ],
  [
      [0, 1, 1],
      [0, 1, 0],
      [0, 1, 0]
  ],
  [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 1]
  ],
  [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0]
  ]
];

const L = [
  [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0]
  ],
  [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1]
  ],
  [
      [0, 0, 0],
      [1, 1, 1],
      [1, 0, 0]
  ],
  [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
  ]
];


const S = [
  [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
  ],
  [
      [0, 1, 0],
      [0, 1, 1],
      [0, 0, 1]
  ],
  [
      [0, 0, 0],
      [0, 1, 1],
      [1, 1, 0]
  ],
  [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0]
  ]
];

const T = [
  [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]
  ],
  [
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 0]
  ],
  [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0]
  ],
  [
      [0, 1, 0],
      [1, 1, 0],
      [0, 1, 0]
  ]
];