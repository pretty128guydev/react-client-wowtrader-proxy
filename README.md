# options6-proxy
Allows you to develop options6 react project without backend, acts like a man-in-the-middle for EU-zone backend. Switches CORS, cookies domain.

## Setup
### Step 1
* add alias to /etc/hosts: trading.tradesmarter.com 127.0.0.1
### Step 2
* Change endpoint in options6 code to: ```http://trading.tradesmarter.com```
### Step 3
Run this proxy:
* yarn 
* Run your options6 local dev server (```yarn start```)
* yarn start
* Open http://trading.tradesmarter.com