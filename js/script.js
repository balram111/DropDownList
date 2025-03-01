document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.boxbottomDetails');
    const elements1 = document.querySelectorAll('.boxbottomDetails1');
    const elements2 = document.querySelectorAll('.boxbottomDetails2');
    const elements3 = document.querySelectorAll('.boxbottomDetails3');
    
    // Initially hide all elements
    function hideElements(elements) {
        elements.forEach(element => {
            element.style.display = 'none';
        });
    }

    // Initially hide all elements
    hideElements(elements2);
    hideElements(elements3);

    
// Function to assign value to elements with a specific class
function assignValueToClass(className, value) {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(element => {
        element.textContent = value;
    });
}

//sample code
//assignValueToClass('finalprice', '10');
    


document.getElementById('option1').addEventListener('click', function() {
    hideElements(elements);
    elements1.forEach(element => {
        element.style.display = 'block';
    });
    assignValueToClass('finalprice', '10');
});

document.getElementById('option2').addEventListener('click', function() {
    hideElements(elements);
    elements2.forEach(element => {
        element.style.display = 'block';
    });
    assignValueToClass('finalprice', '18');
});
document.getElementById('option3').addEventListener('click', function() {
    hideElements(elements);
    elements3.forEach(element => {
        element.style.display = 'block';
    });
    assignValueToClass('finalprice', '24');
    

});


// Onload check radio button "ID=option1" and trigger its click event
window.onload = function() {
    const option1 = document.getElementById('option1');
    option1.checked = true;
    option1.click();
};

document.querySelectorAll('.box1Main').forEach(element => {
    element.addEventListener('click', function() {
        const option1 = document.getElementById('option1');
        option1.checked = true;
        option1.click();
    });
});

document.querySelectorAll('.box2Main').forEach(element => {
    element.addEventListener('click', function() {
        const option2 = document.getElementById('option2');
        option2.checked = true;
        option2.click();
    });
});

document.querySelectorAll('.box3Main').forEach(element => {
    element.addEventListener('click', function() {
        const option3 = document.getElementById('option3');
        option3.checked = true;
        option3.click();
    });
});







});

