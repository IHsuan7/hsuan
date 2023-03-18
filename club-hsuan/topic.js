var topic = [
    "開學",
    "熟悉環境",
    "社團期初",
    "中秋節假期",
    "繳交第一次報告"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(9,5);