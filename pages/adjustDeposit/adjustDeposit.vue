<template>
	<view class="x-adjustDeposit">
		<view class="head-in">
			<view class="head-title">
				BTC/USDT
			</view>
			<view class="head-box">
				<view class="box-item df df-betw df-acenter">
					<view class="item-label">
						USDT额度
					</view>
					<u--input placeholder="请输入" border="none" fontSize="14" inputAlign="right" v-model="usdt">
					</u--input>
				</view>
				<view class="box-item df df-betw df-acenter">
					<view class="item-label">
						调整方向
					</view>
					<view class="df">
						<view class="item-tags" v-for="(item, index) in directionList" :key="index">
							<u-tag :text="item.text" :plain="!item.checked" :name="index" @click="tagsCLick(index,1)">
							</u-tag>
						</view>
					</view>
				</view>
				<view class="box-item df df-betw df-acenter">
					<view class="item-label">
						持仓方向
					</view>
					<view class="df">
						<view class="item-tags" v-for="(item, index) in holdList" :key="index">
							<u-tag :text="item.text" :plain="!item.checked" :name="index" @click="tagsCLick(index,2)">
							</u-tag>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="adjustDeposit-btn">
			<u-button text="提交" type="primary">
			</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				usdt: '',
				directionList: [{
					text: '整加',
					checked: true
				}, {
					text: '减少',
					checked: false
				}],
				holdList: [{
					text: '做空',
					checked: true
				}, {
					text: '做多',
					checked: false
				}]
			};
		},
		methods: {
			tagsCLick(name, inx) {
				if (inx === 1) {
					this.directionList.map((item, index) => {
						item.checked = index === name ? true : false
					})
				} else {
					this.holdList.map((item, index) => {
						item.checked = index === name ? true : false
					})
				}
			}
		},
	}
</script>

<style lang="scss">
	page {
		background-color: #F8F8F8;
	}
</style>
<style lang="scss" scoped>
	.x-adjustDeposit {
		position: relative;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			width: 100%;
			height: 260rpx;
			background: linear-gradient(90deg, rgb(65, 140, 241), rgb(0, 101, 235));
		}

		.head-in {
			position: relative;

			.head-title {
				color: #fff;
				font-size: 40rpx;
				text-align: center;
				font-weight: 700;
				padding: 40rpx 0 20rpx;
			}

			.head-box {
				margin: 0 30rpx;
				padding: 40rpx 30rpx;
				background-color: #fff;
				border-radius: 20rpx;
				box-shadow: 0 0 20rpx #0000001a;
			}

			.box-item {
				// border-bottom: 1rpx solid #e6e6e6;
				padding: 30rpx 0;
				position: relative;

				&:after {
					content: '';
					position: absolute;
					width: 100%;
					height: 1px;
					background-color: #e6e6e6;
					bottom: 0;
					transform: scaleY(.5);
				}

				&:last-child:after {
					display: none;
				}
			}

			.item-tags {
				margin-left: 40rpx;
			}
		}

		.adjustDeposit-btn {
			margin: 40rpx 30rpx 0;
			border-radius: 12rpx;
			overflow: hidden;
		}
	}
</style>
