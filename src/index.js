const init = () => {

    const form = document.querySelector('form') // selected the form
    form.addEventListener('submit', (event) =>{ // added event listener to the form
        event.preventDefault() // preventing the page from refresing
        const formInput = document.querySelector('#searchByID') // selected the input so that we can input the ID number
        fetch(`http://localhost:3000/movies/${formInput.value}`) // fetched the url
        .then(resp => resp.json()) // to get a json respond
        .then(data => {
            // console.log(data);
            const title = document.querySelector('#movieDetails h4') // selected the section h4
            const summary = document.querySelector('#movieDetails p') // selected the section p
            title.innerText = data.title
            summary.innerText =data.summary
        })
    })
}

document.addEventListener('DOMContentLoaded', init); 
document.addEventListener('DOMContentLoaded', init);
