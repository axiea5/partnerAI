<template>
	<view class="x-financialTransition">
		<!-- 不是很想写这块 -->
		<!-- 但是我又不得不写，哎 -->
		<view class="financialTransition-head df df-acenter df-betw">
			<!-- 左边dot -->
			<view class="dotList df df-acenter df-col df-betw">
				<view class="blue big"></view>
				<view class="dot"></view>
				<view class="dot"></view>
				<view class="dot"></view>
				<view class="red big"></view>
			</view>
			<!-- 从。。到。。start -->
			<!-- 兑换 -->
			<view class="head-center" v-if="optionIndex===1">
				<view class="formTo boderb">
					<text class="gray">从</text>
					<text>USDT</text>
				</view>
				<view class="formTo">
					<text class="gray">到</text>
					<text>点卡</text>
				</view>
			</view>
			<!-- 充币 -->
			<view class="head-center" v-if="optionIndex===2">
				<view class="formTo boderb positionR" @click="selectShow=true">
					<text class="gray">从</text>
					<text>{{transFrom}}</text>
					<view class="arrow-down">
						<u-icon name="arrow-down" color="#666" :bold="true" size="15"></u-icon>
					</view>
					<view class="select-box" v-if="selectShow">
						<view class="select-item" @click.stop="selectVal(2,'收益')">
							收益
						</view>
						<view class="select-item" @click.stop="selectVal(2,'USDT')">
							USDT
						</view>
					</view>
				</view>
				<view class="formTo">
					<text class="gray">到</text>
					<text>点卡</text>
				</view>
			</view>
			<!-- 转换 -->
			<view class="head-center" v-if="optionIndex===3">
				<view class="formTo boderb ">
					<text class="gray">从</text>
					<text>收益</text>	
				</view>
				<view class="formTo positionR" @click="selectShow=true">
					<text class="gray">到</text>
					<text>{{transTo}}</text>
					<view class="arrow-down">
						<u-icon name="arrow-down" color="#666" :bold="true" size="15"></u-icon>
					</view>
					<view class="select-box" v-if="selectShow">
						<view class="select-item" @click.stop="selectVal(3,'点卡')">
							点卡
						</view>
						<view class="select-item" @click.stop="selectVal(3,'USDT')">
							USDT
						</view>
					</view>
				</view>
			</view>
			<!-- 从。。到。。 end -->
			
			<!-- 转换图标 -->
			<view class="head-right df-acenter df df-jcenter">
				<image class="right-img" src="../../static/zhuanhuan.png" mode="scaleToFill"
					style="width:50rpx;height:66rpx ;"></image>
			</view>
		</view>

		<view class="financialTransition-ipt">
			<view class="ipt-label">
				数量
			</view>
			<view class="df">
				<u--input v-model="num" type="number" border="none" fontSize="14"
					:placeholder="optionIndex===2?'请输入提币数量':'请输入转换数量'" @change="changeIpt" @blur="iptNum=num">
				</u--input>
				<text class="all" v-if="optionIndex===2">USDT</text>
				<u-line direction="col" color="#ccc" length="20"></u-line>
				<text class="all" @click="num=total;iptNum=total">全部</text>
			</view>
			<view class="little">
				<text>可转换 {{total}} <text v-if="optionIndex===2" :decode="true"> {{''}} USDT</text></text>
			</view>
			<view class="ipt-label">
				支付密码
			</view>
			<u--input v-model="pay" :password="true" border="none" fontSize="14" placeholder="请输入支付密码"
				@change="changeIpt"></u--input>
			<view class="little2">
				<text class="text-tips">
					为保障资金安全，该账户安全策略变更，密码修改，我们会对转换进行人工审核，请耐心等待工作人员电话或邮件联系
				</text>
			</view>
			<view class="ipt-label df df-betw">
				<text>到账数量</text>
				<text>{{ iptNum }} <text v-if="optionIndex===2">{{' '}}点卡</text></text>
			</view>
			<view class="x-btn">
				<u-button type="primary" text="兑换" :disabled="disabled"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: '',
				pay: '',
				iptNum: 0,
				total: 0,
				disabled: true,
				transFrom: 'USDT',
				transTo: '点卡',
				optionIndex: 1,
				selectShow: false
			};
		},
		onLoad: function(option) {
			uni.setNavigationBarTitle({
				title: option.name
			})
			if (option.name === '兑换') {
				this.optionIndex = 1
			} else if (option.name === '充币') {
				this.optionIndex = 2
			} else {
				this.optionIndex = 3
			}
		},
		methods: {
			changeIpt() {
				if (!uni.$u.test.isEmpty(this.num) && !uni.$u.test.isEmpty(this.pay)) {
					this.disabled = false
				} else {
					this.disabled = true
				}
			},
			selectVal(index, val) {
				if (index === 2) {
					this.selectShow = false
					this.transFrom = val
					console.log(this.selectShow);
				}else{
					this.selectShow = false
					this.transTo = val
				}
			}
		},
	}
</script>
<style lang="scss">
	page {
		background-color: #f8f8f8;
	}
</style>
<style lang="scss" scoped>
	.x-financialTransition {
		.financialTransition-head {
			margin: 30rpx 30rpx 0;
			border: 2rpx #ddd solid;
			border-radius: 12rpx;

			.dotList {
				width: 100rpx;
				height: 108rpx;

				.dot {
					width: 10rpx;
					height: 10rpx;
					background-color: #ddd;
					border-radius: 50%;
				}

				.big {
					width: 16rpx;
					height: 16rpx;
					border-radius: 50%;
				}

				.blue {
					background-color: #0266eb;
				}

				.red {
					background-color: #f33;
				}
			}

			.head-center {
				border-right: 2rpx solid #ddd;
				flex-grow: 1;

				.formTo {
					font-weight: 600;
					line-height: 100rpx;

					.gray {
						color: #ccc;
						margin-right: 20rpx;
					}
				}

				.boderb {
					border-bottom: 1px solid #ddd;
				}

				.positionR {
					position: relative;
				}

				.arrow-down {
					position: absolute;
					right: 30rpx;
					top: 40%;
				}

				.select-box {
					background-color: #e7f0fd;
					position: absolute;
					top: 100rpx;
					width: 100%;
					z-index: 99;

					.select-item {
						padding-left: 50rpx;
						line-height: 80rpx;

						&:first-child {
							border-bottom: 1px solid #ddd;
						}
					}
				}
			}

			.head-right {
				width: 140rpx;
				height: 200rpx;
				background-color: #eee;

				.right-img {
					filter: grayscale(90%);
				}

			}
		}

		.financialTransition-ipt {
			padding: 0 30rpx;

			.ipt-label {
				padding: 30.8rpx 0;
			}

			.all {
				font-weight: 600;
				padding: 0 20rpx;
			}

			.little {
				margin-top: 50rpx;
				color: #989898;
				transform: scale(0.8333) translateX(-66rpx);
				font-size: 24rpx;
			}

			.little2 {
				margin-top: 40rpx;
				background-color: #f6f5fa;
				padding: 30rpx;

				.text-tips {
					color: #989898;
					transform: scale(0.8333) translateX(-66rpx);
					font-size: 24rpx;
				}
			}

			.x-btn {
				margin-top: 30rpx;
			}
		}

	}
</style>
