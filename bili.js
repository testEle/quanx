

新版需要自己抓包找域名

[rewrite_local]

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header blbl.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

var modifiedHeaders = $request.headers;

//modifiedHeaders['Cookie'] = '';

modifiedHeaders['Authorization'] = 'Au';

modifiedHeaders['User-Agent'] = 'UA';

$done({headers : modifiedHeaders});
