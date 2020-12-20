<template>
  <div class="home">
      <table v-if='books.length'>
        <thead>
          <tr>
            <th v-for = "(items,idx) in database" :key=idx>{{items}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(items,idx) in books" :key=idx>
			<td>{{items.id}}</td>
			<td>{{items.name}}</td>
			<td>{{items.data}}</td>
			<td>${{items.price}}</td>
			
			<td>
				<button @click='minus(idx)'>-</button>
				{{items.count}}
				<button @click='add(idx)'>+</button>
			</td>
			<td>
				<button @click='remove(idx)'>remove</button>
			</td>
          </tr>
        </tbody>
      </table>
	  <h1 v-else>the shopping cart has been emptied</h1>
	  <h2>Total price:${{totalPrice}}</h2>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
   
  },
  data(){
    return{
        books: [
			{
				id: 1,
				name: '《Methodology》',
				data: "2018-09-25",
				price: 89.00,
				count: 1
			},
			{
				id: 2,
				name: '《UNIX-Coding Art》',
				data: "2018-09-25",
				price: 89.00,
				count: 1
			},
			{
				id: 3,
				name: '《Java EE》',
				data: "2018-09-25",
				price: 89.00,
				count: 1
			},
			{
				id: 4,
				name: '《JavaScript Advanced math》',
				data: "2018-09-25",
				price: 89.00,
				count: 1
			},
			{
				id: 5,
				name: '《C++》',
				data: "2018-09-25",
				price: 89.00,
				count: 1
			}
            ],
		  database:['','the name of the book','the date of published','Price','Quantities','Operationg'],
		  flag:false,
    }
  },
  methods:{
	  add(index){
		let{books}=this;
		books[index].count++;
	  },
	  minus(index){
		let{books}=this;
		books[index].count--;
		if(books[index].count <0){
			books[index].count = 0
		}
	  },
	  remove(index){
		  let{books,flag}=this;
		  books.splice(index,1);
	  },
  },
  computed:{
	  totalPrice(){
		  let{books}=this;
		  let totalPrice = 0;
		  for(let item of books){
			  totalPrice += item.price * item.count
		  }
		  return totalPrice;
	  }
  }
}
</script>

<style >
	table {
				border: 1px solid #000;
				border-collapse: collapse;
				border-spacing: 0;
			}


			th,
			td {
				padding: 8px 16px;
				border: 1px solid #000;
				text-align: left;
			}

			th {
				background-color: #f7f7f7;
				color: #5c6b77;
				font-weight: 600px;
			}
			ul span{
				margin-left:20px;
			}
		.show{
			display: none;
		}
</style>
