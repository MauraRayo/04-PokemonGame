<template>
    <h1>¿Quien es este pokemon?</h1>

    <PokemonPicture :pokemonId="4" :showPokemon="true"/>
    <PokemonOptions />



</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';

export default {
    components: { PokemonOptions, PokemonPicture }
}
</script>