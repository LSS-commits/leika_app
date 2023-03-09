# Leika Bank App
This is the front-end code of a simple, fluid and intuitive banking application built with Angular.

![Preview app](https://github.com/LSS-commits/leika_app/blob/main/screen_leika_front.PNG?raw=true)

# Overview
- Transaction history displayed in a clear, readable and uncluttered way
- Transactions displayed according to their status:
    - pending (to be validated with the user's secret code)
    - upcoming
    - rejected 
- Visualize credit card information
- Optimized navigation (tabs) 
- User can generate a Bank Identity Statement in pdf format 
- Secure authentication

# Also used
- Bootstrap and CSS for personalization
- jsPdf and html2canvas to generate the user's Bank Identity Statement
- Chartjs for bank flow visualization charts

# Proposed improvements
- TODO
    - validate pending operations
    - manage bank transfers and associated beneficiaries
    - create related statitics and graphs
    - enable the management of the profile and settings of the app
    
- Code quality
    - tidy up files
    - set up routing to optimize loading (lazy loading)
    - change the structure of the application to implement a parent-child component logic and thus separate route components from subcomponents

# Back-end code
The code for the back-end API: [Leika API](https://github.com/LSS-commits/leika_api)


