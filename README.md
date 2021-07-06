# BitTorrent Stats
Small Nodejs script that queries for random torrent node ids and checks geographic location of the ip addresses in order to get some samples of information about the countries with higher participation on the BitTorrent DHT.
Outputs an orderer array of {country: number of peers found}
By default the script checks for 100 random ids.

#Usage
```
node index.js

/*
{ address: '178.162.139.157', family: 'IPv4', port: 11491, size: 292 }
{ address: '176.180.240.127', family: 'IPv4', port: 6889, size: 300 }
...
...
...
...
  [ 'RU', 74 ], [ 'US', 58 ], [ 'NL', 36 ], [ 'CN', 27 ],
  [ 'FR', 25 ], [ 'GB', 21 ], [ 'IN', 21 ], [ 'CA', 19 ],
  [ 'UA', 17 ], [ 'KR', 16 ], [ 'JP', 16 ], [ 'DE', 13 ],
  [ 'AU', 9 ],  [ 'HU', 9 ],  [ 'BG', 8 ],  [ 'SE', 8 ],
  [ 'HK', 7 ],  [ 'BR', 6 ],  [ 'LV', 6 ],  [ 'CZ', 6 ],
  [ 'ES', 5 ],  [ 'TH', 5 ],  [ 'BE', 5 ],  [ 'TW', 5 ],
  [ 'GR', 5 ],  [ 'SG', 5 ],  [ 'IT', 4 ],  [ 'RO', 4 ],
  [ 'IL', 4 ],  [ 'LT', 3 ],  [ 'KZ', 3 ],  [ 'ZA', 3 ],
  [ 'PT', 3 ],  [ 'CH', 3 ],  [ 'PL', 2 ],  [ 'MY', 2 ],
  [ 'NZ', 2 ],  [ 'SI', 2 ],  [ 'AR', 2 ],  [ 'NO', 1 ],
  [ 'DK', 1 ],  [ 'IE', 1 ],  [ 'SN', 1 ],  [ 'NG', 1 ],
  [ 'PK', 1 ],  [ 'AD', 1 ],  [ 'UZ', 1 ],  [ 'FI', 1 ],
  [ 'SA', 1 ],  [ 'ID', 1 ],  [ 'MX', 1 ],  [ 'ET', 1 ],
  [ 'SK', 1 ],  [ 'CO', 1 ],  [ 'AE', 1 ],  [ 'GE', 1 ],
  [ 'CY', 1 ],  [ 'TR', 1 ]
*/

```


