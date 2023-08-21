<script>
  export let type = 'primary';
  export let flat = false;
  export let inverse = false;
  
</script>

<button class={type} class:flat={flat} class:inverse={inverse} on:click>
  <slot> </slot>
</button>

<style>
  button {
    border: 0px;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }

  .primary{
    background-color: rgb(209, 99, 99);
    color: white;
  }

  .secondary{
    background-color: rgb(77, 123, 77);
    color: white;
  }

  .flat{
    box-shadow: none;
  }
  .primary.inverse{
    color:rgb(209, 99, 99);
    background-color: white;
    border: 2px solid rgb(209, 99, 99);

  }

  .secondary.inverse{
    color:rgb(77, 123, 77);
    background-color: white;
    border: 2px solid rgb(77, 123, 77);
  }


</style>