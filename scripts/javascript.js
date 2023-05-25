const titles = ["Hello", "Hola", "Bonjour","привіт", "Hallå", "Hallo", "こんにちは", "Aloha"];
const heading = document.getElementById("greeting");
let index = 1;

async function changeTitle() {
    const newTitle = titles[index % titles.length];
    index++;
    heading.classList.add("transition");
    await sleep(500);
    heading.textContent = newTitle ;
    heading.classList.remove('transition');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setInterval(changeTitle, 4000);



function openModal() {
    document.getElementById("pdfModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("pdfModal").style.display = "none";
  }

  function openModal2() {
    document.getElementById("pdfModal2").style.display = "block";
  }

  function closeModal2() {
    document.getElementById("pdfModal2").style.display = "none";
  }