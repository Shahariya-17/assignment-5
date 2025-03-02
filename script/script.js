
// document.getElementById('theme-btn').addEventListener('click',
//     function(event){
//         event.preventDefault();

//         function makeYellow(){
//             document.body.style.backgroundColor = 'yellow';
//         }
//     }
// )

const buttons = document.getElementsByClassName('card-btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        alert('Board updated successfully');
        const firstBtn = document.getElementById('first-btn').innerText;
        const convertedNumber = parseInt(firstBtn, 10); 
        const secondBtn = document.getElementById('second-btn').innerText;
        const convertedSecondNumber = parseInt(secondBtn);

        
        

        if (!isNaN(convertedSecondNumber <= 0 &&   convertedNumber)) {
            const newCompletedTask = convertedNumber + 1;
            document.getElementById('first-btn').innerText = newCompletedTask;
            const newTask = convertedSecondNumber -1;
            document.getElementById('second-btn').innerText = newTask; 

            
        }
    })
}

document.getElementById('discover-btn').addEventListener('click', function(){
    window.location.href = "./main.html"
})


