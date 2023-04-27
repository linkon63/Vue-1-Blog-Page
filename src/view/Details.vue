<template lang="">
    <div>
        <h1 class="p-5 border bg-info text-white fw-bold">Details page</h1>
        <div v-if="error">{{error}}</div>
        <div v-if="post" class="post border bg-dark text-white p-5">
            <h3>{{post.title}}</h3>
            <p class="pre">{{post.body}}</p>
        </div>
        <div v-else>
            <div class="spinner-border text-primary mt-5" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>
<script>
import getPost from '../composables/getPost';
export default {
    props: ['id'],
    setup(props) {
        const { loadData, post, error } = getPost(props.id)
        loadData()
        return { post, error }
    }

}
</script>
<style lang="">
    
</style>