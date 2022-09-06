<template>
    <v-app>
        <v-main>
            <div class="d-flex align-center">
                <div class="grid align-center pa-3">
                    <div class="text-h6">CTC</div>
                    <span class="text-caption">Cerceis's Tome Collection</span>
                </div>
                <v-btn color="primary" class="mx-1" @click="$router.replace('/')">Home</v-btn>
                <v-btn color="primary" @click="$router.replace('/about')">About</v-btn>
            </div>
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "App",

    data() {
        return {
            //
        };
    },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Almendra:ital,wght@0,400;0,700;1,400&display=swap");
* {
    font-family: "Almendra", serif;
}
</style>
