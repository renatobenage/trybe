const musicians = [
  {name: 'Renato', instrument: 'bass', official: true, inTheBand: ''},
  {name: 'João', instrument: 'drum', official: false, inTheBand: ''},
  {name: 'Evandro', instrument: 'piano', official: true, inTheBand: ''},
];

const includeBand = xablau => {
  if (xablau.official) {
    xablau.inTheBand = 'Toca na Band'
  } else {
    xablau.inTheBand = 'Ainda não'
  }
}

musicians.forEach(includeBand)

console.log(musicians)














  
  
  
  
  
  
  
  
  
  
  
  
  
  // const students = [
  //   { name: 'Maria', grade: 70, approved: '' },
  //   { name: 'José', grade: 56, approved: '' },
  //   { name: 'Roberto', grade: 90, approved: '' },
  //   { name: 'Ana', grade: 81, approved: '' }
  // ];

  // console.log('string aqui!', students)

  // function verifyGrade (xablau){
  //   if (xablau.grade >= 60) {
  //     xablau.approved = 'Aprovado';
  //   } else {
  //     xablau.approved = 'Recuperação';
  //   }
  // }

  // let xena;
  // for (xena = 0; xena < students.length; xena += 1) {
  //   verifyGrade(students[xena]);
  // }

  // console.log(students);
  // => [
  //     { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //     { name: 'José', grade: 56, approved: 'Recuperação' },
  //     { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //     { name: 'Ana', grade: 81, approved: 'Aprovado' }
  //   ]
