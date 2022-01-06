<template>
	<view class="x-uAccount">
		<view class="uAccount-head df df-betw " v-if="accountType===1">
			<view class="head-l">
				<view>点击按钮同步币安合约U本账户信息</view>
				<view class="f12">
					上次同步时间：--
				</view>
			</view>
			<view class="head-r">
				<u-button type="primary" text="立即同步"></u-button>
			</view>
		</view>

		<view class="uAccount-group" v-if="accountType===1">
			<view class="group-head">
				币安合约U本资产
			</view>
			<u-cell-group class="group-in">
				<u-cell v-for="item in cellList" :key="item.title" :title="item.title" :value="item.value"></u-cell>
			</u-cell-group>
		</view>
		<view class="uAccount-group" v-else>
			<view class="group-head df df-betw df-acenter">
				<text>欧易合约U本资产</text>
				<view class="group-head-btn">
					<u-button text="立即同步" type="primary">
					</u-button>
				</view>
			</view>
			<u-cell-group class="group-in">
				<u-cell v-for="item in cellList2" :key="item.title" :title="item.title" :value="item.value"></u-cell>
			</u-cell-group>
		</view>
		<u-gap height="10" bgColor="#f5f5f5"></u-gap>

		<view class="uAccount-group" v-if="accountType===1">
			<view class="group-head">
				币安合约U本持仓(BTCUSDT)
			</view>
			<uni-table stripe class="uAccount-table">
				<uni-tr>
					<uni-th align="center" v-for="item in tableHeaders" :key="item.key" style="width: 33%;">
						{{item.label}}
					</uni-th>
				</uni-tr>
				<uni-tr v-for="content in contents" :key="content.name">
					<uni-td v-for="head in tableHeaders" align="center">{{content[head.key]}}</uni-td>
				</uni-tr>
			</uni-table>
		</view>

		<view class="uAccount-group" v-else>
			<view class="group-head df df-betw df-acenter">
				<text>欧易合约U本持仓()</text>
				<view class="group-head-btn">
					<u-button text="立即同步" type="primary">
					</u-button>
				</view>
			</view>
			<u-cell-group class="group-in">
				<u-cell v-for="item in cellList3" :key="item.title" :title="item.title" :value="item.value"></u-cell>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	import lyyTable from '@/components/lyy-table/lyy-table.vue'
	export default {
		data() {
			return {
				cellList: [{
					title: '币安合约U本资产',
					value: 'USDT'
				}, {
					title: '起始保证金',
					value: '0'
				}, {
					title: '维持保证金',
					value: '0'
				}, {
					title: '保证金余额',
					value: '0'
				}, {
					title: '总持仓盈亏',
					value: '0'
				}, {
					title: '全仓账户余额',
					value: '0'
				}, {
					title: '全仓持仓盈亏',
					value: '0'
				}, {
					title: '可用余额',
					value: '0'
				}],
				tableHeaders: [{
					label: '',
					key: 'name'
				}, {
					label: '做多',
					key: 'large'
				}, {
					label: '做空',
					key: 'zero'
				}],
				contents: [{
					name: '起始保证金',
					large: 0,
					zero: 0
				}, {
					name: '维持保证金',
					large: 0,
					zero: 0
				}, {
					name: '持仓盈亏',
					large: 0,
					zero: 0
				}, {
					name: '当前杠杆倍数',
					large: 0,
					zero: 0
				}, {
					name: '最大持仓金额',
					large: 0,
					zero: 0
				}, {
					name: '持仓模式',
					large: '全仓',
					zero: '全仓'
				}, {
					name: '持仓成本价',
					large: 0,
					zero: 0
				}, {
					name: '持仓数量',
					large: 0,
					zero: 0
				}],
				accountType: 1,
				cellList2: [{
					title: '资产单位',
					value: ''
				}, {
					title: '资产总额',
					value: ''
				}, {
					title: '可用保证金',
					value: ''
				}, {
					title: '总持仓盈亏',
					value: ''
				}, {
					title: '逐仓持仓盈亏',
					value: ''
				}, {
					title: '保证金率',
					value: ''
				}, {
					title: '全仓持仓盈亏',
					value: ''
				}],
				cellList3: [{
					title: '保证金模式',
					value: ''
				}, {
					title: '持仓方向',
					value: ''
				}, {
					title: '杠杆倍数',
					value: ''
				}, {
					title: '开仓平均价',
					value: ''
				}, {
					title: '最新成交价',
					value: ''
				}, {
					title: '标记价格',
					value: ''
				}, {
					title: '预估强平价',
					value: ''
				}, {
					title: '持仓盈亏',
					value: ''
				}, {
					title: '未实现收益率',
					value: ''
				}, {
					title: '保证金率',
					value: ''
				}, {
					title: '维持保证金',
					value: ''
				}, {
					title: '持仓创建时间',
					value: ''
				}, {
					title: '最近持仓更新',
					value: ''
				}]
			};
		},
		components: {
			lyyTable
		},
		onLoad: function(option) {
			this.accountType = option.type
			if (option.type === 2) {
				uni.setNavigationBarTitle({
					title: 'OKEx合约U本账户'
				})
			}
		},
		mounted() {
			this.$nextTick(() => {
				document.getElementsByClassName('uni-table')[0].removeAttribute('style')
			})
		},
		methods: {

		},
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}
</style>
<style lang="scss" scoped>
	.x-uAccount {
		padding-bottom: 40rpx;

		.uAccount-head {
			background-color: #e9eff9;
			padding: 20rpx 30rpx;

			.head-l {
				color: #4387ea;

				.f12 {
					font-size: 24rpx;
					margin-top: 8rpx;
				}
			}
		}

		.uAccount-group {

			.group-head {
				padding: 30rpx;
				font-size: 30rpx;
				font-weight: 700;

				.group-head-btn {
					width: 180rpx;

					.u-button {
						height: 72rpx;
					}
				}
			}

			.group-in {
				margin: 0 30rpx;

				/deep/.u-cell-group__wrapper {
					.u-cell__body {
						padding: 20rpx 0;
					}

					.u-cell__title-text {
						font-size: 28rpx;
					}

					:last-child.u-cell {
						.u-line {
							display: none;
						}
					}
				}
			}

			.uAccount-table {
				.uni-table-th {
					background-color: #4387ea;
					color: #FFFFFF;
				}

				/deep/.uni-table-tr:nth-child(2n + 3) {
					background-color: #e9eff9;
				}
			}
		}
	}
</style>
