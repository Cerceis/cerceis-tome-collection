<template>
    <v-sheet class="mainCon">
        <div class="tomeContainer">
            <div 
                v-for="tome in tomes" :key="tome.id"
                class="tome"
                @click="selectedTome = tome"
            >
                <img width=180 :src="require(`@/assets/images/${tome.bg}`)">
                <div class="grid pa-3">
                    <span class="tomeTitle">{{ tome.title }}</span>
                    <div class="d-flex align-center">
                        <hr style="width:85%;" class="my-3">
                        <div class="text-caption ml-1">v{{ tome.version }}</div>
                    </div>
                    <p>
                        {{tome.description}}
                    </p>
                </div>
            </div>
        </div>
    </v-sheet>
    <Paper v-if="selectedTome" :tome="selectedTome" @close="selectedTome = null;"/>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { tomes, Tome } from "@/services/tomes";
import Paper from "@/components/Paper.vue";

export default defineComponent({
    components:{
        Paper
    },
    setup() {

        const selectedTome: Ref<Tome | null> = ref(null);

        return {
            selectedTome,
            tomes,
        };
    },
});
</script>

<style lang="scss">
$tome-width: 180px;
$tome-height: calc($tome-width * 1.4142);

.mainCon{
    overflow-y: scroll;
    max-height: calc(90vh);
}

.tomeContainer {
    display: grid;
    padding: 1em;
    gap: .5em;
    justify-items: center;
    align-items: flex-start;
    align-content: flex-start;
    height: calc(100vh - 60px);
    grid-template-columns: repeat( auto-fit, minmax( 350px, 1fr) );
    background: url(~@/assets/images/bg.jpg);
    background-position: 'center';
    background-size: 'cover';
    background-repeat: 'no-repeat';
    
    .tome {
        //1:1.4142
        display: flex;
        justify-content: center;
        background: rgba($color: #000000, $alpha: .5);
        border-radius: .5em;

        &:hover{filter: brightness(120%);}
        &:active{filter: brightness(120%);}

        .tomeTitle{
            font-weight: bold;
        }
    }
}
</style>
