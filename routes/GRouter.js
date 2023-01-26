import homePage from './home.js'
import profilePage from './profile.js'
import ratingPage from './rating.js'

const routerApp=(app)=>{
    app.use('/',homePage)
    app.use('/profile',profilePage)
    app.use('/ratingm',ratingPage)
}
export default routerApp