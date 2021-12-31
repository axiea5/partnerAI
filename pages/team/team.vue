<template>
	<view class="x-team">
		<view class="team-head df df-center">
			<view class="blue"></view>
			<text>团队明细</text>
		</view>
		<view class="hasno">暂无数据</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F8f8f8;
	}

	.x-team {
		padding: 54rpx 30rpx 40rpx;
		.team-head {
			.blue {
				width: 10rpx;
				height: 58rpx;
				background-color: #1a77ec;
				margin-right: 10rpx;
			}
		}

		.hasno {
			margin-top: 60rpx;
			text-align: center;
			color: #666;
		}
	}
</style>
