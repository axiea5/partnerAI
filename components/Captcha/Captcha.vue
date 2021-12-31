<template>
	<view class="Captcha">
		<view v-show="capShow">
			<canvas style="width: 202rpx; height: 88rpx;background:white" canvas-id="js-captcha"
				@tap="tapCaptcha">
				</canvas>
		</view>
	</view>
</template>
<script>
	export default {
		name: "Captcha",
		data() {
			// 验证码字符集
			const arr = [2, 3, 4, 5, 6, 7, 8, 9];
			for (var i = 48; i < 58; i++) {
				if (i > 90 && i < 97) {
					continue;
				}
				arr.push(String.fromCharCode(i));
			}
			return {
				capValue: "",
				capShow: true,

				character: arr
			};
		},
		mounted() {
			this.creatCanvas();
		},
		methods: {
			// 初始化canvas
			creatCanvas() {
				let str = "";
				this.capValue = "";

				// 随机字符
				for (var i = 0; i < 4; i++) {
					var a = this.character[
						Math.floor(Math.random() * this.character.length)
					];
					str += a;
					this.capValue += a;
				}

				// 随机颜色
				function setColor() {
					var colorValue = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
					var colorArray = colorValue.split(",");
					var color = "#";
					for (var i = 0; i < 6; i++) {
						color += colorArray[Math.floor(Math.random() * 16)];
					}
					return color;
				}
				// console.log(Math.floor(Math.random() * 8 - 4));

				// 创建画布
				var ctx = uni.createCanvasContext("js-captcha");

				// 数字字母
				ctx.setFontSize(20 + Math.floor(Math.random() * 4 - 2));
				ctx.setFillStyle(setColor());
				for (let i = 0; i < 4; i++) {
					ctx.setFontSize(20 + Math.floor(Math.random() * 4 - 2));
					ctx.fillText(str[i], 20 * i + 10, 32);
					ctx.setFillStyle(setColor());
					// 旋转随机在-3到3之间
					ctx.rotate((Math.floor(Math.random() * 6 - 3) * Math.PI) / 180);
				}

				// 直线
				// begin path
				for (let i = 0; i < 7; i++) {
					ctx.beginPath();
					ctx.setStrokeStyle(setColor());
					// x/-10~110 y/-10~50
					ctx.moveTo(
						Math.floor(Math.random() * 100) + Math.floor(Math.random() * 20 - 10),
						Math.floor(Math.random() * 40) + Math.floor(Math.random() * 20 - 10)
					);
					ctx.lineTo(
						Math.floor(Math.random() * 100) + Math.floor(Math.random() * 20 - 10),
						Math.floor(Math.random() * 40) + Math.floor(Math.random() * 20 - 10)
					);
					ctx.stroke();
				}
				
				// 点
				for (var i = 0; i < 25; i++) {
					ctx.fillStyle = setColor();
					ctx.beginPath();
					ctx.arc(Math.floor(Math.random() * 100) + Math.floor(Math.random() * 20 - 10),Math.floor(Math.random() * 40) + Math.floor(Math.random() * 20 - 10), 1, 0, 2 *
						Math.PI);
					ctx.fill();
				}

				ctx.draw();
			},
			// 点击画布重置初始化方法，达到切换验证码效果
			tapCaptcha() {
				this.capShow = false;

				this.$nextTick(() => {
					this.capShow = true;
					this.creatCanvas();
				});
			}
		},
		watch: {
			// 通过监听验证码 向父组件传递值
			capValue: {
				handler(newVal) {
					this.$emit("captcha", this.capValue);
				}
			}
		}
	};
</script>
