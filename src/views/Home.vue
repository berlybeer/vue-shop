<template>
  <div class="home">
    <Navbar></Navbar>
    <Hero />
    <Products />

    <div class="container h-100">
      <div class="row p-5 h-100 justify-cotent-center align-items-center">
        <div class="col-md-6">
          <img src="/img/svg/product.svg" alt width="400" />
        </div>
        <div class="col-md-6">
          <h3>Lear More About us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo consequuntur officia neque ullam autem, veritatis itaque ipsa. Sed asperiores recusandae earum accusantium! Distinctio eius nisi itaque sit sequi aperiam.</p>
          <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";

export default {
  name: "home",
  components: {
    Hero,
    Products
  }
};
</script>

<style></style>
