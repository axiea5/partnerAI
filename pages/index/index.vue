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
			<lyy-table :contents="contents" :headers="tableHeaders" :totalRow="[]"></lyy-table>
		</view>
	</view>
</template>

<script>
	import lyyTable from '@/components/lyy-table/lyy-table.vue'
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
				}],
				tableHeaders: [{
					label: '币种',
					width: 32,
					key:'index',
					format: {
						type: 'index'
					}
				}, {
					label: '',
					key: 'name',
					width: 85,
					format: {
						type: 'html',
						keys: ['bname', 'tname', 'tname2'],
						template: "<p class='dark'>{0}</p><text class='f10'>{1}/<br />{2}</text>"
					}
				}, {
					label: '币市值(CNY)',
					key: 'cny',
					width: 155,
					sort: true,
					format: {
						type: 'html',
						keys: ['bcny', 'tcny'],
						template: "<p class='dark'>{0}万亿</p><text class='f10'>24H:{1}</text>"
					}
				}, {
					label: '价格',
					key: 'price',
					width: 83,
					sort: true,
					format: {
						type: 'html',
						keys: ['bprice', 'tprice'],
						template: "<p class='red'>${0}</p><text class='red f10'>{1}%</text>"
					}
				}],
				contents: [{
					'bname': 'BTC',
					'tname': '比特币',
					'tname2': 'Bitcion',
					'bcny': 5.3829,
					'tcny': 3597.0634552089,
					'bprice': 46688.7,
					'tprice': -1.17
				}, {
					'bname': 'ETH',
					'tname': '以太坊',
					'tname2': 'Ethereum',
					'bcny': 2.6923,
					'tcny': 5.8667,
					'bprice': 3876.22,
					'tprice': -5.04
				}, {
					'bname': 'LTC',
					'tname': '莱特币',
					'tname2': '',
					'bcny': 558.9989,
					'tcny': 4.2981,
					'bprice': 3876.22,
					'tprice': -5.04
				}]
			}
		},
		components: {
			lyyTable
		},
		mounted() {
			this.$nextTick(() => {
				document.getElementsByClassName('x-table-in')[0].removeAttribute('style')
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
			padding: 20rpx;
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
				/deep/.uni-table {
					width: 100%;

					th,
					td {
						color: #999;

					}

					.dark {
						color: #000;
						font-weight: 600;
					}

					.red {
						color: #fe2800;
						font-weight: 600;
					}

					.align-r {
						text-align: right !important;
					}

					.uni-table-th {
						padding: 12px 0;
						font-size: 24rpx;
					}

					.uni-table-td {
						vertical-align: middle;
						padding: 16rpx 0;
						font-size: 24rpx;

						p {
							font-size: 30rpx;
						}

						uni-text {
							overflow: hidden;
							width: 100%;
						}
					}

				}

			}
		}
	}
</style>
