<template>
    <div class="map">
		<div class="temp" id="map"></div>
        <div class="navigation">
            <div>
                <div class="bar"></div>
                <div class="search">
                    <form>
                        <div>
                            <div class="input">
                                <input type="text" placeholder="검색어를 입력해주세요">
                                <i><font-awesome-icon :icon="faSearch" /></i>
                                <button type="button">
                                    <i><font-awesome-icon :icon="faTimesCircle" /></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { faCog, faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default {
    name : "Map",
	data(){
		return {
			// Icons
			faCog, faSearch, faTimesCircle,

			// Variables
			location : false
		}
	},
	created(){
		this.location = location.href;
	},
	mounted(){
		setTimeout(()=> {
			//this.$refs.OnLoad.LoadOut();
		}, 2000);
		const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
		const options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
			level: 5 //지도의 레벨(확대, 축소 정도)
		};

		const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
		//this.location = location.href;
	}
}
</script>

<style lang="scss" scoped>
    .map {
        & {
            position: absolute;
            left: 0; top: 0;
            width: 100%; height: 100%;
        }

		& > .temp {
			& {
				position: absolute;
				width: 100%; height: 100%;
				left: 0; top: 0;
				color: #fff;
				font-size: #{$font-size + 2};
				z-index: 1;
			}
		}

		& > .navigation{
            & {
                display: block;
                position: absolute;
                left: 0; bottom: 0;
                width: 100%; height: auto;
                background-color: #2a2d32;
                border-top-left-radius:7px;
                border-top-right-radius:7px;
                z-index: 10;
            }

            & > div {
                & {
                    display: block;
                    position: relative;
                    width: 100%; height: auto;
                }
                
                & > .bar {
                    & {
                        display: block;
                        width: 60%; height: 4px;
                        background-color: #545455;
                        margin: 10px auto;
                        border-radius: 15px;
                    }
                }

                & > .search {
                    & {
                        display: block;
                        width: 100%; height: auto;
                        font-size: 0;
                        margin-bottom: 10px;
                    }

                    & > form {
                        & {
                            display: block;
                            width: 100%; height: auto;
                            padding: 0; margin: 0;
                            font-size: 0;
                        }

                        & > div {
                            & {
                                width: 100%; height: auto;
                                padding: 0 15px;
                            }

                            & > .input {
                                & {
                                    position: relative;
                                    display: block;
                                    width: 100%; height: auto;
                                    line-height: 1;
                                    overflow: hidden;
                                }

                                & > input {
                                    & {
                                        display: block;
                                        width: 100%; height: 30px;
                                        background: none; border: 0;
                                        outline: none; cursor: text;
                                        padding: 0; margin: 0;
                                        padding: 0 5px 0 30px;
                                        border-radius: 10px;
                                        background-color: #545455;
                                        color: #ddd;
                                        font-size: #{$font-size - 2};
                                        font-weight: bold;
                                        line-height: 1;
                                        letter-spacing: .5px;
                                    }

                                    &::placeholder {
                                        & {
                                            color: #888;
                                        }
                                    }
                                }

                                & > i {
                                    & {
                                        display: block;
                                        position: absolute;
                                        left: 11px; top: 50%;
                                        font-size: #{$font-size - 2};
                                        color: #ddd;
                                        line-height: 0;
                                        letter-spacing: 0;
                                        @include transform(translateY(-50%));
                                    }
                                }

                                & > button {
                                    & {
                                        position: absolute;
                                        background: none; border: 0;
                                        cursor: pointer; outline: none;
                                        width: 30px; height: 30px;
                                        top: 0; right: 0;
                                        color: #888;
                                        @include transform(translateX(100%));
                                        @include transition(.2s all);
                                    }
                                }

                                & > input:focus ~ button {
                                    & {
                                        @include transform(translateX(0));
                                        @include transition(.2s all);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

<style lang="scss">
	#map {
		& {
			background: none!important;
		}

		& > div:nth-child(2){
			& {
				display: none!important;
			}
		}
	}
</style>
