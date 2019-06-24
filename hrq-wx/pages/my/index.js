// pages/my/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		userInfo: {}
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getUserInfo();
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		console.log(1)
		let userInfo = wx.getStorageSync('userInfo');
		console.log(userInfo);
		if(userInfo) {
			this.setData({
				userInfo: userInfo
			})
		}
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},

	getUserInfo: function() {
		wx.getSetting({
			success: res => {
				console.log(res.authSetting)
				if (!res.authSetting['scope.userInfo']) {
					console.log("未授权");
					wx.navigateTo({
						url: '/pages/authorize/index',
					})
				}
			}
		})
		
	}
})