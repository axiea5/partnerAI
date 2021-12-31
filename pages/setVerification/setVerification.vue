<template>
	<view class="x-setVerification">
		<view class="setVerification-pg1" v-if="pgShow===1">
			<view class="pg1-img df df-center df-col">
				<image src="../../static/yz.png" mode="widthFix"
					style="width: 286rpx; height: 286rpx;margin-bottom: 20rpx;"></image>
				<text>请在谷歌验证器App中添加一个e账户，并手动输入秘钥。</text>
			</view>
			<view class="pg1-btn" @click="next">
				下一步
			</view>
		</view>
		<view class="setVerification-pg2" v-if="pgShow===2">
			<view class="pg2-big">安全验证</view>
			<view class="pg2-ipt">
				<u--input class="ipt-in" :value="ipt" placeholder="请输入谷歌验证码" prefixIcon="../../static/dun.png"
					@change="changeIpt"></u--input>
			</view>
			<view class="pg2-btn">
				<u-button type="primary" text="提交" :disabled="disabled" color="#4387ea"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pgShow: 1,
				ipt: '',
				disabled: true
			};
		},
		methods: {
			next() {
				this.pgShow = 2
			},
			changeIpt() {
				this.disabled = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.x-setVerification {
		.setVerification-pg1 {
			.pg1-img {
				padding: 210rpx 100rpx;
				text-align: center;
				box-sizing: border-box;
			}

			.pg1-btn {
				height: 88rpx;
				width: 100%;
				background: #4387ea;
				color: #fff;
				position: fixed;
				left: 0;
				bottom: 0;
				text-align: center;
				line-height: 88rpx;
			}
		}

		.setVerification-pg2 {
			.pg2-big {
				font-size: 38rpx;
				padding: 30rpx;
			}

			.pg2-ipt {
				border-bottom: 1px solid #e6e6e6;
				margin: 0 30rpx;
				padding: 30rpx 0;
			}

			.pg2-btn {
				margin: 60rpx 30rpx;
				.u-button--disabled {
					background-color: #dbe0de !important;
					border-color: #dbe0de !important;
				}
			}
		}
	}
</style>
