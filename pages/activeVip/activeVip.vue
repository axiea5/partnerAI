<template>
	<view class="x-activeVip">
		<view class="top-up">
			<view class="up-item df df-col df-center" :class="activeIndex===index&&'active'" v-for="(item,index) in dataList" :key="index" @click="activeVip(index)">
				<text class="bold">{{item.text1}}个月</text>
				<text class="blue bold">{{item.text2}}USDT</text>
				<text>{{item.text3}}个月</text>
			</view>
		</view>
		<view class="x-btn">
			<u-button type="primary" text="立即支付" color="#4387ea"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [{
					text1: 1,
					text2: 60,
					text3: 1
				}, {
					text1: 6,
					text2: 150,
					text3: 6
				}, {
					text1: 12,
					text2: 200,
					text3: 12
				}],
				activeIndex:false
			};
		},
		methods:{
			activeVip(index){
				this.activeIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
		height: 100%;
		overflow: hidden;
	}

	.x-activeVip {
		.top-up {
			margin: 28rpx 24rpx 0;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-column-gap: 20rpx;
			.up-item{
				border-radius: 8rpx;
				border: 2rpx solid #eee;
				padding: 44rpx 0;
				font-size: 24rpx;
				.bold{
					font-weight: 700;
				}
				.blue{
					color: #4080da;
					margin: 26rpx 0;
				}
			}
			.active{
				border-color: #4387ea;
			}
		}
		.x-btn{
			position: absolute;
			bottom: 38rpx;
			left: 28rpx;
			right: 28rpx;
		}
	}
</style>
