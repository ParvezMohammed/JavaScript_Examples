const req = fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("It Worked !!!! (Page 1)");
        console.log(data);
        return fakeRequestPromise ('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("It Worked !!!! (Page 2)");
        console.log(data);
        return fakeRequestPromise ('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("It Worked !!!! (Page 3)");
        console.log(data);
    })
    .catch((err) => {
            console.log("OH NO, A Request Failed");
            console.log(err);
    })
        
