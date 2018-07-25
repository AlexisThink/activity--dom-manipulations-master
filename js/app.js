//--------------------------------------------------------
//TASK 1: Add the text 'List of Friends' to .title element  
//--------------------------------------------------------

var title = document.querySelector('.title');
title.textContent = "List Of Friends";



//--------------------------------------------------------
//TASK 2: Put this array of strings as <li> elements
//        onto the friends list 
//
//     BONUS: do it in reverse order.
//--------------------------------------------------------

var friendsList = ['Jimmy G.', 'Scotty M.', 'Patty L.', 'Kelly F.', 'Kitty S.']

var ulParent = document.querySelector('.friends-list');

friendsList.forEach(function(index){
    li = document.createElement('li');
    li.textContent = index;
    ulParent.appendChild(li);
})
//--------------------------------------------------------
//TASK 3: Make all of the text capitalized in the <li> elements with a 
//        class of 'urgent'
//     
//        BONUS: Capitalize AND make bold the elements with
//               a class of 'urgent' 
//--------------------------------------------------------
var lis = document.querySelectorAll('.task-list li');

lis.forEach(function(index){
    console.log(index);
    if(index.className ==="urgent"){
        index.textContent = index.textContent.toUpperCase();
    }
})
