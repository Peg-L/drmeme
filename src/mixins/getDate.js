export default {
  methods: {
    getDate(timestamp) {
      // 使用 Date 對象的 setTime() 方法將秒數設置為 Date 對象的屬性
      const date = new Date();
      date.setTime(timestamp);

      // 使用 Date 對象的 getFullYear()、getMonth() 和 getDate() 方法分別獲取年、月和日
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // 月份從 0 開始，所以需要加 1
      const day = date.getDate();

      // 將年、月和日組合成年/月/日格式
      const formattedDate = `${year}/${month}/${day}`;

      return formattedDate;
    },
  },
};
