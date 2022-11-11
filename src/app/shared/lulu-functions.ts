export class LuluFormatFunctions {

  static formatAmount(num: any) {
    const formatedamount = String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');
    return formatedamount;
  }

  static formatDate(date: any) {
    date = new Date(date);

  return [
     ("0" + date.getDate()).slice(-2),           // Get day and pad it with zeroes
     ("0" + (date.getMonth()+1)).slice(-2),      // Get month and pad it with zeroes
     date.getFullYear()                          // Get full year
  ].join('/');  
  
  }
}