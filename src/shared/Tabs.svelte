<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

  export let items;
  export let activeItem;

</script>

<div class="tabs">

  <ul>
    {#each items as item}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <li on:click={() => dispatch('tabChange' , item)}>
        <div class:active ={item === activeItem}>{item}</div>
      </li>
    {/each}
  </ul>

</div>

<style>
  .active{
    color: rgb(231, 120, 120);
    border-bottom: 2px solid rgb(231, 120, 120);
    padding-bottom: 8px;
  }

  .tabs{
    margin-bottom: 40px;
  }

  ul{
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }

  li{
    margin: 0 14px;
    font-size: 18px;
    color: gray;
    cursor: pointer;

  }

</style>