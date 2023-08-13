function formatDate(date) {
    for (let i = 0; i < date.length; i++) {
      if (date[i] === "-") {
        date = date.slice(0, i) + " " + date.slice(i + 1);
      }
    }
    const dateArr = date.split(" ");
    
    const day = dateArr[0];
    const month = dateArr[1];
    const year = dateArr[2];

    return "It is day " + day + " of month " + month + " of year " + year;
  }

  const dateStr = "17-06-1995";
  const formattedDate = formatDate(dateStr);
  console.log(formattedDate);