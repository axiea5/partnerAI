<template>
	<view class="message">
		<u-gap height="10" bgColor="#f5f5f5"></u-gap>
		<!-- 公告列表 -->
		<view class="x-notice">
			<view class="notice-item df df-betw" v-for="item in dataList">
				<text class="text">{{item.text}}</text>
				<text class="date f10">{{item.date}}</text>
			</view>
			<view class="nomore">
				没有更多数据了
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [{
					text: '2021年12月1日 每一个星球都有一个驱动核心，每一种思想都有影响力的种子。',
					date: '11月29号',
					url: ''
				}, {
					text: '公告',
					date: '11月29号',
					url: ''
				}, {
					text: '公告',
					date: '11月29号',
					url: ''
				}, ]
			};
		}
	}
</script>

<style lang="scss" scoped>
	.message {
		.x-head {
			height: 44px;
			line-height: 44px;
			font-weight: 700;
			text-align: center;
			background-color: #ffff;
		}

		.x-notice {
			padding: 0 20rpx;

			.notice-item {
				padding: 36rpx 0;
				border-bottom: 1px solid #f8f8f8;

				.text {
					width: 78%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-weight: 600;
				}

				.date {
					color: #a3a3a3;
				}
			}

			.nomore {
				color: #6a6a6a;
				font-size: 24rpx;
				margin-top: 36rpx;
				text-align: center;
			}
		}
	}
</style>
