const questions = [
    {
      question: "¿Como se llama el papá de Bart Simpson?",
      options: ["Homero", "Carlos", "Juan", "Humberto"],
      correctAnswer: "Homero"
    },
    {
      question: "¿Como se llama la mamá de Bart Simpson?",
      options: ["Marge", "Alice", "Lety", "Manuela"],
      correctAnswer: "Marge"
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";
  
    questions[currentQuestion].options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = checkAnswer;
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = questions[currentQuestion].correctAnswer;
  
    if (selectedOption === correctAnswer) {
      score++;
    }
  
    document.getElementById("nextButton").style.display = "block";
    document.getElementById("options").style.pointerEvents = "none";
  }
  
  function nextQuestion() {
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("options").style.pointerEvents = "auto";
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    const container = document.querySelector(".container");
    container.innerHTML = `
      <h1>Resultado</h1>
      <p>Has respondido correctamente ${score} de ${questions.length} preguntas.</p>
      <button onclick="location.reload()">Jugar de nuevo</button>
    `;
  }
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";
  
    const allOptions = questions[currentQuestion].options;
    const numOptionsToShow = Math.ceil(allOptions.length / 2); // Redondear hacia arriba para garantizar que siempre se muestren la mitad
  
    // Hacer una copia de las opciones para no modificar el array original
    const optionsToShow = allOptions.slice();
  
    // Eliminar aleatoriamente la mitad de las opciones hasta que solo queden numOptionsToShow
    while (optionsToShow.length > numOptionsToShow) {
      const indexToRemove = Math.floor(Math.random() * optionsToShow.length);
      optionsToShow.splice(indexToRemove, 1);
    }
  
    optionsToShow.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = checkAnswer;
      optionsElement.appendChild(button);
    });
  }