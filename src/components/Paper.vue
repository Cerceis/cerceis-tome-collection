<template>
    <div
        class="paper slide-in-elliptic-bottom-fwd"
        :style="{
            background: `url(${require(`@/assets/images/paper.jpg`)})`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
        }"
    >
        <v-btn variant="outlined" icon size="sm" @click="$emit('close')">
            <v-icon>mdi-close</v-icon>
        </v-btn>
        <h2 class="title">
            {{ tome.title }} <span class="text-caption">v{{tome.version}}</span>
        </h2>
        <div class="content pa-3">
            <div class="my-3" v-for="(spell, index) in tome.spells" :key="index">
                <h3>{{spell.name}} ({{spell.activation}}+)</h3>
                <div class="story">"{{spell.story}}"</div>
                <div class="effects">{{spell.effects}}</div>
            </div>
        </div>
    </div>
</template>
 
<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { Tome } from "@/services/tomes";

export default defineComponent({
    props: {
        tome: Object as PropType<Tome>,
    },
    setup(props) {
        const tome = computed(() => props.tome);
        return {
            tome,
        };
    },
});
</script>
 
<style lang="scss" scoped>
.slide-in-elliptic-bottom-fwd {
    -webkit-animation: slide-in-elliptic-bottom-fwd 0.4s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-in-elliptic-bottom-fwd 0.4s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes slide-in-elliptic-bottom-fwd {
    0% {
        -webkit-transform: translateY(600px) rotateX(30deg) scale(0);
        transform: translateY(600px) rotateX(30deg) scale(0);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0) rotateX(0) scale(1);
        transform: translateY(0) rotateX(0) scale(1);
        -webkit-transform-origin: 50% -1400px;
        transform-origin: 50% -1400px;
        opacity: 1;
    }
}
@keyframes slide-in-elliptic-bottom-fwd {
    0% {
        -webkit-transform: translateY(600px) rotateX(30deg) scale(0);
        transform: translateY(600px) rotateX(30deg) scale(0);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0) rotateX(0) scale(1);
        transform: translateY(0) rotateX(0) scale(1);
        -webkit-transform-origin: 50% -1400px;
        transform-origin: 50% -1400px;
        opacity: 1;
    }
}
.paper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
 
    .title{
        text-align: center;
        color: black 
    }
    .content {
        color: black 
    }
    .story{
        font-style: italic;
    }
}
</style>