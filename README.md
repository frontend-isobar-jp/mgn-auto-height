# mgn-auto-height ( Don't Need jQuery )


Implement accordion function.
- Target browser : IE9+

___

# Install

```
npm i mgn-auto-height -S
```

## Or Download raw data
[↓ download "mgn-auto-height.js"](https://raw.githubusercontent.com/frontend-isobar-jp/mgn-auto-height/master/src/mgn-auto-height.js)


___

# Import

```
import mgnAutoHeight from 'mgn-auto-height';
```

___

# Constructor

```
new mgnAutoHeight(element);
```
|Argument|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|element|String|-(Required)|Specify target element.<br>ex) ".j-autoheight"|

___

# Method

|Method|Argument|Descroption|
|:-------|:--------|:------|
|SetTarget()|-|Re-adjust height.|

___

# Demo

[https://frontend-isobar-jp.github.io/mgn-auto-height/](https://frontend-isobar-jp.github.io/mgn-auto-height/)

```
import mgnAutoHeight from 'mgn-auto-height';

new mgnAutoHeight( ".j-autoheight" );
```
