<template>
	<view class="x-securityQuestion">
		<view class="x-form">
			<u--form labelPosition="left" labelWidth="auto" errorType="'none'" :model="form" :rules="rules" ref="form">
				<u-form-item label="原密保问题:" @click="show1=true" borderBottom ref="quest1">
					<u--input disabled disabledColor="#ffffff" fontSize="14" v-model="form.quest1" border="none">
					</u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item label="原密保答案" prop="answer1" borderBottom ref="answer1">
					<u--input v-model="form.answer1" border="none" fontSize="14" placeholder="输入密保答案"></u--input>
				</u-form-item>
				<u-form-item label="新密保问题:" @click="show2=true" borderBottom ref="quest2">
					<u--input disabled disabledColor="#ffffff" fontSize="14" v-model="form.quest2" border="none">
					</u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item label="新密保答案" prop="answer2" borderBottom ref="answer2">
					<u--input v-model="form.answer2" border="none" fontSize="14" placeholder="输入密保答案"></u--input>
				</u-form-item>
			</u--form>
			<!-- 原密保问题-点击弹窗 -->
			<u-action-sheet :actions="alertList1" @close="show1=false" :closeOnClickOverlay="true"
				:closeOnClickAction="true" :cancelText="'取消'" class="x-action" :show="show1" :round="5"
				@select="alertClick1"></u-action-sheet>
			<!-- 新密保问题-点击弹窗 -->
			<u-action-sheet :actions="alertList2" @close="show2=false" :closeOnClickOverlay="true"
				:closeOnClickAction="true" :cancelText="'取消'" class="x-action" :show="show2" :round="5"
				@select="alertClick2"></u-action-sheet>
		</view>

		<view class="x-btn">
			<u-button text="确认" type="primary" @click="submit" color="linear-gradient(to right,#418cf1,#0065eb)">
			</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show1: false,
				show2: false,
				alertList1: [{
					name: '我就读的第一所小学名称'
				}, {
					name: '我的初中班主任姓名'
				}],
				alertList2: [{
					name: '我母亲姓名'
				}, {
					name: '我父亲姓名'
				}, {
					name: '我父亲职业'
				}, {
					name: '我母亲职业'
				}, {
					name: '我就读的第一所小学名称'
				}, {
					name: '我的出生地是'
				}, {
					name: '我的初中班主任姓名'
				}, {
					name: '我最爱的人的名字'
				}],
				form: {
					quest1: '',
					answer1: '',
					quest2: '',
					answer2: ''
				},
				rules: {
					answer1: {
						required: true,
						message: '原密保问题答案不能为空！',
						trigger: ['change', 'blur']
					},
					answer2: {
						required: true,
						message: '新密保问题答案不能为空！',
						trigger: ['change', 'blur']
					}
				}
			};
		},
		onLoad() {
			this.form.quest1 = this.alertList1[0].name
			this.form.quest2 = this.alertList1[0].name
		},
		methods: {
			alertClick1(item) {
				console.log(item);
				this.form.quest1 = item.name
			},
			alertClick2(item) {
				console.log(item);
				this.form.quest2 = item.name
			},
			submit() {
				this.$refs.form.validate().then(res => {
					uni.$u.toast('校验通过')
				}).catch(errors => {
					uni.$u.toast(errors[0].message)
					console.log(errors);
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}
</style>
<style lang="scss" scoped>
	.x-securityQuestion {
		.x-form {
			background-color: #fff;
			padding: 0 20rpx;
		}

		.x-btn {
			margin: 100rpx 30rpx 0;
		}
	}
</style>
