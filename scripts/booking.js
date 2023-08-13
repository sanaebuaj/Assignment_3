/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var full_day= document.getElementById('full');
var half_day= document.getElementById('half');
var dayselected = 35;
var total_days= 0;
var mon = document.getElementById('monday');
var tue = document.getElementById('tuesday');
var wed = document.getElementById('wednesday');
var thu = document.getElementById('thursday');
var fri = document.getElementById('friday');
var r = document.getElementById('clear-button');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!       
      

function add_color(){
  if(this.classList.contains('blue-hover') && !this.classList.contains('clicked')){
      this.classList.add("clicked");
      total_days++;
       }
      recalculated();
}

mon.addEventListener("click",add_color);
tue.addEventListener("click",add_color);
wed.addEventListener("click",add_color);
thu.addEventListener("click",add_color);
fri.addEventListener("click",add_color);
      

function recalculated() {
let total = document.getElementById("calculated-cost");
total.innerHTML = total_days * dayselected; 
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function remove_color(){    
  mon.classList.remove("clicked");
  tue.classList.remove("clicked");
  wed.classList.remove("clicked");
  thu.classList.remove("clicked");
  fri.classList.remove("clicked");          
  //dayselected = 0;
  total_days = 0;
  recalculated();
} 
r.addEventListener("click",remove_color);
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function change_halfday() {
  dayselected = 20;
  half_day.classList.add('clicked');
  full_day.classList.remove('clicked');         
  recalculated();                  
}
half_day.addEventListener("click",change_halfday);




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function change_fullday() {
  dayselected = 35;
  half_day.classList.remove('clicked');
  full_day.classList.add('clicked');         
  recalculated();                  
}
full_day.addEventListener("click",change_fullday);




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


