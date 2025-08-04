const fetchBtn = document.getElementById('fetch');
const endPoint = 'https://fakestoreapi.com/products'

fetchBtn.addEventListener('click', async ()=>{
    const response = (await fetch('https://fakestoreapi.com/products/1'));
    const data = await response.json()
    const img = document.createElement('img')
    try {
        img.attributes.src = data.image
        document.querySelector('body').appendChild(img)
    }
    catch (error) {
        console.log(error)
    }
})