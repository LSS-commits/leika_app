# Leika Bank App
This is the front-end code of a simple, fluid and intuitive banking application built with Angular.

Log in

![Preview app 1](https://github.com/LSS-commits/leika_app/blob/main/leikaapp_1.png?raw=true)


Transactions

![Preview app 2](https://github.com/LSS-commits/leika_app/blob/main/leikaapp_2.png?raw=true)


Cards

![Preview app 3](https://github.com/LSS-commits/leika_app/blob/main/leikaapp_3.png?raw=true)


Moves/Transfers

![Preview app 4](https://github.com/LSS-commits/leika_app/blob/main/leikaapp_6.png?raw=true)


## Overview
- Transaction history displayed in a clear, readable and uncluttered way
- Transactions displayed according to their status:
    - pending (to be validated with the user's secret code)
    - upcoming
    - rejected 
- Visualize credit card information
- Optimized navigation (tabs) 
- User can generate a Bank Identity Statement in pdf format 
- Secure authentication

## Also used
- Bootstrap and CSS for personalization
- jsPdf and html2canvas to generate the user's Bank Identity Statement
- Chartjs for bank flow visualization charts

## Proposed improvements
- TODO
    - validate pending operations
    - manage bank transfers and associated beneficiaries
    - create related statitics and graphs
    - enable the management of the profile and settings of the app
    
- Code quality
    - tidy up files
    - set up routing to optimize loading (lazy loading)
    - change the structure of the application to implement a parent-child component logic and thus separate route components from subcomponents

## Back-end code
The code for the back-end API: [Leika API](https://github.com/LSS-commits/leika_api)

## Authors / Contributors
[<img src="https://github.com/LSS-commits.png" width="60px;"/>](https://github.com/LSS-commits)

[<img src="https://github.com/Kaheyio.png" width="60px;"/>](https://github.com/Kaheyio)


[Original repo for v1](https://github.com/Kaheyio/leikafront)


If you wish to make major changes, please open a discussion about the problems encountered (Issues) so that we can discuss possible improvements.


