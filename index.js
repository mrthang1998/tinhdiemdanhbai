let point_player_1 = 0;
let point_player_2 = 0;
let point_player_3 = 0;
let point_player_4 = 0;
let point_player_1_old = 0;
let point_player_2_old = 0;
let point_player_3_old = 0;
let point_player_4_old = 0;
document.getElementById("calculator").addEventListener("click", myFunction);

function myFunction() {
  point_player_1_old = point_player_1;
  point_player_2_old = point_player_2;
  point_player_3_old = point_player_3;
  point_player_4_old = point_player_4;

  point_player_1 += Number(document.querySelector("input[name=point_1]").value);
  point_player_2 += Number(document.querySelector("input[name=point_2]").value);
  point_player_3 += Number(document.querySelector("input[name=point_3]").value);
  point_player_4 += Number(document.querySelector("input[name=point_4]").value);

  document.querySelector("input[name=point_player_1]").value = point_player_1;
  document.querySelector("input[name=point_player_2]").value = point_player_2;
  document.querySelector("input[name=point_player_3]").value = point_player_3;
  document.querySelector("input[name=point_player_4]").value = point_player_4;

  document.querySelector("input[name=point_1]").value = "";
  document.querySelector("input[name=point_2]").value = "";
  document.querySelector("input[name=point_3]").value = "";
  document.querySelector("input[name=point_4]").value = "";
}

document.getElementById("back").addEventListener("click", backToPrev);

function backToPrev() {
  document.querySelector("input[name=point_player_1]").value =
    point_player_1_old;
  document.querySelector("input[name=point_player_2]").value =
    point_player_2_old;
  document.querySelector("input[name=point_player_3]").value =
    point_player_3_old;
  document.querySelector("input[name=point_player_4]").value =
    point_player_4_old;
  // swap value point now and point old when you back to prev
  [point_player_1, point_player_1_old] = [point_player_1_old, point_player_1];
  [point_player_2, point_player_2_old] = [point_player_2_old, point_player_2];
  [point_player_3, point_player_3_old] = [point_player_3_old, point_player_3];
  [point_player_4, point_player_4_old] = [point_player_4_old, point_player_4];
  console.log(point_player_1, point_player_2, point_player_3, point_player_4);
  console.log(
    point_player_1_old,
    point_player_2_old,
    point_player_3_old,
    point_player_4_old
  );
}

document.getElementById("luckyNumber").addEventListener("click", luckyNumber);

function luckyNumber() {
  if (
    document.getElementsByClassName("lucky-number")[0].style.display === "block"
  ) {
    document.getElementsByClassName("lucky-number")[0].style.display = "none";
  } else {
    document.getElementsByClassName("lucky-number")[0].style.display = "block";
  }
}

const changeName = (e) => {
  document.getElementById("playerList").options[0].text = e.value;
};
