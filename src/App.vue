<script setup>

import { reactive } from "vue";
import { invoice1, invoice2 } from "./components/data/data";

const data = reactive({
  sender: '',
  billTo: '',
  shipTo: '',
  invoiceNo: '',
  date: '',
  dueDate: '',
  additionalNote: '',
  additionalNote: '',
  products: [
    {
      name: '',
      qty: '',
      rate: '',
      amount: '',
    },
  ],
  subtotal: '',
  tax: '',
  total: '',
  notes: '',
  terms: '',
})

// add product btn
function addMoreProduct() {
  data.products.push({
    name: '',
    qty: '',
    rate: '',
    amount: '',
  })
}

// remove product btn
function removeProducts(index) {
  alert("Are you sure ! Delete this item ?")
  data.products.splice(index, 1);
}


// subtotal calculate
function getSubTotal() {
  let subtotal = 0;
  data.products.forEach(product => {
    subtotal += product.amount;
  });
  data.subtotal = subtotal;
  return subtotal;
}

// total calculate with tax
function getTotal() {
  let total = 0;
  total = data.subtotal * data.tax / 100 + data.subtotal
  data.total = total
  return total
}


</script>

<template>
  <div class=" mx-auto  container bg-white border p-5">

    <!-- Invoice Header -->
    <div class="w-full flex justify-between items-center">
      <div class="">
        <img class="w-20" src="./assets/images/invoice.jpeg" alt="">
      </div>

      <div class="">

        <a class="text-3xl font-bold text-orange-600" href="#">INVOICE</a><br>
        <input v-model="data.invoiceNo" class="border border-gray-300 outline-none rounded-sm px-1 my-1" type="text"
          value="Invoice Number">

      </div>
    </div>

    <!-- Invoice Customers Detatils -->
    <div class="w-full flex justify-between mt-3">
      <div>
        <label>Sender</label><br>
        <input v-model="data.sender" class="w-96 border border-gray-400 outline-none p-2 rounded-sm my-1" type="text">

        <div class="w-full flex justify-between mt-3">
          <div>
            <label>Bill To</label><br>
            <input v-model="data.billTo" class="w-44 border border-gray-400 outline-none p-2 rounded-sm  my-1"
              type="text">
          </div>
          <div>
            <label>Ship To</label>
            <br>
            <input v-model="data.shipTo" class="w-44 border border-gray-400 outline-none p-2 rounded-sm  my-1"
              type="text">
          </div>
        </div>
      </div>

      <div class="text-right mt-4">
        <label>Date</label>
        <input v-model="data.date" class="ml-2 border border-gray-400 outline-none rounded-sm p-1.5 my-1"
          type="text"><br>
        <label>Due Date</label>
        <input v-model="data.dueDate" class="ml-2 border border-gray-400 outline-none rounded-sm p-1.5 my-1"
          type="text"><br>
        <label>Additional Note</label>
        <input v-model="data.additionalNote" class="ml-2 border border-gray-400 outline-none rounded-sm p-1.5 my-1"
          type="text"><br>
      </div>
    </div>

    <!-- Invoice Products -->
    <div class="mt-5  pb-2">
      <table class="w-full rounded-sm">
        <tr class="bg-slate-900 text-white text-left">
          <th class="w-6/12">Item</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th class="text-right">Amount</th>
        </tr>

        <tr class="text-start border" v-for="(product, index) in data.products" :key="index">
          <td class="flex">
            <input v-model="product.name" class="w-full outline-none border" type="text">
            <button @click="removeProducts(index)" class="p-1 bg-red-500 text-white rounded m-1">D</button>
          </td>
          <td>
            <input v-model="product.qty" class="w-full outline-none border" type="number">
          </td>
          <td>
            <input v-model="product.rate" class="w-full outline-none border" type="number">
          </td>
          <td class="text-right">
            {{ product.amount=product.qty * product.rate }}
            <!-- <input v-model="product.amount" class="w-full outline-none border" type="text"> -->
          </td>
        </tr>

      </table>
      <button @click="addMoreProduct()" class="bg-green-700 px-3 text-white my-3 text-sm py-1 rounded-md">Add
        More</button>
      <!-- Assign data from api or another file -->
      <button @click="Object.assign(data, invoice1)"
        class="bg-green-700 px-3 text-white my-3 text-sm py-1 rounded-md">INV-1
      </button>
      <button @click="Object.assign(data, invoice2)"
        class="bg-green-700 px-3 text-white my-3 text-sm py-1 rounded-md">INV-2
      </button>

    </div>

    <!-- Invoice Total Billing -->

    <div class="flex justify-between mt-5">
      <div class="text-left mt-2">

        <label>Notes</label><br>
        <input v-model="data.notes" class="w-96 border mb-2 border-gray-400 outline-none p-1 rounded-sm my-1"
          type="text">
        <br>
        <label>Terms</label><br>
        <input v-model="data.terms" class="w-96 border border-gray-400 outline-none p-1 rounded-sm my-1" type="text">


      </div>


      <div class="text-right mt-2">
        <label class="mr-3" for="subtotal">Subtotal</label>
        <input :value="getSubTotal()" readonly
          class="border border-gray-300 outline-none rounded-sm px-1 my-1 text-right" type="text">
        <br>
        <label class="mr-3" for="tax">Tax</label>
        <input v-model="data.tax" class="border border-gray-300 outline-none rounded-sm px-1 my-1 text-right"
          type="text" value="" placeholder="tax">
        <br>
        <label class="mr-3" for="total">Total</label>
        <input readonly :value="getTotal()" class="border border-gray-300 outline-none rounded-sm px-1 my-1 text-right"
          type="text">
      </div>


    </div>



  </div>
</template>

<style scoped></style>
