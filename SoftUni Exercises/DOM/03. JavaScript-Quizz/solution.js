function solve() {
  const firstBTN = document.querySelectorAll(".answer-wrap")[0];
  const secondBTN = document.querySelectorAll(".answer-wrap")[1];

  let correctAnswer = 0;

  const sectionOne = document.querySelectorAll("section")[0];
  const sectionTwo = document.querySelectorAll("section")[1];
  const sectionThree = document.querySelectorAll("section")[2];

  firstBTN.addEventListener('click', (x) => {
    correctAnswer++;
    sectionOne.style.display = 'none';
    sectionTwo.style.display = 'block';
  });

  secondBTN.addEventListener('click', (x) => {
    sectionOne.style.display = 'none';
    sectionTwo.style.display = 'block';
  });

  const thirdBTN = document.querySelectorAll(".answer-wrap")[2];
  const fourthBTN = document.querySelectorAll(".answer-wrap")[3];

  thirdBTN.addEventListener('click', (x) => {
    sectionTwo.style.display = 'none'
    sectionThree.style.display = 'block';
  });

  fourthBTN.addEventListener('click', (x) => {
    correctAnswer++;
    sectionTwo.style.display = 'none'
    sectionThree.style.display = 'block';
  });

  const fifthBTN = document.querySelectorAll(".answer-wrap")[4];
  const sixthBTN = document.querySelectorAll(".answer-wrap")[5];

  const result = document.querySelector(".results-inner h1");
  const results = document.getElementById('results');

  fifthBTN.addEventListener('click', (x) => {
    correctAnswer++;
    sectionThree.style.display = 'none';

    if (correctAnswer === 3) {
      results.style.display = 'block';

      result.textContent = 'You are recognized as top JavaScript fan!';
    } else {
      results.style.display = 'block';

      result.textContent = `You have ${correctAnswer} right answers`;
    };
  });

  sixthBTN.addEventListener('click', (x) => {
    sectionThree.style.display = 'none';

    results.style.display = 'block';

    result.textContent = `You have ${correctAnswer} right answers`;
  });
}
