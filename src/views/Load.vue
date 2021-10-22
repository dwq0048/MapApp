<template>
	<div class="load" :class="{ active : Active.load }">
		<div class="wrap">
			<div class="logo" :class="{ active : Active.logo }">
				<i><font-awesome-icon :icon="faMap" /></i>
			</div>
			<div class="spinner" :class="{ active : Active.spinner }">
				<div>
					<i><font-awesome-icon :icon="faSpinner" /></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-regular-svg-icons'

export default {
	name: 'Home',
	data(){
		return {
			// Icons
			faSpinner,
			faMap,

			// Variables
			Active : {
				load : false,
				logo: false,
				spinner: false,
			},
			Load : {
				kakako : false,
			},
			KakaoLoad : false,
		}
	},
	methods: {
		LoadOut(){
			this.Active.load = true;
		}
	},
	watch:{
		KakaoLoad(val){
			//if(typeof kakao == 'object' && this.KakaoLoad){
			if(this.KakaoLoad){
				if(typeof navigator.connection.type == 'object' || typeof navigator.connection.type == 'string'){
					if(navigator.connection.type == Connection.NONE){
						this.$router.push({ path : '/403' });
					}else{
						this.$router.push({ path : '/map' });
					}
				}else{
					this.$router.push({ path : '/map' });
				}
			}
		}
	},
	created(){
		setTimeout(() => {
			this.KakaoLoad = true;
		}, 1000);
	},
	mounted(){
		setTimeout(() => {
			this.Active.logo = true;
		}, 1);

		setTimeout(()=> {
			this.Active.spinner = true;
		}, 500);
	}
}
</script>

<style lang="scss" scoped>
	.load {
        & {
            position: absolute;
            width: 100%; height: 100%;
            left: 0; top: 0;
            background-color: #2a2d32;
            z-index: 100;
            @include transition(.5s all);
        }

        &:after {
            & {
                content: " ";
                display: block;
                position: absolute;
            }
        }

		& > .wrap {
			& > .logo {
				& {
					position: absolute;
					left: 50%; top: 20%;
					font-size: #{$font-size + 32};
					text-align: center;
					letter-spacing: 0;
					line-height: 0;
					color: #fff;
					opacity: 0;
					@include transform(translate(-50%, 25px));
					@include transition(.5s all);
				}

				&.active {
					& {
						opacity: 1;
						@include transform(translate(-50%, 0));
						@include transition(.5s all);
					}
				}
			}

			& > .spinner {
				& {
					position: absolute;
					left: 50%; top: 50%;
					letter-spacing: 0;
					line-height: 0;
					@include transform(translate(-50%, -50%));
				}

				& > div {
					& {
						position: absolute;
						opacity: 0;
						top: 25px;
						left: -10px;
						@include transition(.5s all);
					}

					& > i {
						& {
							position: absolute;
							font-size: #{$font-size + 6};
							letter-spacing: 0;
							line-height: 0;
							color: #ccc;
							animation-name: SpinnTo;
							animation-duration: 1s;
							animation-delay: 0s;
							animation-iteration-count: infinite;
							animation-timing-function: linear;
							@include transform(rotate(0deg));
						}
					}
				}

				&.active {
					& > div {
						& {
							opacity: 1;
							top: 0;
							@include transition(.5s all);
						}
					}
				}
			}
		}

		&.active {
			& > .wrap {
				& {
					left: -100%;
					@include transition(.5s all);
				}
			}

			& > .blue {
				& {
					left: -100%;
					@include transition(.6s all);
				}
			}
			
			& > .red {
				& {
					left: -100%;
					@include transition(.7s all);
				}
			}
		}
	}

	@keyframes SpinnTo {
		from {
			@include transform(rotate(0deg));
		}
		
		to {
			@include transform(rotate(360deg));
		}
	}
</style>
