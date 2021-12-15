function addUser() {
  username1= document.getElementById("player1_name").value;
  username2= document.getElementById("player2_name").value;
  localStorage.setItem("player1", username1);
  localStorage.setItem("player2", username2);
  window.location= "game_page.html";
}