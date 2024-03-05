export default {
  methods: {
    getDate(timestamp) {
      // 创建一个新的 Date 对象并传递时间戳给它
      const date = new Date(timestamp * 1000);

      // 使用 Date 对象的方法获取年、月和日
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // 月份是从 0 开始计算的，所以要加 1
      const day = date.getDate();

      // 将数字补零到两位数，如果月份或日期小于 10
      const formattedMonth = month < 10 ? '0' + month : month;
      const formattedDay = day < 10 ? '0' + day : day;

      // 最后组合成年月日的格式（例如：YYYY-MM-DD）
      const formattedDate = year + '-' + formattedMonth + '-' + formattedDay;

      return formattedDate;
    },
  },
};
