let grades = [
  {
    subject: "Matemáticas",
    grade: 9.5,
  },
  {
    subject: "Física",
    grade: 9.2,
  },
];

export const saveGrade = (grade) => {
  grades.push(grade);
  //console.log("Arreglos", grades);
};

export const getGrades = () => {
  return grades;
};

export const updateGrade = (nota) => {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].subject === nota.subject) {
      grades[i] = { ...grades[i], grade: nota.grade };
      return;
    }
  }
};

export const existeMateria = (subject) => {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].subject == subject) {
      return true;
    }
  }
  return false;
};