<template>
    <div class="post-list border bg-info">
        <div class="border m-2 bg-success text-white text-uppercase" v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
            <!-- <h3>{{ post.title }}</h3> -->
        </div>
    </div>
</template>

<script>
import SinglePost from './SinglePost.vue';
import { onMounted, onUnmounted, onUpdated } from 'vue'

export default {
    props: ["posts"],
    setup(props) {
        // console.log("Props Post", props.posts);
        onMounted(() => {
            console.log("Component onMounted")
        })
        
        onUnmounted(() => {
            console.log(" Component Unmounted")
        })
        
        onUpdated(() =>{
            console.log(" Component onUpdated")
        })
    },
    components: { SinglePost }
}
</script>