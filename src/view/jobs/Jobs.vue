<script>
export default {
    name: "Jobs",
    data() {
        return {
            jobs: [
                { name: 'devOps', id: 1, description: "lorem10 hello hi bye bye hello hello" },
                { name: 'Javascript', id: 2, description: "lorem10 hello hi bye bye hello hello" },
                { name: 'C++', id: 3, description: "lorem10 hello hi bye bye hello hello" },
                { name: 'python', id: 4, description: "lorem10 hello hi bye bye hello hello" }
            ]
        }
    }
}
</script>
<template>
    <div>
        <div v-for="job in jobs" :key="job.id">
            <router-link :to="{ name: 'Jobdes', params: { id: job.id } }">
                <p>{{ job.name }}</p>
            </router-link>
        </div>
    </div>
</template>