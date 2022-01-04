<template>
	<view class="home">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<!-- 轮播图 -->
		<view class="x-swiper">
			<swiper class="swiper" :indicator-dots="true" :indicator-active-color="'#fff'" :autoplay="true">
				<swiper-item v-for="item in navbar" :item-id="item.img">
					<image :src="item.img" mode="heightFix"></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 通告 -->
		<u-notice-bar class="notice" :text="notice" direction="column" mode="link" :url="'/pages/message/message'"
			color="#333" bgColor="#fff" linkType="switchTab"></u-notice-bar>

		<!-- 授权、客服、注册 -->
		<view class="advertising">
			<view class="ad-item" v-for="item in advertising" :key="item.img" @click="$Fn.toPage(item.url)">
				<image :src="item.img"></image>
			</view>
		</view>

		<!-- 灰色 -->
		<view class="line"></view>

		<!-- 表格 -->
		<view class="x-table">
			<view class="x-table-head">
				行情
			</view>
			<uni-table class="x-table-in">
				<!-- 表头行 -->
				<uni-tr>
					<uni-th align="center" width="30">币种</uni-th>
					<uni-th align="center" width="85"></uni-th>
					<uni-th align="center" width="150" :sortable="true">币市值(CNY)</uni-th>
					<uni-th align="center" width="80" :sortable="true">价格</uni-th>
				</uni-tr>
				<!-- 表格数据行 -->
				<uni-tr>
					<uni-td>
						<view class="f10">
							001
						</view>
					</uni-td>
					<uni-td class="kind">
						<view class="dark">BTC</view>
						<text class="f10">比特币/<br />Bitcion</text>
					</uni-td>
					<uni-td>
						<view class="dark">5.3829万亿</view>
						<text class="f10">H:3597.0634552089</text>
					</uni-td>
					<uni-td class="align-r">
						<view class="red">$46688.7</view>
						<text class="red f10">-1.17%</text>
					</uni-td>
				</uni-tr>

				<uni-tr>
					<uni-td>
						<view class="f10">
							002
						</view>
					</uni-td>
					<uni-td class="kind">
						<view class="dark">ETH</view>
						<text class="f10">以太坊/<br />Ethereum</text>
					</uni-td>
					<uni-td>
						<view class="dark">2.6923万亿</view>
						<text class="f10">24H:5.8667</text>
					</uni-td>
					<uni-td class="align-r">
						<view class="red">$3876.22</view>
						<text class="red f10">-5.04%</text>
					</uni-td>
				</uni-tr>
			</uni-table>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				notice: ['公告', '震惊，一女子竟然...', '公告'],
				navbar: [{
					img: '../../static/test.png'
				}, {
					img: '../../static/test.png'
				}],
				advertising: [{
					img: '../../static/ad1.png',
					text: 1,
					url: '../authorize/authorize'
				}, {
					img: '../../static/ad2.png',
					text: 2,
					url: '../service/service'
				}, {
					img: '../../static/ad3.png',
					text: 3
				}, {
					img: '../../static/ad4.png',
					text: 4
				}]
			}
		},
		mounted() {
			this.$nextTick(() => {
				document.getElementsByClassName('uni-table')[0].removeAttribute('style')
			})
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.home {
		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
		}

		.x-swiper {
			height: 278rpx;
			padding: 25rpx 25rpx 0;

			.swiper {
				height: 278rpx;
				border-radius: 20rpx;
				overflow: hidden;
			}
		}

		.notice {
			border-bottom: 1px solid #f2f2f2;

			/deep/.u-notice__left-icon {
				.u-icon__icon {
					color: #e86c62 !important;
				}
			}
		}

		.advertising {
			padding: 0 20rpx 20rpx;
			height: 400rpx;
			box-sizing: border-box;
			display: grid;
			grid-template-columns: auto auto;
			grid-gap: 20rpx;

			.ad-item {
				uni-image {
					width: 100%;
					height: 100%;
				}
			}

		}

		.line {
			height: 20rpx;
			width: 100%;
			background-color: #f7f7f7;
		}

		.x-table {
			padding: 24rpx 20rpx 40rpx 20rpx;

			.x-table-head {
				color: #000000;
				font-size: 34rpx;
				font-weight: 700;
				border-bottom: 2rpx solid #f8f8f8;
				padding-bottom: 26rpx;
			}

			.x-table-in {
				width: 100%;

				th,
				td {
					color: #999;
					font-size: 24rpx;
				}

				.dark {
					color: #000;
				}

				.red {
					color: #fe2800;
				}

				.align-r {
					text-align: right !important;
				}

				.uni-table-th {
					padding: 12px 0;
				}

				uni-text {
					overflow: hidden;
					width: 100%;
				}
			}
		}
	}
</style>
