// 1. Define route components.
// These can be imported from other files
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../view/Home.vue";
import About from "../view/About.vue";
import Details from "../view/Details.vue";
import Jobs from "../view/jobs/Jobs.vue";
import NotFound from "../view/NotFound.vue";
import JobDescription from "../view/jobs/JobDescription.vue";
// import JobDescription from "./view/";
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', name: "Home", component: Home },
    { path: '/about', name: "About", component: About },
    { path: '/posts/:id', name: "Details", component: Details, props: true },

    // { path: '/jobs', name: "Job", component: Jobs },
    // {
    //     path: '/jobs/:id',
    //     name: 'Jobdes',
    //     component: JobDescription,
    //     props: true
    // },

    // redirect
    // {
    //     path: "/all-jobs",
    //     redirect: '/jobs'
    // },
    // catchAll 404
    {
        path: '/:catchAll(.*)',
        name: "NotFound",
        component: NotFound,
    }

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router;
// 5. Create and mount the root instance.
// const app = Vue.createApp({})
// // Make sure to _use_ the router instance to make the
// // whole app router-aware.
// app.use(router)

// app.mount('#app')

// Now the app has started!
