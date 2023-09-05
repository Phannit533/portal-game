import HomeComponent from '../components/nav_bar/HomeComponent.vue'
import AboutComponent from '../components/nav_bar/AboutComponent.vue'
import ContactComponent from '../components/nav_bar/ContactComponent.vue'
import RegisterComponent from '../components/form/RegisterComponent.vue'
import LoginComponent from '../components/form/LoginComponent.vue'
// import ProfileComponent from '../components/form/ProfileComponent.vue'
import ForgotPasswordComponentVue from '@/components/form/ForgotPasswordComponent.vue'
import ResetPasswordComponentVue from '@/components/form/ResetPasswordComponent.vue'
import MyGameComponent from '../components/post/MyGameComponent.vue'
import ChooseSignupComponentVue from '../components/post/ChooseSignUpComponent.vue'
import AllGame from '@/components/nav_bar/AllGame.vue'
import DetailPage from '../components/post/DetailPage.vue'
// -------------Category-------------
import RecentGameVue from '@/components/categories/RecentGame.vue'
import ActionGameVue from '@/components/categories/ActionGame.vue'
import RandomGameVue from '@/components/categories/RandomGame.vue'
import TrendingGameVue from '@/components/categories/TrendingGame.vue'
import UpdatedGameVue from '@/components/categories/UpdatedGame.vue'
import NewGameVue from '@/components/categories/NewGame.vue'
import TwoPlayerGameVue from '@/components/categories/2PlayerGame.vue'
import AdventureGameVue from '@/components/categories/AdventureGame.vue'
// ------------------------------Play game page-----------------
import PlayGamePageVue from '@/components/post/PlayGamePage.vue'
import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeComponent
    },
    {
        path: '/about',
        name: 'about',
        component: AboutComponent
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactComponent
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterComponent
    }, {
        path: '/login',
        name: 'login',
        component: LoginComponent
    }, {
        path: '/reset_password',
        name: 'reset_password',
        component: ResetPasswordComponentVue
    }, {
        path: '/forgot_password',
        name: 'forgot_password',
        component: ForgotPasswordComponentVue
    }, {
        path: '/choose_signup',
        name: 'choose_signup',
        component: ChooseSignupComponentVue
    }, {
        path: '/my_game',
        name: 'my_game',
        component: MyGameComponent
    }, {
        path: '/all_games',
        name: 'all_games',
        component: AllGame
    },
     {
        path: '/detail',
        name: 'detail',
        component: DetailPage
    },
    // =================CATEGORIES =============================
    {
        path: '/recent',
        name: 'recent',
        component: RecentGameVue
    }, {
        path: '/new',
        name: 'new',
        component: NewGameVue
    }, {
        path: '/updated',
        name: 'updated',
        component: UpdatedGameVue
    }, {
        path: '/trending',
        name: 'trending',
        component: TrendingGameVue
    }, {
        path: '/action',
        name: 'action',
        component: ActionGameVue
    }, {
        path: '/random',
        name: 'random',
        component: RandomGameVue
    }, {
        path: '/2player',
        name: '2player',
        component: TwoPlayerGameVue
    },
    {
        path:'/adventure',
        name: 'adventure',
        component: AdventureGameVue
    },

    // ====================================================
    {
        path:'/start_play',
        name: 'start_play',
        component:PlayGamePageVue
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
