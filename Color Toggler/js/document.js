let div = document.getElementById('exapmle1');

function toggleColor(){
    var letters = '0123456789ABCDEF';
    var DivnewColor = "#";
    for (var i = 0; i < 6; i++)  DivnewColor += letters[Math.floor(Math.random() * 16)];
    div.style.backgroundColor = DivnewColor.toString();
};

setInterval(toggleColor, 2000);
