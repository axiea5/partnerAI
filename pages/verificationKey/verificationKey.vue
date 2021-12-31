<template>
	<view class="x-verificationKey">
		<view class="verificationKey-tag">
			请将16位秘钥记录在纸上，并保存在安全的地方。如遇手机丢失,你可以通过该秘钥恢复你的谷歌验证。
		</view>
		<!-- 密钥 -->
		<view class="verificationKey">
			<!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
			<!-- #ifndef APP-NVUE -->
			<u-input v-model="verificationKey" disabled disabledColor="#f1f1f1">
				<!-- #endif -->
				<!-- #ifdef APP-NVUE -->
				<u--input v-model="verificationKey" disabled disabledColor="#f1f1f1">
					<!-- #endif -->
					<template slot="suffix">
						<text class="blue" @click="copy">复制</text>
					</template>
					<!-- #ifndef APP-NVUE -->
			</u-input>
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			</u--input>
			<!-- #endif -->
		</view>

		<!-- google -->
		<view class="down" @click="download">
			未安装Google验证器app，去下载?
		</view>

		<view class="open" @click="$Fn.toPage('../setVerification/setVerification')">
			去开启
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				verificationKey: 'NRTHSOLSHBXXM3CV'
			};
		},
		methods: {
			copy() {
				uni.setClipboardData({
					data: this.verificationKey,
					success: function() {
						console.log('success');
					}
				});
			},
			download() {
				// 跳转外部链接h5
				// #ifdef H5
				window.location.href = 'http://h5.bxerpro.com/down/GoogleAuthenticator.apk';
				// #endif
				// #ifdef APP-PLUS
				plus.runtime.openURL('http://h5.bxerpro.com/down/GoogleAuthenticator.apk') //不需要拼接
				// plus.runtime.openURL(`http://${jumpUrl}`)//需要拼接
				// #endif
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #f8f8f8;
	}

	.x-verificationKey {
		.verificationKey-tag {
			background-color: #4388ea;
			padding: 50rpx 40rpx;
			color: #fff;
			line-height: 1.75;

		}

		.verificationKey {
			margin: 104rpx 30rpx 88rpx;

			.blue {
				color: #1453c7;
			}
		}

		.down {
			margin: 0 30rpx;
			text-decoration: underline;
			color: #999;
			font-size: 26rpx;
		}

		.open {
			height: 88rpx;
			width: 100%;
			background-color: #4388e8;
			color: #fff;
			text-align: center;
			line-height: 88rpx;
			position: absolute;
			bottom: 0;
		}
	}
</style>
