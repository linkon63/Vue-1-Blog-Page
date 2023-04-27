<template>
    <div class="home">

        <div class="bg-primary p-5">
            <h1 class="fw-bold text-white">Blog Page</h1>
        </div>
        <div class="border p-2 bg-secondary">
            <button class="btn btn-info" @click="showPost = !showPost">!Post Toggle</button>
            <button class="btn btn-danger ms-2" @click="posts.shift()">Delete POST</button>
        </div>
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
            <PostList v-if="showPost" :posts="posts" />
        </div>
        <div v-else>
            <div class="spinner-border text-primary mt-5" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

    </div>

    <router-view></router-view>
</template>

<script>
import { ref } from 'vue';
import PostList from '../components/PostList.vue';
import getPosts from "../composables/getPosts";

export default {
    name: "Home",
    components: { PostList },
    setup() {

        // const showPost = ref(true)
        // const posts = ref([])
        // const error = ref(null)
        // dummy data
        // { title: "Welcome to blog", id: 1, body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius id corporis fugiat facere quae enim vel tempora. Voluptatum sit eveniet minima quibusdam doloremque asperiores adipisci incidunt nihil, aperiam fuga aut. Blanditiis et quaerat autem reprehenderit esse tempore pariatur fuga quae fugiat exercitationem molestiae, nobis consectetur natus dolorem accusamus alias quo, possimus ducimus voluptatem, distinctio provident. Quis, sapiente? Asperiores, labore assumenda. Enim repellendus sapiente quas eos architecto fugit est maiores qui! Adipisci dolor consequatur nostrum eius aspernatur, assumenda ab, saepe corrupti asperiores dicta modi ullam magni odio minus? Excepturi assumenda, molestiae nobis ipsum rerum maxime dolorem velit eum, vero obcaecati, illo dicta. Est cum maxime corporis soluta dolorum odit ut minus ab voluptas illum amet ratione numquam, obcaecati tenetur, voluptatem, earum iusto. Quibusdam nisi nam odit explicabo veniam illo cum possimus minus nihil quo sapiente, adipisci consequatur repudiandae quis soluta nulla amet fuga corrupti magnam aspernatur placeat. Similique quas modi quod!" },
        // { title: "Top 5 CSS Tips", id: 2, body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius id corporis fugiat facere quae enim vel tempora. Voluptatum sit eveniet minima quibusdam doloremque asperiores adipisci incidunt nihil, aperiam fuga aut. Blanditiis et quaerat autem reprehenderit esse tempore pariatur fuga quae fugiat exercitationem molestiae, nobis consectetur natus dolorem accusamus alias quo, possimus ducimus voluptatem, distinctio provident. Quis, sapiente? Asperiores, labore assumenda. Enim repellendus sapiente quas eos architecto fugit est maiores qui! Adipisci dolor consequatur nostrum eius aspernatur, assumenda ab, saepe corrupti asperiores dicta modi ullam magni odio minus? Excepturi assumenda, molestiae nobis ipsum rerum maxime dolorem velit eum, vero obcaecati, illo dicta. Est cum maxime corporis soluta dolorum odit ut minus ab voluptas illum amet ratione numquam, obcaecati tenetur, voluptatem, earum iusto. Quibusdam nisi nam odit explicabo veniam illo cum possimus minus nihil quo sapiente, adipisci consequatur repudiandae quis soluta nulla amet fuga corrupti magnam aspernatur placeat. Similique quas modi quod!" },
        // { title: "Javascript add tools", id: 3, body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius id corporis fugiat facere quae enim vel tempora. Voluptatum sit eveniet minima quibusdam doloremque asperiores adipisci incidunt nihil, aperiam fuga aut. Blanditiis et quaerat autem reprehenderit esse tempore pariatur fuga quae fugiat exercitationem molestiae, nobis consectetur natus dolorem accusamus alias quo, possimus ducimus voluptatem, distinctio provident. Quis, sapiente? Asperiores, labore assumenda. Enim repellendus sapiente quas eos architecto fugit est maiores qui! Adipisci dolor consequatur nostrum eius aspernatur, assumenda ab, saepe corrupti asperiores dicta modi ullam magni odio minus? Excepturi assumenda, molestiae nobis ipsum rerum maxime dolorem velit eum, vero obcaecati, illo dicta. Est cum maxime corporis soluta dolorum odit ut minus ab voluptas illum amet ratione numquam, obcaecati tenetur, voluptatem, earum iusto. Quibusdam nisi nam odit explicabo veniam illo cum possimus minus nihil quo sapiente, adipisci consequatur repudiandae quis soluta nulla amet fuga corrupti magnam aspernatur placeat. Similique quas modi quod!" },
        // const loadData = async () => {
        //     try {
        //         let data = await fetch('http://localhost:3000/posts')
        //         console.log("✔ post data from server", data)
        //         if (!data.ok) {
        //             throw Error('Data is not avilable right now !')
        //         }
        //         posts.value = await data.json()
        //     } catch (err) {
        //         // console.log(error, "error from data loading")
        //         console.log(err.message)
        //         // error.value = "Data is not avilable right now !"
        //         error.value = err.message
        //     }
        // }
        // loadData()
        const showPost = ref(true)
        const { loadData, posts, error } = getPosts()
        loadData()
        return { posts, showPost, error }
    }
}
</script>
