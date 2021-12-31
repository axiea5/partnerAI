<template>
	<view class="x-search">
		<uni-nav-bar left-icon="back" rightIcon="search" :border="false" @clickLeft="$Fn.turnoff()"
			@clickRight="toSearch">
			<view class="" slot="default">
				<u--input placeholder="搜索币的名称" fontSize="14" border="none" v-model="iptVal"></u--input>
			</view>
		</uni-nav-bar>
		<view class="search-List">
			<view class="df df-betw detail-text c-gary" v-for="item in detailList" :key="item.name">
				<view class="detail-item-center-l df df-col">
					<view class="df df-center">
						<text>{{item.name}}</text>
						<view class="x-tag bg-gray">
							<text class="tag-text">全仓</text>
						</view>
					</view>
					<view>
						持仓金额：{{item.num}}
					</view>
				</view>
				<view class="detail-item-center-r">
					<view class="progress bg-gray">
						<text>{{item.per}}%</text>
					</view>
					<!-- <u-line-progress :percentage="item.per" height="25"></u-line-progress> -->
					<text>预计盈利：0</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				iptVal: '',
				detailList: [{
					name: 'BTC/USDT',
					num: 0,
					per: 0,
					gain: 0
				}]
			};
		},
		methods: {
			toSearch() {

			}
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F8F8F8;
	}

	.x-search {
		.search-List {
			padding: 0 40rpx;
		}

		.detail-text {
			flex-grow: 1;
			border-bottom: 2rpx solid #eee;
			padding: 30rpx 0;
			font-size: 24rpx;
			font-weight: 600;
		}

		.detail-item-center-l {
			justify-content: space-around;
			.x-tag{
				background-color: #fb9649;
				border-radius: 50rpx;
				padding: 4rpx 10rpx;
				.tag-text{
					font-size: 24rpx;
					transform: scale(0.75);
					color: #fff;
				}
			}
		}

		.detail-item-center-r {
			text-align: end;

			.progress {
				width: 180rpx;
				height: 50rpx;
				border-radius: 8rpx;
				background-color:  #02d48f;
				color: #fff;
				line-height: 50rpx;
				text-align: center;
				margin-bottom: 10rpx;
			}
		}
		.c-gary{
			color: #A2a2a2;
		}
		.bg-gray{
			background-color: #dbe0de!important;
		}
	}
</style>
