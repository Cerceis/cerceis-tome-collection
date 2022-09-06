import tomesList from "@/assets/data/tomes.json";
import { Ref, ref } from "vue";

export interface Spell{
    name: string,
    activation: number,
    story: string,
    effects: string,
}

export interface Tome{
    id: string,
    title: string,
    description: string,
    bg: string,
    spells: Spell[]
}

export const tomes: Ref<Tome[]> = ref(tomesList as Tome[]);
