// add event listener to capture form data 
// override forms default behavior
// fetch data based on what the user types into that form
// display that data on the page

const init = () => {
    const inputField = document.getElementById('searchByID')
    const submitButton = document.getElementById('submitButton')
    const inputForm = document.querySelector('form')
    
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/movies/${inputField.value}`)
            .then(res => res.json())
            .then(data => {
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");
                
                title.innerText = data.title;
                summary.innerText = data.summary;
                console.log(`id: ${data.id} title: ${data.title}`)
            })
            
           
    })
    
    


    
    

    




}

document.addEventListener('DOMContentLoaded', init);

