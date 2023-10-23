//criar objeto no JavaScript
export class Router {

    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }
    
    route(event) {
        event = event || window.event
        event.preventDefault()

        //ADICIONAR AO HISTORICO
        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

  handle() {

    //DESTRUTURANDO OBJETO DO WINDOW.LOCATION
    /*
        ** PARA DESESTRUTURAR MAIS DO QUE UM 
        ** CONST { PATHNAME, HREF, HOST, PORT } = WINDOW.LOCATION
    */
    const { pathname } = window.location

    //Mostrar as rotas, caso não tiver, mostrar 404
    const route = this.routes[pathname] || this.routes[404]
    fetch(route)  //API DO HTML, PEGAR ALGO 
    .then(data => data.text())
    .then(html =>{
        document.querySelector('#app').innerHTML = html
    })
}

}

