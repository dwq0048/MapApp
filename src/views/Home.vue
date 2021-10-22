<template>
	<div class="home" ref="home">
		<div>
			<router-view v-slot="{ Component, route }">
				<transition :name="'fade'" @beforeLeave="beforeLeave" @enter="enter" @afterEnter="afterEnter">
					<component :is="Component" :key="route.path" />
				</transition>
			</router-view>
		</div>
	</div>
</template>

<script>
export default {
	name : "home",
	data(){
		return {
			// Variables
			prevHeight: 0,
		}
	},
	methods : {
		beforeLeave(element) {
			this.prevHeight = getComputedStyle(element).height;
		},
		enter(element) {
			const { height } = getComputedStyle(element);
			this.$refs['home'].style.height = this.prevHeight;
			setTimeout(() => {
				element.style.height = height;
			},200);
		},
		afterEnter(element) {
			this.$refs['home'].style.height = getComputedStyle(element).height;
			setTimeout(() => {
				this.$refs['home'].style.height = '';
			},200);
		},
	},
}
</script>

<style lang="scss" scoped>
	.home {
		& {
			position:absolute;
			width:100%; height: 100%;
			left: 0; top: 0;
			white-space: nowrap;
			@include transition(.2s all);
		}

		& > div {
			& {
				display: block;
				position: absolute;
				left: 0; top: 0;
				width: 100%; height: 100%;
			}
		}
	}
</style>

<style lang="scss">
	.fade-leave-to, .fade-leave-active {
		position: absolute;
		animation-duration: .2s;
		animation-name: left;
	}

	.fade-leave-active {
		display: none;
	}

	.fade-enter-to, .fade-enter-active {
		position: absolute;
		animation-duration: .2s;
		animation-name: right;
	}

	@keyframes left {
		0% { left: 0; opacity: 1; };
		100% { left: -100%; opacity: 0; };
	}

	@keyframes right {
		0% { left: 100%; opacity: 0; };
		100% { left: 0%; opacity: 1; };
	}
</style>
