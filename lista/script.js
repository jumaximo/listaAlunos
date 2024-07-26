const studants = [
    {
      name: "Marcia",
      testOne: 9,
      testTwo: 7.5,
    },
    {
        name: "Fernando",
        testOne: 5,
        testTwo: 6,
    },
    {
        name: "Bruna",
        testOne: 10,
        testTwo: 4,
    },
  ]
  
  function average(testOne, testTwo) {
    return ((testOne + testTwo) / 2)}

  
  function printstudantsaverage(studant) {
    return `
    A média do(a) aluno(a) ${studant.name} é de: 
      ${average(studant.testOne, studant.testTwo)}
    `
    
  }
  
  for (let studant of studants) {
    let averageMessage = printstudantsaverage(studant)
    alert(averageMessage)
  }