// set initial count
let count = 0;

// Select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');


btns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")){
      count--;
    }
    else if(styles.contains("increase")){
      count++;
    }
    else{
      count = 0;
    }
    if(count < 0){
      value.style.color = "tomato";
    }
    else if(count > 0){
      value.style.color = "green";
    }
    else{
      value.style.color = "black";
    }
    value.textContent = count;

  // console.log(btn)
  // console.log(e.currentTarget.classList);
  })
})
