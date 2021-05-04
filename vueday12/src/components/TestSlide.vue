<template>
	<div id="slider">
		<div class="window"  @mouseover="stop" @mouseleave="play">
		 <ul class="container" :style="containerStyle">
		        <li>
		          <img :style="{width:imgWidth+'px'}" :src="sliders[sliders.length - 1].img" alt="">
		        </li>
		        <li  v-for="(item, index) in sliders" :key="index">
		          <img :style="{width:imgWidth+'px'}" :src="item.img" alt="">
		        </li>
		        <li>
		          <img :style="{width:imgWidth+'px'}" :src="sliders[0].img" alt="">
		        </li>
		      </ul>
			<ul class="direction">
			        <li class="left" @click="move(600, 1, speed)">
						<img src="../assets/svg/left.svg" alt="">
			        </li>
			        <li class="right" @click="move(600, -1, speed)">
						<img src="../assets/svg/right.svg" alt="">
			        </li>
			      </ul>
			      <ul class="dots">
			        <li v-for="(dot, i) in sliders" :key="i"
			        :class="{dotted: i === (currentIndex-1)}"
			        @click = "jump(i+1)"
			        >
			        </li>
			      </ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'slider',
		props: {
			initialSpeed: {
				type: Number,
				default: 30
			},
			initialInterval: {
				type: Number,
				default: 3
			}
		},
		data() {
			return {
				sliders: [{
						img: require('../assets/imgs/01.jpg')
					},{
						img: require('../assets/imgs/02.jpg')
					},{
						img: require('../assets/imgs/03.jpg')
					},{
						img: require('../assets/imgs/04.jpg')
					},{
						img: require('../assets/imgs/05.jpg')
					},

				],
				imgWidth: 600,
				currentIndex: 1,
				distance: -600,
				transitionEnd: true,
				speed: this.initialSpeed
			}
		},
		 computed:{
		    containerStyle() {
		      return {
		        transform:`translate3d(${this.distance}px, 0, 0)`
		      }
		    },
		    interval() {
		      return this.initialInterval * 1000
		    }
		  },
		  mounted() {
		    this.init()
		  },
		  methods:{
		    init() {
		      this.play()
		      window.onblur = function() { this.stop() }.bind(this)
		      window.onfocus = function() { this.play() }.bind(this)
		    },
		    move(offset, direction, speed) {
		      console.log(speed)
		      if (!this.transitionEnd) return
		      this.transitionEnd = false
		      direction === -1 ? this.currentIndex += offset/600 : this.currentIndex -= offset/600
		      if (this.currentIndex > 5) this.currentIndex = 1
		      if (this.currentIndex < 1) this.currentIndex = 5
		
		      const destination = this.distance + offset * direction
		      this.animate(destination, direction, speed)
		    },
		    animate(des, direc, speed) {
		      if (this.temp) {
		        window.clearInterval(this.temp);
		        this.temp = null ;
		      }
		      this.temp = window.setInterval(() => {
		        if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
		          this.distance += speed * direc
		        } else {
		          this.transitionEnd = true
		          window.clearInterval(this.temp)
		          this.distance = des
		          if (des < -3000) this.distance = -600
		          if (des > -600) this.distance = -3000
		        }
		      }, 20)
		    },
		    jump(index) {
		      const direction = index - this.currentIndex >= 0 ? -1 : 1;
		      const offset = Math.abs(index - this.currentIndex) * 600;
		      const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed ;
		      this.move(offset, direction, jumpSpeed)
		    },
		    play() {
		      if (this.timer) {
		        window.clearInterval(this.timer)
		        this.timer = null
		      }
		      this.timer = window.setInterval(() => {
		        this.move(600, -1, this.speed)
		      }, this.interval)
		    },
		    stop() {
		      window.clearInterval(this.timer)
		      this.timer = null
		    }
	},
}
</script>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	ol,
	ul {
		list-style: none;
	}

	#slider {
		text-align: center;
	}

	.window {
		position: relative;
		width: 600px;
		height: 400px;
		margin: 0 auto;
		overflow: hidden;
	}

	.container {
		display: flex;
		position: absolute;
	}

	.left,
	.right {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 50px;
		height: 50px;
		background-color: rgba(0, 0, 0, .3);
		border-radius: 50%;
		cursor: pointer;
	}

	.left {
		left: 3%;
		padding-left: 12px;
		padding-top: 10px;
	}

	.right {
		right: 3%;
		padding-right: 12px;
		padding-top: 10px;
	}

	img {
		user-select: none;
	}

	.dots {
		position: absolute;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
	}

	.dots li {
		display: inline-block;
		width: 15px;
		height: 15px;
		margin: 0 3px;
		border: 1px solid white;
		border-radius: 50%;
		background-color: #333;
		cursor: pointer;
	}

	.dots .dotted {
		background-color: orange;
	}
</style>
