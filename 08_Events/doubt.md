## attachEvent()
## jQuery

```
    addEventistener has 3 parameter
    1. event name
    2. function definition
    3. false (default) doubt
```

```
    use onlick in html produce problem in large projects

    while if we select id in script and use onlick it is also a prolem
    bcuz bhot jyda information nhi mil rhi hai

    best approach select elements and use addEventistener('eventName',funtion(),false(ye parameter default false hota hai isly likhne ki jarurat bhi nhi hai))
    addEventistener has 3 parameter
    1. event name
    2. function definition
    3. false (default)2
    attachEvent() use when 
    jQuery
```

<!--
    Interview question
    click hua tb window height or width kya thi
    timeStamp kya tha
    konsa view the tb
    ek div banao or jha pr bhi click kru wha pr circle create ho jaay
    //type, timestamp, defualtPrevented
    // target, toElement,srcElement,currentTarget
    //clientX,clientY,screenX,screenY
    //altkey,ctrlkey,shiftkey,keycode
-->


 ```   event propogation ke 2 context hote hai 
    event bubbling (default hota hai False) (market me yhi use hota hai)
    event bubbling -- > down to top jata hai
    event capturing (true) -- > ye jata hai top to bottom
    we stop propogation using
    e.stopPropogation()
    e.preventDefualt();
```