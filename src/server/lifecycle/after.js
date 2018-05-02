import { afterMount } from '../middlewares'
import mountRouter from '../router'

export default (app) => {
    afterMount(app)
    mountRouter(app)
}