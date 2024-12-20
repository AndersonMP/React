export const getAllPostsService = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        // puede ser tambien (json) => console.log(json);
        .then(console.log);
}

export const createPostService = ({ title, body }, fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts', config)
        .then(response => response.json())
        .then(console.log, fnExito());
}

export const updatePostService = () => {
    const config = {
        method: 'PUT',
        body: JSON.stringify(
            {
                id: 1,
                title: 'mensaje final',
                body: 'Hasta la vista baby',
                userId: 1,
            }
        ),
        headers: {
            'Content-type': 'application/json',
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts/1', config)
        .then(response => {
            console.log('Estado:', response.status);
            return response.json();
        })
        .then(data => {
            console.log('Mensaje:', data);
        })

}


export const getByUserIdService = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(response => response.json())
        .then(console.log);
}



export const updateProductService = () => {
    const config = {
        method: "PUT",
        body: JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        ),
        headers: {
            'Content-type': 'application/json',
        }
    }


    fetch('https://fakestoreapi.com/products/7', config)
        .then(res => res.json())
        .then(json => console.log(json));
}


export const getCategoriesService = () => {
    fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(console.log);
}

export const getPokemonByName = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then(response => response.json())
        .then(console.log)
}

export const getDocumentTypes = () => {
    fetch('http://192.168.1.101:8080/inventarios-1.0.0/rest/tipodocumento/recuperar')
        .then(response => response.json())
        .then(console.log)
}

export const createDocumentType = ({ code, description }, fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            codigo: code,
            descripcion: description,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    }

    fetch('http://192.168.1.101:8080/inventarios-1.0.0/rest/tipodocumento/registrar', config)
        .then(response => response.json())
        .then(console.log, fnExito());
}