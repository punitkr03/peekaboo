const yes = document.getElementById("yes");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const back = document.getElementById("back");
const no = document.getElementById("no");
const wrapper = document.querySelector(".wrapper");
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = no.getBoundingClientRect();
const decide = document.getElementById("decide-grp");

yes.addEventListener("click", () => {
  img1.style.display = "none";
  img2.style.display = "block";
  back.style.display = "block";
  decide.style.display = "none";
});

back.addEventListener("click", () => {
  window.location.reload();
});

no.addEventListener("mouseover", () => {
  const i =
    Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  no.style.left = i + "px";
  no.style.top = j + "px";
});
no.addEventListener("click", () => {
  const i =
    Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  no.style.left = i + "px";
  no.style.top = j + "px";
});
