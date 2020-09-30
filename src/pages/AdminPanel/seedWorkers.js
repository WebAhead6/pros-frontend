const avatars = [
  "https://www.w3schools.com/howto/img_avatar.png",
  "https://www.w3schools.com/w3images/avatar2.png",
  "https://www.w3schools.com/w3images/avatar6.png",
  "https://www.w3schools.com/howto/img_avatar2.png",
  "https://www.gs-muhr-am-see.de/pics/img_avatar5.png",
];
function setAvatars(array) {
  return array.map((e) => {
    e.workers.forEach((worker) => {
      worker.image = avatars[Math.floor(Math.random() * avatars.length)];
    });
    return e;
  });
}

const seeders = [
  {
    categoryName: "engineers",
    id: "engineers",
    workers: [
      {
        name: "Layan",
        image: "https://www.w3schools.com/howto/img_avatar2.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "Tamara",
        image: "https://www.gs-muhr-am-see.de/pics/img_avatar5.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "yas",
        image: "https://www.gs-muhr-am-see.de/pics/img_avatar5.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "einas",
        image: "https://www.w3schools.com/w3images/avatar6.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "bader",
        image: "https://www.w3schools.com/w3images/avatar2.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "reem",
        image: "https://www.w3schools.com/w3images/avatar6.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "nour",
        image: "https://www.w3schools.com/w3images/avatar6.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "setph",
        image: "https://www.w3schools.com/w3images/avatar6.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "BaderClone",
        image: "https://www.w3schools.com/howto/img_avatar2.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
    ],
  },
  {
    categoryName: "electritions",
    id: "electritions",
    workers: [
      {
        name: "rani1",
        image: "https://www.w3schools.com/w3images/avatar6.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "batekh",
        image: "https://www.w3schools.com/howto/img_avatar2.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "majed1",
        image: "https://www.gs-muhr-am-see.de/pics/img_avatar5.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "hosam1",
        image: "https://www.w3schools.com/howto/img_avatar.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "bader",
        image: "https://www.w3schools.com/w3images/avatar6.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "firas",
        image: "https://www.w3schools.com/w3images/avatar2.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "emad",
        image: "https://www.w3schools.com/howto/img_avatar2.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "hosam",
        image: "https://www.w3schools.com/howto/img_avatar.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "emad56",
        image: "https://www.gs-muhr-am-see.de/pics/img_avatar5.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "rani",
        image: "https://www.w3schools.com/w3images/avatar2.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "batekh345",
        image: "https://www.gs-muhr-am-see.de/pics/img_avatar5.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "majed427",
        image: "https://www.w3schools.com/howto/img_avatar2.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "emad25780",
        image: "https://www.w3schools.com/howto/img_avatar2.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "emad3897",
        image: "https://www.gs-muhr-am-see.de/pics/img_avatar5.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
    ],
  },
  {
    categoryName: "plumbers",
    id: "plumbers",
    workers: [
      {
        name: "rani1",
        image: "https://www.w3schools.com/w3images/avatar6.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "batekh",
        image: "https://www.w3schools.com/howto/img_avatar2.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "majed1",
        image: "https://www.w3schools.com/w3images/avatar2.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "hosam1",
        image: "https://www.gs-muhr-am-see.de/pics/img_avatar5.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "bader",
        image: "https://www.w3schools.com/howto/img_avatar.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "firas",
        image: "https://www.w3schools.com/w3images/avatar6.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "emad",
        image: "https://www.w3schools.com/howto/img_avatar.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "hosam",
        image: "https://www.w3schools.com/w3images/avatar2.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "emad56",
        image: "https://www.w3schools.com/howto/img_avatar2.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "rani",
        image: "https://www.w3schools.com/w3images/avatar2.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "batekh345",
        image: "https://www.gs-muhr-am-see.de/pics/img_avatar5.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "majed427",
        image: "https://www.w3schools.com/w3images/avatar6.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "emad25780",
        image: "https://www.w3schools.com/howto/img_avatar.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
      {
        name: "emad3897",
        image: "https://www.w3schools.com/w3images/avatar6.png",
        reviews: [
          "10 Years of Electrioncy",
          "Head of the nationanl AC fixers",
          "low prices",
        ],
      },
    ],
  },
];

export default seeders;

// const seedWorkers = [
//   {
//     categoryName: "engineers",
//     id: "engineers",
//     workers: [
//       {
//         name: "rani1",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       ,
//       {
//         name: "hosam",
//         image: "https://www.w3schools.com/w3images/avatar2.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "emad56",
//         image: "https://www.w3schools.com/w3images/avatar6.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "rani",
//         image: "https://www.w3schools.com/howto/img_avatar2.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "batekh345",
//         image: "https://www.gs-muhr-am-see.de/pics/img_avatar5.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "majed427",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "emad25780",
//         image:
//           "https://images.unsplash.com/photo-1553544923-37efbe6ff816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "emad3897",
//         image:
//           "https://images.unsplash.com/photo-1553544923-37efbe6ff816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//     ],
//   },
//   {
//     categoryName: "electritions",
//     id: "electritions",
//     workers: [
//       {
//         name: "rani1",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "batekh",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "majed1",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "hosam1",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "bader",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "firas",
//         image:
//           "https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "emad",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "hosam",
//         image:
//           "https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",

//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "emad56",
//         image:
//           "https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "rani",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "batekh345",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "majed427",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "emad25780",
//         image:
//           "https://images.unsplash.com/photo-1553544923-37efbe6ff816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "emad3897",
//         image:
//           "https://images.unsplash.com/photo-1553544923-37efbe6ff816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//     ],
//   },
//   {
//     categoryName: "plumbers",
//     id: "plumbers",
//     workers: [
//       {
//         name: "rani1",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "batekh",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "majed1",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "hosam1",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "bader",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "firas",
//         image:
//           "https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "emad",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "hosam",
//         image:
//           "https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",

//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "emad56",
//         image:
//           "https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "rani",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "batekh345",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "majed427",
//         image: "https://www.w3schools.com/howto/img_avatar.png",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "emad25780",
//         image:
//           "https://images.unsplash.com/photo-1553544923-37efbe6ff816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//       {
//         name: "emad3897",
//         image:
//           "https://images.unsplash.com/photo-1553544923-37efbe6ff816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
//         reviews: [
//           "10 Years of Electrioncy",
//           "Head of the nationanl AC fixers",
//           "low prices",
//         ],
//       },
//     ],
//   },
// ];

// let randomizedSeedWorkers = setAvatars(seedWorkers);
