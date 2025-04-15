// step 1. find the actors
var myH1 = document.getElementById('coursecode'); // Get the h1 element
var myH2 = document.getElementById('newacc'); // Get the new account button
// step 2. translate the action in terms on HTML/CSS
function changeColor() { // Declare function
  myH1.style.color = 'yellow'; 
  myH1.textContent = 'Hahahaha!'; 
  myH2.textContent = ''; 
} // End of function
// step 3. bind the event listener
myH1.addEventListener('click', changeColor, false); // Add event listener
// When 'myH1' is being 'clicked', execute 'changeColor'






function checkUsername() {                        // Declare function
  var username = el.value;  
  var a=0;                      // Store username in variable
  if (username.length < 5) {                      // If username < 5 characters
    elMsg.className = 'warning';                  // Change class on message
    elMsg.textContent = 'too short...';				// Update message
  } else {                                        // Otherwise
    elMsg.textContent = '';                       // Clear the message
  }
}

function tipUsername() {                          // Declare function
  elMsg.className = 'tip';                        // Change class for message
  elMsg.textContent = 'Username must be at least 5 characters'; // Add message
}

// In the document, get me the element by recongizing the id: username
var el = document.getElementById('username');     // Username input
var elMsg = document.getElementById('feedback');  // Element to hold message



// When the username input gains / loses focus call functions above:
el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
el.addEventListener('blur', checkUsername, false);// blur call checkUsername()