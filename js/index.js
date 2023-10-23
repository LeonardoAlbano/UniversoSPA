import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/universo', "/pages/universo.html")
router.add('/exploracao', "/pages/exploracao.html")


/*
const routes = {
    "/": "/pages/home.html",
    "/about": "/pages/about.html",
    "/contact": "/pages/contact.html",
    404: "pages/404.html",
}
*/

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
